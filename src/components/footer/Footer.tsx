import './Footer.css'

export interface FooterLink {
  label: string
  href: string
  icon?: string
}

export interface FooterProps {
  logo?: string
  menuLinks?: FooterLink[]
  socialLinks?: FooterLink[]
  copyright?: string
}

const defaultMenuLinks: FooterLink[] = [
  {
    label: '記事ページサンプル',
    href: 'https://xeory.jp/extension/sample',
  },
  {
    label: 'Extensionをダウンロード',
    href: 'https://xeory.jp/template/xeory-extension/',
  },
]

const defaultSocialLinks: FooterLink[] = [
  { label: 'X', href: 'https://x.com/@BAZUBU', icon: '𝕏' },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/BazuBu',
    icon: 'f',
  },
  {
    label: 'Feedly',
    href: 'https://feedly.com/i/subscription/feed/https://xeory.jp/extension/feed',
    icon: '◔',
  },
]

export function Footer({
  logo = 'XeoryExtension',
  menuLinks = defaultMenuLinks,
  socialLinks = defaultSocialLinks,
  copyright = '© Copyright 2026 XeoryExtension. All rights reserved.',
}: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <p className="site-footer-logo">{logo}</p>
        <div className="site-footer-content">
          <FooterSection title="メニュー" links={menuLinks} />
          <FooterSection title="ソーシャルメディア" links={socialLinks} />
        </div>
      </div>
      <div className="site-footer-bottom">
        <p className="site-footer-copyright">{copyright}</p>
      </div>
    </footer>
  )
}

function FooterSection({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <section className="site-footer-section">
      <h2 className="site-footer-heading">{title}</h2>
      <ul className="site-footer-list">
        {links.map(({ label, href, icon }) => (
          <li className="site-footer-item" key={`${href}-${label}`}>
            <a href={href}>
              {icon && <span className="site-footer-icon" aria-hidden="true">{icon}</span>}
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Footer
