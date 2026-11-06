import type { Meta, StoryObj } from '@storybook/react-vite'
import { CompanyTitle } from './CompanyTitle'

const meta = {
  title: 'Components/CompanyTitle',
  component: CompanyTitle,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CompanyTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
