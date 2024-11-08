import type { Size, SizeScheme } from '@/types';
import { twMerge } from 'tailwind-merge';

interface Props<T> {
  as?: T;
  size?: Size;
}

const styles = {
  sizes: {
    small: `text-xs`,
    medium: `text-base`,
    large: `text-lg`,
  } satisfies SizeScheme,
};

export default function Text<T extends React.ElementType = 'p'>({
  as,
  children,
  className,
  size = 'medium',
  ...rest
}: Props<T> & Omit<React.ComponentProps<T>, keyof Props<T>>) {
  const Component = (as ?? 'p') as React.ElementType;

  return (
    <Component className={twMerge(styles.sizes[size], className)} {...rest}>
      {children}
    </Component>
  );
}
