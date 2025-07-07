use anchor_lang::prelude::*;

declare_id!("Ftsgw55ApGkXv6jFnCT5kHKuGFeYE7fcHZ6VF1bg6TsT");

#[program]
pub mod promochain {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
