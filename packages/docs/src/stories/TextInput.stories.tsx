import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@pedrohenrikle-ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email adress</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
