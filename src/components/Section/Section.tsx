import { type Ref, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props<T extends React.ElementType = 'section'> = Omit<React.ComponentProps<T>, 'as' | 'containerClassName'> & {
  as?: T;
  containerClassName?: string;
};

function Section<T extends React.ElementType = 'section'>(
  { as, containerClassName, children, className, ...rest }: Props<T>,
  ref?: Ref<HTMLDivElement>
) {
  const Component = (as ?? 'section') as React.ElementType;
  return (
    <Component className={twMerge('py-20 desktop:py-28', className)} {...rest}>
      <div ref={ref} className={twMerge('container', containerClassName)}>
        {children}
      </div>
    </Component>
  );
}

export default forwardRef(Section) as <T extends React.ElementType = 'section'>(
  props: Props<T> & { ref?: Ref<HTMLDivElement> }
) => ReturnType<typeof Section>;
