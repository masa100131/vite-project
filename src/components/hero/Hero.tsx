import './Hero.css'

export interface HeroProps {
  title?: string
  description?: string
}

export function Hero({
  title = 'Xeory Extension',
  description = 'Xeory Extensionはワンコラムのサイト型テーマです。ユーザーに対して重要なコンテンツを効率的に届けられるようにデザインされています。5種類のカラーバリエーションを用意しています。',
}: HeroProps) {
  return (
    <section className="xeory-hero" aria-labelledby="xeory-hero-title">
      <h2 className="xeory-hero-title" id="xeory-hero-title">
        {title}
      </h2>
      <p className="xeory-hero-text">{description}</p>
    </section>
  )
}

export default Hero
