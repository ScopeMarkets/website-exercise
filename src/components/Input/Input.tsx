import { type HTMLInputTypeAttribute } from 'react';
import { type InputProps, Input as InputComponent } from '@headlessui/react';
import { Textarea } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  type?: HTMLInputTypeAttribute;
  [key: string]: any;
}

export default function Input({ className, type = 'text', ...props }: Props & InputProps) {
  const Component = type === 'textarea' ? Textarea : InputComponent;
  return (
    <Component
      {...{ type, ...props }}
      className={twMerge('rounded-none bg-transparent border-b py-4 w-full', className)}
    />
  );
}
