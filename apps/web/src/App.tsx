import { Center, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./Router";
import { queryClient } from "./services/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications />
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
