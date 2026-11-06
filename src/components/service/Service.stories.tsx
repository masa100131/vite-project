import type { Meta, StoryObj } from '@storybook/react-vite'
import { Service } from './Service'

const meta = {
  title: 'Components/Service',
  component: Service,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          maxWidth: '1000px',
          backgroundColor: '#fff',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Xeoryカスタマイズ',
    subtitle: 'Xeory Customize',
    href: 'https://xeory.jp/design-examples/',
    linkLabel: 'カスタマイズ事例を見る',
  },
} satisfies Meta<typeof Service>

export default meta
type Story = StoryObj<typeof meta>

export const Customize: Story = {}

export const ContentMarketing: Story = {
  args: {
    title: 'コンテンツマーケティング',
    subtitle: 'Content Marketing',
    href: 'https://lucy.ne.jp/bazubu/case',
    linkLabel: 'コンテンツマーケティング成功事例を見る',
  },
}
