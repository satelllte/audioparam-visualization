import { forwardRef } from 'react'

type NativeSVGProps = React.SVGAttributes<SVGSVGElement>

type NativeSVGPropsToExtend = Omit<NativeSVGProps,
  | 'version'
  | 'xmlns'
  | 'xmlnsXlink'
>

type SVGProps = {
  children: React.ReactNode
} & NativeSVGPropsToExtend

export const SVG = forwardRef<SVGSVGElement, SVGProps>(({
  children,
  ...rest
}, ref) => (
    <svg
      ref={ref}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...rest}
    >
      {children}
    </svg>
  ))

SVG.displayName = 'SVG'
