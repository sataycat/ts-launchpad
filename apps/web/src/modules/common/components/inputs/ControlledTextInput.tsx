import { TextInput, type TextInputProps } from "@mantine/core";
import { capitalize } from "radash";
import {
  Controller,
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  useFormContext,
} from "react-hook-form";
import classes from "./InputStyles.module.css";

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
          classNames={{ input: classes.input }}
          error={error?.message}
          label={capitalize(name)}
          {...field}
          {...textInputProps}
        />
      )}
    />
  );
};
