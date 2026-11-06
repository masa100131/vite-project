import './Company.css'

export interface CompanyInfo {
  label: string
  value: string
}

export interface CompanyProps {
  info: CompanyInfo[]
}

export function Company({ info }: CompanyProps) {
  return (
    <section className="company">
      <header className="company-header">
        <h2 className="company-header-title">会社紹介</h2>
        <p className="company-header-label">company</p>
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
