import './CompanyField.css'

export interface CompanyFieldProps {
  label: string
  value: string
}

export function CompanyField({ label, value }: CompanyFieldProps) {
  return (
    <div className="company-row">
      <dt className="company-label">{label}</dt>
      <dd className="company-value">{value}</dd>
    </div>
  )
}

export default CompanyField
