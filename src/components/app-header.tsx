'use client'
import Link from 'next/link'
import { WalletButton } from '@/components/solana/solana-provider'
import CenterUnderline from '@/fancy/components/text/underline-center'
import { Menu } from 'lucide-react' 

export function AppHeader() {
  return (
    <div className='bg-white '> 
      <div className="max-w-7xl mx-auto py-4 px-6 md:px-4"> 
        <div className='flex justify-between items-center'> 
            <div className="flex items-baseline gap-4">
              <Link className="text-3xl text-[#ff5840]/90 font-extrabold " href="/">
                <span>PromoChain</span>
              </Link>
            </div>

            <div className='hidden md:flex items-center gap-10 text-[#230c08] font-medium'>
              <Link className='hover:text-[#ff5840] transition-colors duration-200' href={'/sponsor'}>
                <CenterUnderline>Sponsor a Promo</CenterUnderline>
              </Link>
              <Link className='hover:text-[#ff5840] transition-colors duration-200' href={'/join'}>
                <CenterUnderline>Join a Promo</CenterUnderline>
              </Link>
              <Link className='hover:text-[#ff5840] transition-colors duration-200' href={'/about'}>
                <CenterUnderline>About Us</CenterUnderline>
              </Link>
            </div>
            
            <div className="flex items-center gap-4"> {/* Group wallet button and mobile menu */}
              <div className="text-neutral-900 ">
                <WalletButton className='text-black' />
              </div>
              <button className="md:hidden text-[#230c08] focus:outline-none">
                <Menu className="h-7 w-7" />
              </button>
            </div>
        </div>

        
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center space-y-3 text-[#230c08] font-medium">
            <Link className='hover:text-[#ff5840]' href={'/sponsor'}>
              Sponsor a Promo
            </Link>
            <Link className='hover:text-[#ff5840]' href={'/join'}>
              Join a Promo
            </Link>
            <Link className='hover:text-[#ff5840]' href={'/about'}>
              About Us
            </Link>
          </div>
        </div>
       
      </div>
    </div>
  )
}