import "@mantine/core/styles.css";

import { Center, MantineProvider } from "@mantine/core";
import { ContactUs } from "~/modules/contact-us/components/ContactUs";

function App() {
  // probably want to put a router instead of components in this file
  return (
    <MantineProvider>
      <Center mih={700}>
        <ContactUs />
      </Center>
    </MantineProvider>
  );
}

export default App;
