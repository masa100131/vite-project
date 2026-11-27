import type { Meta, StoryObj } from '@storybook/react-vite'
import { SectionTitle } from './SectionTitle'

const meta = {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SectionTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Feature: Story = {
  args: {
    title: 'Xeory Extensionの特徴',
    label: 'feature',
  },
}

export const Service: Story = {
  args: {
    title: 'サービス紹介',
    label: 'service',
  },
}

export const Company: Story = {
  args: {
    title: '会社紹介',
    label: 'company',
  },
}

export const Inquiry: Story = {
  args: {
    title: 'お問い合わせ',
    label: 'inquiry',
  },
}
