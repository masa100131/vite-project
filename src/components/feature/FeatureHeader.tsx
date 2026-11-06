import './FeatureHeader.css'

export interface FeatureHeaderProps {
  title?: string
  label?: string
}

export function FeatureHeader({
  title = 'Xeory Extensionの特徴',
  label = 'feature',
}: FeatureHeaderProps) {
  return (
    <header className="feature-header">
      <h2 className="feature-header-title">{title}</h2>
      <p className="feature-header-label">{label}</p>
    </header>
  )
}

export default FeatureHeader
