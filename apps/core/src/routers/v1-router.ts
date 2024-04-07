import { contract } from "@local/lib";
import { initServer } from "@ts-rest/express";

const s = initServer();

export const v1Router = s.router(contract, {
  createEnquiry: async ({ body }) => {
    return {
      status: 201,
      body,
    };
  },
});
