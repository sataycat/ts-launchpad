import type { Enquiry } from "@local/lib";
import { db } from "~/db/db";

export const listEnquiries = async (): Promise<{
  status: 200;
  body: Enquiry[];
}> => {
  const enquiries = await db.query.enquries.findMany();

  return { status: 200, body: enquiries };
};
