import './PostItem.css'

export interface PostItemProps {
  href: string
  imageSrc: string
  imageAlt: string
  category: string
  title: string
  rank?: number
}

export function PostItem({
  href,
  imageSrc,
  imageAlt,
  category,
  title,
  rank,
}: PostItemProps) {
  return (
    <article className="post-item">
      <a className="post-item-link" href={href}>
        <img className="post-item-thumb" src={imageSrc} alt={imageAlt} />
        <p className="post-item-category">{category}</p>
        <h3 className="post-item-title">{title}</h3>
        {rank !== undefined && (
          <p className="post-item-rank">
            NO.<span>{rank}</span>
          </p>
        )}
      </a>
    </article>
  )
}

export default PostItem
