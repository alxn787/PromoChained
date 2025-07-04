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
    <header className="relative z-50 px-4 py-2 my-5 max-w-6xl mx-auto flex justify-between">
      <div className="items-center">
        <div className="flex items-baseline gap-4">
          <Link className="text-3xl text-[#ff5840]/90 font-extrabold " href="/">
            <span>PromoChain</span>
          </Link>
          <div className="hidden md:flex items-center">
            {/* <ul className="flex gap-4 flex-nowrap items-center">
              {links.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    className={`hover:text-neutral-500 dark:hover:text-white ${isActive(path) ? 'text-neutral-500 dark:text-white' : ''}`}
                    href={path}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <WalletButton />
        </div>
      </div>
    </header>
  )
}
