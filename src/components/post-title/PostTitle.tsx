import './PostTitle.css'

export interface PostTitleProps {
  id: string
  title: string
}

export function PostTitle({ id, title }: PostTitleProps) {
  return (
    <h2 className="post-title" id={id}>
      {title}
    </h2>
  )
}

export default PostTitle
