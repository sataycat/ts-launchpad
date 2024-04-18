import { contract } from "@local/lib";
import { initServer } from "@ts-rest/express";
import { createEnquiry } from "~/modules/enquiries/create-enquiry";
import { listEnquiries } from "~/modules/enquiries/list-enquiries";

const s = initServer();

export const v1Router = s.router(contract, {
  createEnquiry: async ({ body }) => createEnquiry(body),
  listEnquiries: async () => listEnquiries(),
});
