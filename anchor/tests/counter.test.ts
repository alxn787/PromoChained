import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { Keypair } from '@solana/web3.js'
import { Promochain } from '../target/types/promochain'

describe('counter', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)
  const payer = provider.wallet as anchor.Wallet

  const program = anchor.workspace.Counter as Program<Promochain>

  const counterKeypair = Keypair.generate()

  it('Initialize Counter', async () => {
    
  })
})
