import type { Meta, StoryObj } from '@storybook/react-vite'
import { PostTitle } from './PostTitle'

const meta = {
  title: 'Components/PostTitle',
  component: PostTitle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PostTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Popular: Story = {
  args: {
    id: 'posts-title',
    title: '人気のある記事',
  },
}

export const Recent: Story = {
  args: {
    id: 'recent-posts-title',
    title: '最近の投稿',
  },
}
