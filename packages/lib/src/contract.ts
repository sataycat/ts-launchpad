import { initContract } from "@ts-rest/core";
import { Enquiry, createEnquirySchema } from "./schemas/enquiry.schema";

const c = initContract();

export const contract = c.router(
  {
    createEnquiry: {
      method: "POST",
      path: "/enquiry",
      responses: {
        201: c.type<Enquiry>(),
      },
      body: createEnquirySchema,
    },
    listEnquiries: {
      method: "GET",
      path: "/enquiry",
      responses: {
        200: c.type<Enquiry[]>(),
      },
    },
  },
  { pathPrefix: "/api/v1" },
);
