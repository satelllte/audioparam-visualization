import { forwardRef } from 'react'

type ButtonNativeProps = React.ButtonHTMLAttributes<HTMLButtonElement>
interface ButtonBaseProps extends ButtonNativeProps {}

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>((
  {
    className = '',
    ...rest
  },
  ref,
) => {
  return (
    <button
      ref={ref}
      className={`cursor-auto py-4 px-8 --w-full uppercase font-bold border-2 disabled:opacity-50 transition-all ${className}`}
      {...rest}
    />
  )
})

ButtonBase.displayName = 'ButtonBase'
