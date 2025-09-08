import { ISelectOption, ISelectOptions } from "@/shared/ui/select-ui";

export const handleOptionChange = <T extends string | number>(
  type: "checkbox" | "radio",

  onChange?: (value: ISelectOptions[]) => void
) => {
  return (
    optionValue: ISelectOptions,
    checked: boolean,
    activeValue: ISelectOptions[] = []
  ) => {
    if (!onChange) return;

    let newValue: ISelectOptions[];

    if (type === "radio") {
      newValue = checked ? [optionValue] : [];
      onChange(newValue);
      return;
    }

    console.log("optionValue change", optionValue);
    console.log("value", activeValue);

    // если выбрали все, то удаляем все
    if (optionValue.isAll) {
      newValue = [];
      onChange(newValue);
      return;
    }

    if (checked) {
      newValue = activeValue?.find((v) => v.value === optionValue.value)
        ? activeValue?.filter((v) => v.value !== optionValue.value)
        : [...(activeValue || []), optionValue];
    } else {
      newValue = (
        activeValue?.filter(
          (v) => v.value !== optionValue.value //&& !v.isAll
        ) || []
      ).filter((v) => !v.isAll);
    }
    console.log("newValue", newValue);
    onChange(newValue);
  };
};
