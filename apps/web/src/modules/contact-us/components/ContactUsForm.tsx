import { Enquiry } from "@local/lib";
import { Button, Group, Paper } from "@mantine/core";
import { FormProvider } from "react-hook-form";
import { ControlledTextField } from "~/components/inputs/ControlledTextInput.tsx";
import { useContactUsForm } from "../hooks/useContactUsForm";

import { ControlledTextarea } from "~/components/inputs/ControlledTextarea.tsx";
export const ContactUsForm = () => {
  const { formMethods, onSubmit } = useContactUsForm();
  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit}>
          <ControlledTextField<Enquiry>
            name="email"
            textInputProps={{
              placeholder: "your@email.com",
              required: true,
            }}
          />
          <ControlledTextField<Enquiry>
            name="name"
            textInputProps={{
              placeholder: "John Doe",
              mt: "md",
            }}
          />
          <ControlledTextarea<Enquiry>
            name="message"
            textAreaProps={{
              required: true,
              autosize: true,
              label: "Your message",
              placeholder: "I want to order your goods",
              minRows: 4,
              mt: "md",
            }}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Send message</Button>
          </Group>
        </form>
      </FormProvider>
    </Paper>
  );
};
