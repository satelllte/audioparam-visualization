import NextLink from "next/link"

interface LinkProps {
  href: string
  children: React.ReactNode
}

const Link = (props: LinkProps) => <NextLink className='underline' {...props}/>

export const Header = () => {
  return (
    <header className="p-4 flex flex-wrap items-center gap-2">
      <Link href='/'>Home</Link>
      <Link href='/raf-demo'>RAF Demo</Link>
      <Link href='/raf-nested-series'>RAF Nested Series</Link>
      <Link href='/raf-lfo'>RAF LFO</Link>
      <Link href='/raf-props-update'>RAF Props Update</Link>
    </header>
  )
}
