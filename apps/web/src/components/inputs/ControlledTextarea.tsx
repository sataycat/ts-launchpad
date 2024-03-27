import { Textarea, TextareaProps } from "@mantine/core";
import { capitalize } from "radash";
import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";

type ControlledTextareaProps<T extends FieldValues> = {
  name: FieldPath<T>;
  rules?: UseControllerProps<T>["rules"];
  textAreaProps?: TextareaProps;
};

export const ControlledTextarea = <T extends FieldValues>({
  name,
  rules,
  textAreaProps = {},
}: ControlledTextareaProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Textarea
          error={error?.message}
          label={capitalize(name)}
          {...field}
          {...textAreaProps}
        />
      )}
    />
  );
};
