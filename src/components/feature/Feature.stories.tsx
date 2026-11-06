import type { Meta, StoryObj } from '@storybook/react-vite'
import { Feature } from './Feature'

const meta = {
  title: 'Components/Feature',
  component: Feature,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    number: 1,
    title: 'モバイルレスポンシブ',
    subtitle: 'Mobile Responsive',
    text: 'Xeory Extensionはレスポンシブデザインを採用しています。スマートフォンやタブレットなど各種デバイスで表示が最適化されます。',
    href: '#',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample03.jpg',
  },
} satisfies Meta<typeof Feature>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Reverse: Story = {
  args: {
    number: 2,
    title: 'HTML5デザイン',
    subtitle: 'HTML5 Design',
    text: 'Xeory ExtensionはHTML5言語でデザイン及びコーディングがなされています。',
    reverse: true,
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2014/10/two-coffee-at-the-shop.jpg',
  },
}

export const SEO: Story = {
  args: {
    number: 3,
    title: 'SEO最適化',
    subtitle: 'Search Engine Optimized',
    text: 'Xeory ExtensionはGoogleのSEOガイドラインに可能な限り沿った構造になっています。必要なのは良質なコンテンツだけです。',
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2014/10/imac-glasses-desk.jpg',
  },
}

export const Customizable: Story = {
  args: {
    number: 4,
    title: '高いカスタマイズ性',
    subtitle: 'Customizable',
    text: 'Xeory Extensionはカスタマイズフリーです。CSS, HTML, PHPの知識があれば自由にカスタマイズすることができます。',
    reverse: true,
    imageSrc:
      'https://xeory.jp/extension/wp-content/uploads/sites/4/2025/01/sample04.jpg',
  },
}
