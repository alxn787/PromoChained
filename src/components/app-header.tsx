'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { ThemeSelect } from '@/components/theme-select'
import { ClusterUiSelect } from './cluster/cluster-ui'
import { WalletButton } from '@/components/solana/solana-provider'
import CenterUnderline from '@/fancy/components/text/underline-center'

export function AppHeader({ links = [] }: { links: { label: string; path: string }[] }) {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  function isActive(path: string) {
    return path === '/' ? pathname === '/' : pathname.startsWith(path)
  }

  return (
    <div className=''>
      <div className="max-w-7xl mx-auto my-5 ">
        <div className='flex justify-between '>
            <div className="flex items-baseline gap-4">
              <Link className="text-3xl text-[#ff5840]/90 font-extrabold " href="/">
                <span>PromoChain</span>
              </Link>
            </div>
            <div className='flex items-center gap-10 text-[#230c08] font-medium'>
              <Link className='hover:text-[#ff5840]' href={'/'}>
                <CenterUnderline>Sponsor a Promo</CenterUnderline>
              </Link>
              <Link className='hover:text-[#ff5840]' href={'/'}>
                <CenterUnderline>Join a Promo</CenterUnderline>
              </Link>
              <Link className='hover:text-[#ff5840]' href={'/'}>
                <CenterUnderline>About Us</CenterUnderline>
              </Link>
              
            </div>
            <div className=" ">
              <WalletButton />
            </div>
        </div>
      </div>
    </div>
  )
}
