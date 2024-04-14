import { contract } from "@local/lib";
import { initClient } from "@ts-rest/core";

export const api = initClient(contract, {
  baseUrl: import.meta.env.VITE_PREFIX_URL,
  baseHeaders: {},
});
