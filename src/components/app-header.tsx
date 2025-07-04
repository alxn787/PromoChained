'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { ThemeSelect } from '@/components/theme-select'
import { ClusterUiSelect } from './cluster/cluster-ui'
import { WalletButton } from '@/components/solana/solana-provider'

export function AppHeader({ links = [] }: { links: { label: string; path: string }[] }) {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState(false)

  function isActive(path: string) {
    return path === '/' ? pathname === '/' : pathname.startsWith(path)
  }

  return (
    <div className="min-w-7xl mx-auto my-5">
      <div className='flex justify-between items-center'>
          <div>

          </div>
          <div className="flex items-baseline gap-4">
            <Link className="text-3xl text-[#ff5840]/90 font-extrabold " href="/">
              <span>PromoChain</span>
            </Link>
          </div>
          <div className=" ">
            <WalletButton />
          </div>
      </div>
    </div>
  )
}
