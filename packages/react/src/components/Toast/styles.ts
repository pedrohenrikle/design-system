import { styled, keyframes } from '../../styles'
import { Viewport, Root } from '@radix-ui/react-toast'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  '0%': { transform: 'translateX(calc(100% + 1.5rem))' },
  '100%': { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(calc(100% + 1.5rem))' },
})

export const ToastRoot = styled(Root, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  padding: '$3 $5',
  display: 'grid',
  gridTemplateAreas: "'title action' 'description action'",
  gridTemplateColumns: 'auto max-content',
  columnGap: '$4',
  alignItems: 'center',

  "&[data-state='open']": {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  "&[data-state='closed']": {
    animation: `${hide} 100ms ease-in`,
  },

  "&[data-swipe='move']": {
    transform: `translateX(var(--radix-toast-swipe-move-x))`,
  },

  "&[data-swipe='cancel']": {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  "&[data-swipe='end']": {
    animation: `${swipeOut} 100ms ease-out;`,
  },
})

export const ToastViewport = styled(Viewport, {
  position: 'fixed',
  bottom: '$2',
  right: '$2',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const CloseButton = styled('button', {
  display: 'flex',
  background: 'none',
  outline: 'none',
  border: 'none',
  height: '100%',
  paddingTop: '$1',
  cursor: 'pointer',
  color: '$gray200',
})
