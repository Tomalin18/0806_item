'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: '首頁', href: '/' as const },
  { name: '在地商家', href: '/local-merchant' as const },
  { name: '多商家市集', href: '/marketplace' as const },
  { name: '新聞雜誌', href: '/news' as const },
  { name: '活動網站', href: '/events' as const },
]

export function Navigation() {
  return (
    <nav className="bg-card/95 backdrop-blur border-b border-gaming-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary gaming-text-glow">
            KanaKana
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 hover:gaming-text-glow"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="gaming-glow-green hover:gaming-glow-blue transition-all duration-300">
            立即體驗
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              ☰
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden border-t border-gaming-border">
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}