import type { Meta, StoryObj } from '@storybook/react-vite'
import { InquiryField } from './InquiryField'

const meta = {
  title: 'Components/InquiryField',
  component: InquiryField,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <dl
        style={{
          maxWidth: '632px',
          margin: '0 auto',
          padding: '48px 20px 60px',
          backgroundColor: '#47b39d',
        }}
      >
        <Story />
      </dl>
    ),
  ],
} satisfies Meta<typeof InquiryField>

export default meta
type Story = StoryObj<typeof meta>

export const TextInput: Story = {
  args: {
    id: 'inquiry-name',
    label: 'お名前（必須）',
    name: 'name',
    fieldType: 'text',
    required: true,
  },
}

export const EmailInput: Story = {
  args: {
    id: 'inquiry-email',
    label: 'メールアドレス（必須）',
    name: 'email',
    fieldType: 'email',
    required: true,
  },
}

export const SubjectInput: Story = {
  args: {
    id: 'inquiry-subject',
    label: '題名',
    name: 'subject',
    fieldType: 'text',
  },
}

export const Textarea: Story = {
  args: {
    id: 'inquiry-message',
    label: 'メッセージ本文',
    name: 'message',
    fieldType: 'textarea',
    rows: 8,
  },
}
