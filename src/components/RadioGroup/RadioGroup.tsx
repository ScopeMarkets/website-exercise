import { RadioGroup as RadioGroupComponent, Radio } from '@headlessui/react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  name: string;
  options: string[];
  onChange: (value: any) => any;
}

export default function RadioGroup({ name, options, onChange }: Props) {
  const [selected, setSelected] = useState<string>(options[0]);

  return (
    <RadioGroupComponent
      id={name}
      value={selected}
      onChange={(value) => {
        setSelected(value);
        onChange(value);
      }}
      className="flex flex-col desktop:flex-row gap-8"
    >
      {options.map((option) => (
        <Radio
          key={option}
          value={option}
          className={twMerge(
            'flex-1 text-center whitespace-nowrap px-14 py-4 text-white border',
            selected === option ? 'cursor-default bg-white text-primary-500' : 'cursor-pointer',
          )}
        >
          {option}
        </Radio>
      ))}
    </RadioGroupComponent>
  );
}
