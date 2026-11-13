import './RecentPostItem.css'

export interface RecentPostItemProps {
  href: string
  imageSrc: string
  imageAlt: string
  category: string
  title: string
  dateTime: string
  year: string
  monthAndDay: string
}

export function RecentPostItem({
  href,
  imageSrc,
  imageAlt,
  category,
  title,
  dateTime,
  year,
  monthAndDay,
}: RecentPostItemProps) {
  return (
    <article className="recent-post-item">
      <a className="recent-post-item-link" href={href}>
        <img className="recent-post-item-thumb" src={imageSrc} alt={imageAlt} />
        <p className="recent-post-item-category">{category}</p>
        <h3 className="recent-post-item-title">{title}</h3>
        <time className="recent-post-item-date" dateTime={dateTime}>
          {year}
          <br />
          <span>{monthAndDay}</span>
        </time>
      </a>
    </article>
  )
}

export default RecentPostItem
