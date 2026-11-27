import type { Meta, StoryObj } from '@storybook/react-vite'
import { CompanyField } from './CompanyField'

const meta = {
  title: 'Components/CompanyField',
  component: CompanyField,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <dl
        style={{
          display: 'grid',
          maxWidth: '684px',
          margin: '0 auto',
          padding: '72px 20px 96px',
          backgroundColor: '#fff',
        }}
      >
        <Story />
      </dl>
    ),
  ],
} satisfies Meta<typeof CompanyField>

export default meta
type Story = StoryObj<typeof meta>

export const CompanyName: Story = {
  args: {
    label: '会社名',
    value: '株式会社ルーシー',
  },
}

export const PhoneNumber: Story = {
  args: {
    label: '電話番号',
    value: '03-6452-9355',
  },
}

export const Address: Story = {
  args: {
    label: '住所',
    value: '東京都港区新橋5丁目10-5 PMO新橋II 8F',
  },
}
