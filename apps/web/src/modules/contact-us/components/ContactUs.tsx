import { Container, Text } from "@mantine/core";

import { ContactUsForm } from "~/modules/contact-us/components/ContactUsForm.tsx";

export function ContactUs() {
  return (
    <Container size={720} my={40}>
      <Text>
        This form uses the zod schema `enquirySchema` to validate input.
      </Text>
      <ContactUsForm />
    </Container>
  );
}
