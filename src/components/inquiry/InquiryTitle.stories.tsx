import type { Meta, StoryObj } from '@storybook/react-vite'
import { InquiryTitle } from './InquiryTitle'

const meta = {
  title: 'Components/InquiryTitle',
  component: InquiryTitle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof InquiryTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
