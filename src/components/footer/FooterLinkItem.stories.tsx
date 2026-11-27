import type { Meta, StoryObj } from '@storybook/react-vite'
import './Footer.css'
import { FooterLinkItem } from './FooterLinkItem'

const meta = {
  title: 'Components/FooterLinkItem',
  component: FooterLinkItem,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ul
        className="site-footer-list"
        style={{ maxWidth: '400px', padding: '24px', background: '#031731' }}
      >
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof FooterLinkItem>

export default meta
type Story = StoryObj<typeof meta>

export const MenuArticle: Story = {
  args: {
    label: '記事ページサンプル',
    href: 'https://xeory.jp/extension/sample',
  },
}

export const MenuDownload: Story = {
  args: {
    label: 'Extensionをダウンロード',
    href: 'https://xeory.jp/template/xeory-extension/',
  },
}

export const X: Story = {
  args: {
    label: 'X',
    href: 'https://x.com/@BAZUBU',
    icon: '𝕏',
  },
}

export const Facebook: Story = {
  args: {
    label: 'Facebook',
    href: 'https://www.facebook.com/BazuBu',
    icon: 'f',
  },
}

export const Feedly: Story = {
  args: {
    label: 'Feedly',
    href: 'https://feedly.com/i/subscription/feed/https://xeory.jp/extension/feed',
    icon: '◔',
  },
}
