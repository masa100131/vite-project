import type { Meta, StoryObj } from '@storybook/react-vite'
import { FeatureHeader } from './FeatureHeader'

const meta = {
  title: 'Components/FeatureHeader',
  component: FeatureHeader,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
