import * as z from "zod";
import { OptionalToNull } from "../utils";

export const createEnquirySchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  message: z.string().min(1, "Message cannot be empty"),
});

export type CreateEnquiry = z.infer<typeof createEnquirySchema>;

export type Enquiry = OptionalToNull<CreateEnquiry>;
