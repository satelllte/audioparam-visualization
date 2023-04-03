interface PageProps {
  title: string
  children: React.ReactNode
}

export const Page = ({
  title,
  children,
}: PageProps) => {
  return (
    <>
      <h1 className="text-2xl pb-4">{title}</h1>
      {children}
    </>
  )
}
