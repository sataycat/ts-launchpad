import { Button, Code, Container, Group, Text } from "@mantine/core";
import { TbArrowRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import { ContactUsForm } from "~/modules/enquiries/components/ContactUsForm";

export function ContactUsPage() {
  const navigate = useNavigate();

  return (
    <Container size="xs">
      <Group>
        <Button
          variant="default"
          rightSection={<TbArrowRight />}
          onClick={() => navigate("/enquiries")}
        >
          View submitted enquiries
        </Button>
        <Text>
          This form uses the zod schema <Code>createEnquirySchema</Code> to
          validate input.
        </Text>
      </Group>
      <ContactUsForm />
    </Container>
  );
}
