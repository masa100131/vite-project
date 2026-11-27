import type { Meta, StoryObj } from '@storybook/react-vite'
import './Footer.css'
import { FooterCopyright } from './FooterCopyright'

const meta = {
  title: 'Components/FooterCopyright',
  component: FooterCopyright,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="site-footer-bottom">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FooterCopyright>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    copyright: '© Copyright 2026 XeoryExtension. All rights reserved.',
  },
}
