import { contract } from "@local/lib";

import { initServer } from "@ts-rest/fastify";

const s = initServer();

export const v1Router = s.plugin(
  s.router(contract, {
    createEnquiry: async ({ body }) => {
      return {
        status: 201,
        body,
      };
    },
  }),
);
