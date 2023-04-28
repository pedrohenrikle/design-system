import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@pedrohenrikle-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    content: 'Add to calendary',
    trigger: <Button>Day 8</Button>,
  },
  argTypes: {},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
