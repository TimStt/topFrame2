import { HTMLAttributes, Ref } from 'react';

export interface ISetPickerFiles {
  setURLS?: (arg: string[]) => void;
  setURL?: (arg: string) => void;
  setFile?: (arg: File) => void;
  setFiles?: (arg: File[]) => void;
}

export type TSelectedTypeFiles = 'image' | 'document';
export interface IUIPickerFiles
  extends Omit<HTMLAttributes<HTMLInputElement>, 'accept' | 'onChange'>,
    ISetPickerFiles {
  className?: string;
  classNameLabel?: string;
  typePicker: TSelectedTypeFiles;
  multiple?: boolean;
  allTypes?: boolean;
  isLoading?: boolean;
  rootRef?: Ref<HTMLInputElement>;
  withIcon?: boolean;
}

export type TUseFilePicker = Pick<
  IUIPickerFiles,
  | 'setFiles'
  | 'setURLS'
  | 'multiple'
  | 'setURL'
  | 'setFile'
  | 'typePicker'
  | 'allTypes'
>;
