import type { Meta, StoryObj } from '@storybook/react-vite'
import { Company } from './Company'

const meta = {
  title: 'Components/Company',
  component: Company,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    info: [
      { label: '会社名', value: '株式会社ルーシー' },
      { label: '電話番号', value: '03-6452-9355' },
      {
        label: '住所',
        value: '東京都港区新橋5丁目10-5 PMO新橋II 8F',
      },
    ],
  },
} satisfies Meta<typeof Company>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
