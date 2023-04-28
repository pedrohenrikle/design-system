import { styled } from '../../styles'
import { Content } from '@radix-ui/react-tooltip'

export const TooltipContent = styled(Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  zIndex: 99999999,
})
