import type { Meta, StoryObj } from '@storybook/react-vite'
import { PopularPostsTitle } from './PopularPostsTitle'

const meta = {
  title: 'Components/PopularPostsTitle',
  component: PopularPostsTitle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PopularPostsTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
