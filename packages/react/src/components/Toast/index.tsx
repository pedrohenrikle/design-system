import { Provider, Title, Description, Action } from '@radix-ui/react-toast'
import { useState, useRef, ComponentProps } from 'react'
import { ToastViewport, ToastRoot, CloseButton } from './styles'
import { Button } from '../Button'
import { Text } from '../Text'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  date?: Date
}

export function Toast({ date }: ToastProps) {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  return (
    <Provider duration={3000} swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
      >
        Add to calendar
      </Button>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <div>
          <Title>
            <Text size={'xl'} as="strong" css={{ color: '$white' }}>
              Agendamento Realizado
            </Text>
          </Title>
          <Description>
            <time dateTime={eventDateRef.current.toISOString()}>
              <Text size={'sm'} css={{ color: '$gray200' }}>
                {prettyDate(eventDateRef.current)}
              </Text>
            </time>
          </Description>
        </div>
        <Action asChild altText="Close">
          <CloseButton>
            <X weight="bold" size={20} />
          </CloseButton>
        </Action>
      </ToastRoot>
      <ToastViewport />
    </Provider>
  )
}

function oneWeekAway() {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  return new Date(inOneWeek)
}

function prettyDate(date: any) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(date)
}
