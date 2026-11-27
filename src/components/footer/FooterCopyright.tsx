export interface FooterCopyrightProps {
  copyright: string
}

export function FooterCopyright({ copyright }: FooterCopyrightProps) {
  return <p className="site-footer-copyright">{copyright}</p>
}

export default FooterCopyright
