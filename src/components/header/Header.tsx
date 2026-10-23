import { useState } from 'react'
import './Header.css'

export type HeaderNavItem = {
  label: string
  href: string
}

export interface HeaderProps {
  logo?: string
  logoHref?: string
  navItems?: HeaderNavItem[]
}

const defaultNavItems: HeaderNavItem[] = [
  { label: '記事ページサンプル', href: '#sample' },
  { label: 'Extensionをダウンロード', href: '#download' },
]

export function Header({
  logo = 'XeoryExtension',
  logoHref = '#',
  navItems = defaultNavItems,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="xeory-header" role="banner">
      <div className="xeory-header-inner">
        <h1 className="xeory-header-logo">
          <a href={logoHref}>{logo}</a>
        </h1>

        <nav
          id="xeory-header-navigation"
          className={`xeory-header-nav${isMenuOpen ? ' is-open' : ''}`}
          aria-label="メインナビゲーション"
        >
          <ul className="xeory-header-list">
            {navItems.map((item) => (
              <li className="xeory-header-item" key={`${item.href}-${item.label}`}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="xeory-header-menu-button"
          type="button"
          aria-controls="xeory-header-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
