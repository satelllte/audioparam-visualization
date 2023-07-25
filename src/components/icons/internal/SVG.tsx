import {forwardRef} from 'react';

type NativeSvgProps = React.SVGAttributes<SVGSVGElement>;

type NativeSvgPropsToExtend = Omit<
  NativeSvgProps,
  'version' | 'xmlns' | 'xmlnsXlink'
>;

type SvgProps = {
  children: React.ReactNode;
} & NativeSvgPropsToExtend;

export const Svg = forwardRef<SVGSVGElement, SvgProps>(
  ({children, ...rest}, ref) => (
    <svg
      ref={ref}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...rest}
    >
      {children}
    </svg>
  ),
);

Svg.displayName = 'Svg';
