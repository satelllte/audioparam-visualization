interface H2Props {
  children: React.ReactNode
}

export const H2 = (props: H2Props) => {
  return (
    <h2 className='text-xl' {...props}/>
  )
}
