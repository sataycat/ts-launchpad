import { initContract } from "@ts-rest/core";
import { enquirySchema } from "./schemas/enquiry.schema";

const c = initContract();

export const contract = c.router({
  createEnquiry: {
    method: "POST",
    path: "/enquiry",
    responses: {
      201: enquirySchema,
    },
    body: enquirySchema,
  },
});
