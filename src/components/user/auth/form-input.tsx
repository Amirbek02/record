'use client';

import { useFormContext } from 'react-hook-form';
import { Input } from '../../UI/input';
import { ErrorText } from './error-text';
import { RequiredSymbol } from './required-symbol';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({ className, name, label, required, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorText = errors[name]?.message as string;

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input
          className=" py-[19px] pl-[15px]  mb-[20px] rounded-[4px] xl:rounded-[12px] h-12 text-md"
          {...register(name)}
          {...props}
        />
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
