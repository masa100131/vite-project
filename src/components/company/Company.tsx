import './Company.css'

export interface CompanyInfo {
  label: string
  value: string
}

export interface CompanyProps {
  title?: string
  label?: string
  info: CompanyInfo[]
}

export function Company({
  title = '会社紹介',
  label = 'company',
  info,
}: CompanyProps) {
  return (
    <section className="company">
      <header className="company-header">
        <h2 className="company-header-title">{title}</h2>
        <p className="company-header-label">{label}</p>
      </header>
      <dl className="company-info">
        {info.map(({ label: infoLabel, value }) => (
          <div className="company-row" key={infoLabel}>
            <dt className="company-label">{infoLabel}</dt>
            <dd className="company-value">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Company
