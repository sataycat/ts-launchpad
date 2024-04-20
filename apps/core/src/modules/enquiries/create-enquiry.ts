import type { CreateEnquiry, Enquiry } from "@local/lib";
import { db } from "~/db/db";
import { enquries } from "~/db/schema";

export const createEnquiry = async (
  data: CreateEnquiry,
): Promise<{ status: 201; body: Enquiry }> => {
  const created = await db.insert(enquries).values(data).returning();

  return {
    status: 201,
    body: created[0],
  };
};
