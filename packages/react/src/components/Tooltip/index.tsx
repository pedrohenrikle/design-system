import { Provider, Root, Trigger, Portal, Arrow } from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { Text } from '../Text'
import { TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof Root> {
  content: string
  trigger: ReactNode
}

export function Tooltip({ content, trigger }: TooltipProps) {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{trigger}</Trigger>
        <Portal>
          <TooltipContent sideOffset={5}>
            <Text>{content}</Text>
            <Arrow />
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  )
}

Tooltip.displayName = 'Tooltip'
