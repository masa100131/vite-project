import type { CSSProperties } from 'react'
import './Feature.css'

export interface FeatureProps {
  number: number
  title: string
  subtitle: string
  text: string
  href?: string
  imageSrc?: string
  reverse?: boolean
}

export function Feature({
  number,
  title,
  subtitle,
  text,
  href = '#',
  imageSrc,
  reverse = false,
}: FeatureProps) {
  const featureStyle: CSSProperties & { '--feature-image'?: string } = {
    '--feature-image': imageSrc ? `url("${imageSrc}")` : 'none',
  }

  return (
    <section className="feature-section">
      <header className="feature-header">
        <h2 className="feature-header-title">Xeory Extensionの特徴</h2>
        <p className="feature-header-label">feature</p>
      </header>
      <article
        className={`feature${reverse ? ' feature-reverse' : ''}`}
        style={featureStyle}
      >
        <span className="feature-num">{number}</span>
        <div className="feature-body">
          <h3 className="feature-title">{title}</h3>
          <p className="feature-subtitle">{subtitle}</p>
          <p className="feature-text">{text}</p>
          <p className="feature-action">
            <a className="feature-button" href={href}>
              詳しく見る
            </a>
          </p>
        </div>
      </article>
    </section>
  )
}

export default Feature
