import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { PostItem } from './PostItem'

afterEach(cleanup)

describe('PostItem', () => {
  it('記事カードのHTMLをスナップショットと照合する', () => {
    const { asFragment } = render(
      <PostItem
        href="/article"
        imageSrc="/article.jpg"
        imageAlt="記事のサンプル画像"
        category="カテゴリー#1"
        title="テスト記事"
        rank={1}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('記事のタイトル・リンク・画像・順位を表示する', () => {
    render(
      <PostItem
        href="/article"
        imageSrc="/article.jpg"
        imageAlt="記事のサンプル画像"
        category="カテゴリー#1"
        title="テスト記事"
        rank={1}
      />
    )

    expect(screen.getByRole('heading', { name: 'テスト記事' })).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/article')
    expect(screen.getByRole('img', { name: '記事のサンプル画像' })).toBeInTheDocument()
    expect(screen.getByText('カテゴリー#1')).toBeInTheDocument()
    expect(screen.getByText('NO.')).toHaveTextContent('NO.1')
  })
})
