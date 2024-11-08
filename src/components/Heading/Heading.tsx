/* eslint-disable react/display-name */
import React, { ReactNode, ComponentPropsWithoutRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type HeadingProps<T extends ElementType> = {
  Component: T;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Heading = <T extends ElementType>({ Component, children, className, ...props }: HeadingProps<T>) =>
  React.createElement(
    Component,
    {
      className: twMerge('font-semibold text-inherit', className),
      ...props,
    },
    children
  );

Heading.One = ({ className, ...props }: Omit<HeadingProps<'h1'>, 'Component'>) => (
  <Heading Component="h1" className={twMerge('text-4xl', className)} {...props} />
);
Heading.Two = ({ className, ...props }: Omit<HeadingProps<'h2'>, 'Component'>) => (
  <Heading Component="h2" className={twMerge('text-2xl', className)} {...props} />
);
Heading.Three = ({ className, ...props }: Omit<HeadingProps<'h3'>, 'Component'>) => (
  <Heading Component="h3" className={twMerge('text-[1.375rem] leading-[1.875rem]', className)} {...props} />
);
Heading.Four = ({ className, ...props }: Omit<HeadingProps<'h4'>, 'Component'>) => (
  <Heading Component="h4" className={twMerge('text-xl', className)} {...props} />
);
Heading.Five = ({ className, ...props }: Omit<HeadingProps<'h5'>, 'Component'>) => (
  <Heading Component="h5" className={twMerge('text-lg', className)} {...props} />
);
Heading.Six = ({ className, ...props }: Omit<HeadingProps<'h6'>, 'Component'>) => (
  <Heading Component="h6" className={twMerge('text-base', className)} {...props} />
);
export default Heading;
