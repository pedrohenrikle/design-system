import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@pedrohenrikle-ignite-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    dateDescription: new Date(),
    openToast: false,
  },
  argTypes: {
    openToast: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => {
      return <>{Story()}</>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    dateDescription: new Date('12 23 2021'),
    openToast: false,
  },
}

export const Default: StoryObj<ToastProps> = {}
