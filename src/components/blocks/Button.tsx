import { forwardRef } from 'react'
import { ButtonBase } from './ButtonBase'

type ButtonNativeProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type ExtendableButtonNativeProps = Omit<ButtonNativeProps,
| 'className'
| 'children'
>
interface ButtonProps extends ExtendableButtonNativeProps {
  children: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  props,
  ref,
) => {
  return (
    <ButtonBase
      ref={ref}
      className='border-white/50 hover:bg-zinc-900/75 focus:bg-zinc-900/90 active:bg-zinc-900 '
      {...props}
    />
  )
})

Button.displayName = 'Button'
