import { Code, Container, Text } from "@mantine/core";

import { ContactUsForm } from "~/modules/contact-us/components/ContactUsForm.tsx";

export function ContactUs() {
  return (
    <Container>
      <Text>
        This form uses the zod schema <Code>enquirySchema</Code> to validate
        input.
      </Text>
      <ContactUsForm />
    </Container>
  );
}
