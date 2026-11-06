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

export const Service: Story = {
  args: {
    title: 'サービス紹介',
    label: 'service',
  },
}

export const Company: Story = {
  args: {
    title: '会社概要',
    label: 'company',
  },
}

export const Inquiry: Story = {
  args: {
    title: 'お問い合わせ',
    label: 'inquiry',
  },
}
