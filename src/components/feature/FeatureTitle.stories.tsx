import type { Meta, StoryObj } from '@storybook/react-vite'
import { FeatureTitle } from './FeatureTitle'

const meta = {
  title: 'Components/FeatureTitle',
  component: FeatureTitle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
