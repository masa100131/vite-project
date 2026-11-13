import type { Meta, StoryObj } from '@storybook/react-vite'
import { RecentPostsTitle } from './RecentPostsTitle'

const meta = {
  title: 'Components/RecentPostsTitle',
  component: RecentPostsTitle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RecentPostsTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
