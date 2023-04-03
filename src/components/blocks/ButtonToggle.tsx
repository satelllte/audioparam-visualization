import { ButtonBase } from './ButtonBase'

interface ButtonToggleProps {
  children: string
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export const ButtonToggle = ({
  state: [state, setState],
  children,
}: ButtonToggleProps) => {
  const className = state ?
    'border-green-500 hover:bg-green-900/75 focus:bg-green-900/90 active:bg-green-900' :
    'border-red-500 hover:bg-red-900/75 focus:bg-red-900/90 active:bg-red-900'
  return (
    <ButtonBase
      className={className}
      onClick={() => setState(x => !x)}
    >
      {`${children} | Active: ${state ? 'TRUE' : 'FALSE'}`}
    </ButtonBase>
  )
}
