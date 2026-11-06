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
    <article className="service">
      <h3 className="service-title">{title}</h3>
      <p className="service-subtitle">{subtitle}</p>
      <a className="service-link" href={href}>
        {linkLabel}
      </a>
    </article>
  )
}

export default Service
