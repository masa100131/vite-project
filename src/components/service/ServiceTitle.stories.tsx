import type { Meta, StoryObj } from '@storybook/react-vite'
import { ServiceTitle } from './ServiceTitle'

const meta = {
  title: 'Components/ServiceTitle',
  component: ServiceTitle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ServiceTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
