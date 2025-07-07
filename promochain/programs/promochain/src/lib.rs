use anchor_lang::prelude::*;

declare_id!("Ftsgw55ApGkXv6jFnCT5kHKuGFeYE7fcHZ6VF1bg6TsT");

#[program]
pub mod promochain {
    use super::*;

    pub fn initialize(ctx: Context<InitConfig>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        let config = &mut ctx.accounts.config;
        config.treasury_pubkey
        Ok(())
    }
}


#[derive(Accounts)]
pub struct InitConfig<'info> {
    #[account(
        mut
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