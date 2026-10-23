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

export const WithoutRank: Story = {
  args: {
    rank: undefined,
  },
}
