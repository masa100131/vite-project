import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from './Header'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    logo: 'XeoryExtension',
    logoHref: '#',
    navItems: [
      { label: '記事ページサンプル', href: '#sample' },
      { label: 'Extensionをダウンロード', href: '#download' },
    ],
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
