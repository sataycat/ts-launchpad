import { Center, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { ContactUs } from "~/modules/contact-us/components/ContactUs";
import { queryClient } from "./services/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications />
        <Center mih={700}>
          <ContactUs />
        </Center>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
