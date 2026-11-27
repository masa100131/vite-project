export interface FooterLinkItemProps {
  label: string
  href: string
  icon?: string
}

export function FooterLinkItem({ label, href, icon }: FooterLinkItemProps) {
  return (
    <li className="site-footer-item">
      <a href={href}>
        {icon && (
          <span className="site-footer-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        {label}
      </a>
    </li>
  )
}

export default FooterLinkItem
