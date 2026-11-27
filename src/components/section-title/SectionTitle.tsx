import './SectionTitle.css'

export interface SectionTitleProps {
  title: string
  label: string
}

export function SectionTitle({ title, label }: SectionTitleProps) {
  return (
    <header className="section-title">
      <h2 className="section-title-heading">{title}</h2>
      <p className="section-title-label">{label}</p>
    </header>
  )
}

export default SectionTitle
