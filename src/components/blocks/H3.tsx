interface H3Props {
  children: React.ReactNode
}

export const H3 = (props: H3Props) => {
  return (
    <h3 className='text-base' {...props}/>
  )
}
