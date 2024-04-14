import { QueryClient } from "@tanstack/react-query";

const thirtySecondsMs = 30 * 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: thirtySecondsMs,
    },
  },
});
