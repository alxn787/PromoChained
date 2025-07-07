use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
};
use anchor_spl::token::Transfer;
use solana_program::rent::Rent;
use anchor_spl::token::{Mint, Token, TokenAccount};

    use anchor_lang::prelude::Pubkey;
    

#[constant]
pub const PROGRAM_AUTHORITY: Pubkey = Pubkey::new_from_array([
    0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1,
]);
pub const SOL_ADDRESS: &str = "So11111111111111111111111111111111111111112";


declare_id!("8oGU39Svs87zZzAYSfMzE4j2Bt1QtKVpsSxWGKtRh8b6");

#[program]
pub mod promochain {
    use anchor_spl::{token, token_interface::spl_pod::primitives};

    use super::*;

    pub fn init_config(ctx: Context<InitConfig>) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.treasury_pubkey = PROGRAM_AUTHORITY;
        config.authority_pubkey = ctx.accounts.admin.key();
        config.treasury_fee = 5;
        config.bump = ctx.bumps.config;
        config.usdc_mint = Pubkey::default();// TODO: Change to USDC mint
        Ok(())
    }

    pub fn init_game(ctx: Context<InitGame>, game_code: String, start_time: i64, end_time: i64, prize_amount: u64) -> Result<()> {
        let game = &mut ctx.accounts.game;
        game.admin = ctx.accounts.admin.key();
        game.game_code = game_code;
        game.bump = ctx.bumps.game;
        game.vault_bump = ctx.bumps.vault;
        game.start_time = start_time;
        game.end_time = end_time;
        game.prize_amount = prize_amount;
        game.winner = Pubkey::default();
        game.is_claimed = false;
        game.usdc_mint = ctx.accounts.config.usdc_mint;

        let cpi_context = CpiContext::new(
            ctx.accounts.token_program.to_account_info(),
            Transfer {
                from: ctx.accounts.admin_usdc_token_account.to_account_info(),
                to: ctx.accounts.vault_token_account.to_account_info(),
                authority: ctx.accounts.admin.to_account_info(),
            }
            );

            token::transfer(cpi_context, prize_amount)?;
        Ok(())
    }

}


#[derive(Accounts)]
pub struct InitConfig<'info> {
    #[account(
        mut,
        constraint = admin.key() == PROGRAM_AUTHORITY @ ErrorCode::UnauthorizedProgramAuthority
    )]
    pub admin: Signer<'info>,

    #[account(
        init,
        payer = admin,
        space = ProgramConfig::INIT_SPACE,
        seeds = [b"config"],
        bump
    )]
    pub config: Account<'info, ProgramConfig>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(
    game_code: String,
)]
pub struct InitGame<'info> {
    #[account(mut)]
    pub admin: Signer<'info>,

    #[account(
        init,
        payer = admin,
        space = Game::INIT_SPACE,
        seeds = [b"game", admin.key().as_ref(), game_code.as_bytes()],
        bump,
    )]
    pub game: Account<'info, Game>,

    #[account(
        seeds = [b"config"],
        bump = config.bump,
        constraint = config.usdc_mint != Pubkey::default() @ ErrorCode::ConfigNotInitialized // Ensure config is initialized with USDC mint
    )]
    pub config: Account<'info, ProgramConfig>,

    #[account(
        constraint = usdc_mint.key() == config.usdc_mint @ ErrorCode::InvalidMint
    )]
    pub usdc_mint: Account<'info, Mint>,

    /// CHECK: The vault PDA that will own the
    /// vault_token_account. It's safe because
    /// it's a PDA.
    #[account(
        seeds = [b"vault", admin.key().as_ref(), game_code.as_bytes()],
        bump,
    )]
    pub vault: UncheckedAccount<'info>,

    #[account(
        init, 
        payer = admin,
        associated_token::mint = usdc_mint,
        associated_token::authority = vault 
    )]
    pub vault_token_account: Account<'info, TokenAccount>,

    #[account(
        mut,
        associated_token::mint = usdc_mint,
        associated_token::authority = admin
    )]
    pub admin_usdc_token_account: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct EndGame<'info> {
    #[account(mut)]
    pub admin: Signer<'info>,

    #[account(
        mut,
        seeds = [b"game", game.admin.as_ref(), game.game_code.as_bytes()],
        bump = game.bump,
        constraint = game.admin == admin.key() @ ErrorCode::InvalidAdmin,
        constraint = !game.is_claimed @ ErrorCode::AlreadyClaimed,
        constraint = game.usdc_mint == config.usdc_mint @ ErrorCode::InvalidMint
    )]
    pub game: Account<'info, Game>,

    #[account(
        seeds = [b"config"],
        bump = config.bump,
        constraint = config.usdc_mint != Pubkey::default() @ ErrorCode::ConfigNotInitialized 
    )]
    pub config: Account<'info, ProgramConfig>,

    #[account(
        constraint = usdc_mint.key() == config.usdc_mint @ ErrorCode::InvalidMint
    )]
    pub usdc_mint: Account<'info, Mint>,

    /// CHECK: The vault PDA is the owner and
    /// signer for the vault_token_account.
    #[account(
        mut,
        seeds = [b"vault", game.admin.as_ref(), game.game_code.as_bytes()],
        bump = game.vault_bump,
    )]
    pub vault: UncheckedAccount<'info>,

    #[account(
        mut,
        associated_token::mint = usdc_mint,
        associated_token::authority = vault
    )]
    pub vault_token_account: Account<'info, TokenAccount>,

    #[account(mut)]
    pub winner: SystemAccount<'info>,

    #[account(
        init_if_needed,
        payer = admin,
        associated_token::mint = usdc_mint,
        associated_token::authority = winner 
    )]
    pub winner_usdc_token_account: Account<'info, TokenAccount>,

    /// CHECK: Only used to derive the
    /// treasury_usdc_token_account's owner.
    #[account(
        constraint = treasury_authority.key() == config.treasury_pubkey @ ErrorCode::InvalidTreasury
    )]
    pub treasury_authority: UncheckedAccount<'info>,

    #[account(
        mut,
        associated_token::mint = usdc_mint,
        associated_token::authority = treasury_authority
    )]
    pub treasury_usdc_token_account: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

#[account]
#[derive(Default, InitSpace)]
pub struct ProgramConfig {
    pub treasury_pubkey: Pubkey,
    pub authority_pubkey: Pubkey,
    pub treasury_fee: u16,
    pub bump: u8,
    pub usdc_mint: Pubkey,
}

#[account]
#[derive(InitSpace, Default)]
pub struct Game {
    pub admin: Pubkey,
    #[max_len(20)] 
    pub game_code: String,
    pub bump: u8,
    pub vault_bump: u8,
    pub start_time: i64,
    pub end_time: i64,
    pub prize_amount: u64,
    pub winner: Pubkey,
    pub is_claimed: bool,
    pub usdc_mint: Pubkey,
}

    #[error_code]
    pub enum ErrorCode {
        #[msg("The provided token mint is not the expected USDC mint.")]
        InvalidMint,
        #[msg("The prize for this game has already been claimed.")]
        AlreadyClaimed,
        #[msg("The caller is not the authorized quiz master for this game.")]
        UnauthorizedQuizMaster,
        #[msg("Game name is too long.")]
        NameTooLong,
        #[msg("Game code is too long.")]
        GameCodeTooLong,
        #[msg("End time must be after start time.")]
        InvalidTimeRange,
        #[msg("Admin token account not provided for SPL transfer.")]
        AdminTokenAccountNotProvided,
        #[msg("Vault token account not provided for SPL transfer.")]
        VaultTokenAccountNotProvided,
        #[msg("Treasury token account not provided for SPL transfer.")]
        TreasuryTokenAccountNotProvided,
        #[msg("Invalid admin for this game.")]
        InvalidAdmin,
        #[msg("Invalid token account for the game's token mint or native SOL requirement.")]
        InvalidTokenAccount,
        #[msg("Numeric overflow occurred.")]
        NumericOverflow,
        #[msg("Invalid treasury account.")]
        InvalidTreasury,
        #[msg("The caller is not the authorized program authority.")]
        UnauthorizedProgramAuthority,
        #[msg("The treasury fee percentage is too high.")]
        TreasuryFeeTooHigh,
        #[msg("The treasury address cannot be blank.")]
        TreasuryAddressBlank,
        #[msg("Config not initialized.")]
        ConfigNotInitialized,
        #[msg("Winner token account not provided for SPL winner.")]
        WinnerTokenAccountNotProvided,
    }