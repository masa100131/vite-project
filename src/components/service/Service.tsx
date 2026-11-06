import './Service.css'

export interface ServiceProps {
  title: string
  subtitle: string
  href: string
  linkLabel: string
}

export function Service({
  title,
  subtitle,
  href,
  linkLabel,
}: ServiceProps) {
  return (
    <section className="services">
      <header className="service-header">
        <h2 className="service-header-title">サービス紹介</h2>
        <p className="service-header-label">service</p>
      </header>
      <article className="service">
        <h3 className="service-title">{title}</h3>
        <p className="service-subtitle">{subtitle}</p>
        <a className="service-link" href={href}>
          {linkLabel}
        </a>
      </article>
    </section>
  )
}

export default Service
