import type { Meta, StoryObj } from '@storybook/react-vite'
import { RecentPostItem } from './RecentPostItem'

const meta = {
  title: 'Components/RecentPostItem',
  component: RecentPostItem,
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
    dateTime: '2014-10-24',
    year: '2014',
    monthAndDay: '10/24',
  },
} satisfies Meta<typeof RecentPostItem>

export default meta
type Story = StoryObj<typeof meta>

export const Post1: Story = {}

export const Post2: Story = {
  args: {
    href: 'https://xeory.jp/extension/extension-cta',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample04.jpg',
    category: 'カテゴリー#1',
  },
}

export const Post3: Story = {
  args: {
    href: 'https://xeory.jp/extension/facebook-likebox',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample01.jpg',
    category: 'カテゴリー#4',
  },
}

export const Post4: Story = {
  args: {
    href: 'https://xeory.jp/extension/xeorybase-social-media',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample05.jpg',
    category: 'カテゴリー#3',
  },
}

export const Post5: Story = {
  args: {
    href: 'https://xeory.jp/extension/wp-gallery',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample03.jpg',
    category: 'カテゴリー#2',
  },
}
