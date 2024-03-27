import { TextInput, TextInputProps } from "@mantine/core";
import { capitalize } from "radash";
import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";

type ControlledTextFieldProps<T extends FieldValues> = {
  name: FieldPath<T>;
  rules?: UseControllerProps<T>["rules"];
  textInputProps?: TextInputProps;
};

export const ControlledTextField = <T extends FieldValues>({
  name,
  rules,
  textInputProps = {},
}: ControlledTextFieldProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextInput
          error={error?.message}
          label={capitalize(name)}
          {...field}
          {...textInputProps}
        />
      )}
    />
  );
};
