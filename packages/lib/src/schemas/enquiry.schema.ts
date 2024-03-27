import * as z from "zod";

export const enquirySchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  message: z.string().min(1, "Message cannot be empty"),
});

export type Enquiry = z.infer<typeof enquirySchema>;
