import type { Meta, StoryObj } from '@storybook/react-vite'
import { InquirySubmit } from './InquirySubmit'

const meta = {
  title: 'Components/InquirySubmit',
  component: InquirySubmit,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InquirySubmit>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
