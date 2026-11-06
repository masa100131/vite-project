import type { Meta, StoryObj } from '@storybook/react-vite'
import { Inquiry } from './Inquiry'

const meta = {
  title: 'Components/Inquiry',
  component: Inquiry,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#47b39d' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Inquiry>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
