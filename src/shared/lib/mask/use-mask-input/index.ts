import { InputHTMLAttributes } from 'react';

import { format, useMask } from '@react-input/mask';

export const useMaskInput = ({
  mask,
  value,
}: {
  mask: string;
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
}) => {
  const options = {
    mask,
    replacement: { _: /\d/ },
  };
  const inputRef = useMask(options);
  const defaultValue = format(value?.toString() || '', options);

  return {
    inputRef,
    defaultValue,
    options,
  };
};
