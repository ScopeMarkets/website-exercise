import { Size } from '@/types';
import { twMerge } from 'tailwind-merge';

interface Props<T> {
  as?: T;
  center?: boolean;
  direction?: 'col' | 'row' | 'auto';
  gap?: Size;
  grow?: boolean;
  wrap?: boolean;
}

const styles = {
  center: `items-center justify-center`,
  directions: {
    auto: `flex-col desktop:flex-row`,
    col: `flex-col`,
    row: `flex-row`,
  },
  gaps: {
    small: `gap-4`,
    medium: `gap-12`,
    large: `gap-36`,
  },
  grow: `*:flex-1`,
  wrap: `flex-wrap`,
};

export default function Group<T extends React.ElementType = 'div'>({
  as,
  center = false,
  children,
  className,
  direction = 'auto',
  gap = 'medium',
  grow = false,
  wrap = false,
}: Props<T> & Omit<React.ComponentProps<T>, keyof Props<T>>) {
  const Component = (as ?? 'div') as React.ElementType;
  return (
    <Component
      className={twMerge(
        'flex',
        center && styles.center,
        styles.directions[direction],
        styles.gaps[gap],
        grow && styles.grow,
        wrap && styles.wrap,
        className
      )}
    >
      {children}
    </Component>
  );
}
