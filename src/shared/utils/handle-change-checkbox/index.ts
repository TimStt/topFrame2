import { ISelectOption, ISelectOptions } from "@/shared/ui/select-ui";

export const handleOptionChange = <T extends string | number>(
  type: "checkbox" | "radio",
  value?: ISelectOptions[],
  onChange?: (value: ISelectOptions[]) => void
) => {
  return (optionValue: ISelectOptions, checked: boolean) => {
    if (!onChange) return;

    let newValue: ISelectOptions[];

    if (type === "radio") {
      newValue = checked ? [optionValue] : [];
      onChange(newValue);
      return;
    }

    if (checked) {
      newValue = value ? [...value, optionValue] : [optionValue];
    } else {
      newValue = value?.filter((v) => v.value !== optionValue.value) || [];
    }
    onChange(newValue);
  };
};
