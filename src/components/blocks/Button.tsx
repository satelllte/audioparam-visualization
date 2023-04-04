import { forwardRef } from 'react'

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
    <button
      ref={ref}
      className='cursor-auto py-4 px-8 font-bold border disabled:opacity-50 motion-safe:transition-all border-white/50 hover:bg-zinc-900/75 focus:bg-zinc-900/90 active:bg-zinc-900 '
      {...props}
    />
  )
})

Button.displayName = 'Button'
