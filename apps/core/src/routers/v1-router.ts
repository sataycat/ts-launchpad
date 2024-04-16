import { contract } from "@local/lib";
import { AppRouteImplementation } from "@ts-rest/express";
import { initServer } from "@ts-rest/express";
import { createEnquiry } from "~/modules/enquiries/create-enquiry";

const s = initServer();

export const v1Router = s.router(contract, {
  // TODO Fix type error
  createEnquiry: async ({ body }) => createEnquiry(body),
});
