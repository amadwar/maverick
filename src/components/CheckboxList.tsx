import React, { ChangeEvent, useState } from 'react';

interface Option {
  id: number;
  label: string;
  checked: boolean;
}

const CheckboxList: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([
    { id: 1, label: 'Videos', checked: true },
    { id: 2, label: 'Audio', checked: true },
    { id: 3, label: 'Literatur', checked: true },
  ]);

  const handleCheckChange = (id: number) => (event: ChangeEvent<HTMLInputElement>) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, checked: event.target.checked } : option
      )
    );
  };

  return (
    <ul>
      {options.map((option) => (
        <li key={option.id}>
          <label>
            <input
              type="checkbox"
              checked={option.checked}
              onChange={handleCheckChange(option.id)}
            />
            {option.label}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
