import type { Meta, StoryObj } from '@storybook/react-vite'
import { PostItem } from './PostItem'

const meta = {
  title: 'Components/PostItem',
  component: PostItem,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '220px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    href: 'https://xeory.jp/extension/demo-top',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample02.jpg',
    imageAlt: 'サンプル画像',
    category: 'カテゴリー#1',
    title: 'テスト投稿',
    rank: 1,
  },
} satisfies Meta<typeof PostItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Post2: Story = {
  args: {
    href: 'https://xeory.jp/extension/extension-cta',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample04.jpg',
    category: 'カテゴリー#1',
    rank: 2,
  },
}

export const Post3: Story = {
  args: {
    href: 'https://xeory.jp/extension/facebook-likebox',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample01.jpg',
    category: 'カテゴリー#4',
    rank: 3,
  },
}

export const Post4: Story = {
  args: {
    href: 'https://xeory.jp/extension/wp-gallery',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample03.jpg',
    category: 'カテゴリー#2',
    rank: 4,
  },
}

export const Post5: Story = {
  args: {
    href: 'https://xeory.jp/extension/xeorybase-social-media',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample05.jpg',
    category: 'カテゴリー#3',
    rank: 5,
  },
}

export const WithoutRank: Story = {
  args: {
    rank: undefined,
  },
}
