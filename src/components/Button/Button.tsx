import type { Size, SizeScheme, Variant, VariantScheme } from '@/types';
import { type Ref, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonAnimation = `transition-all duration-300 ease-out`;

const buttonStyles = {
  defaultClass:
    'font-sofia inline-flex gap-2 px-4 py-2.5 justify-center items-center focus:outline-secondary-500 text-nowrap',
  variant: {
    primary: `rounded-[32px] bg-primary-500 text-white hover:bg-primary-700 ${buttonAnimation} active:bg-primary-800 
  border-primary-500 hover:border-primary-700 focus:border-secondary-500 border-2`,
    secondary: `rounded-[32px] bg-transparent ${buttonAnimation} border-primary-500 border-2
  hover:border-primary-700 hover:text-primary-700 text-primary-500
  active:border-primary-800 active:text-primary-800 active:bg-[#E9ECEF]
  focus:border-secondary-500`,
    tertiary: `rounded-[15px] bg-primary-100 text-primary-900 hover:bg-primary-200 ${buttonAnimation}
  border-2 border-primary-100 hover:border-primary-200
  active:bg-primary-300 active:border-primary-300 focus:border-secondary-500 focus:border-2`,
  } as const satisfies VariantScheme,
  disabledClass: {
    primary: `rounded-[32px] bg-primary-500 border-2 border-primary-500 opacity-40 text-white cursor-not-allowed`,
    secondary: `rounded-[32px] bg-transparent border-2 border-primary-500 text-primary-500 opacity-40 cursor-not-allowed`,
    tertiary: `rounded-[15px] bg-primary-100 border-2 border-primary-100 opacity-40 cursor-not-allowed ${buttonAnimation}`,
  } as const satisfies VariantScheme,
  sizeClass: {
    small: `h-[36px] py-1.5 px-3`,
    medium: `h-10 py-2 px-5 flex-shrink-0`,
    large: `py-3 px-6`,
  } as const satisfies SizeScheme,
} as const;

type ButtonProps<T extends React.ElementType = 'button'> = Omit<React.ComponentProps<T>, 'ref' | 'as'> & {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  as?: T;
};

function ButtonInternal<T extends React.ElementType = 'button'>(
  { variant = 'primary', size = 'medium', className, as, ...props }: ButtonProps<T>,
  ref: Ref<T>
) {
  const Component: React.ElementType = as || 'button';
  return (
    <Component
      {...props}
      ref={ref}
      className={twMerge(
        buttonStyles.defaultClass,
        buttonStyles.sizeClass[size as Size],
        (props?.disabled ? buttonStyles.disabledClass : buttonStyles.variant)[variant as Variant],
        className
      )}
    />
  );
}

const Button = forwardRef(ButtonInternal) as <T extends React.ElementType = 'button'>(
  props: ButtonProps<T> & { ref?: Ref<T> }
) => ReturnType<typeof ButtonInternal>;

export default Button;
