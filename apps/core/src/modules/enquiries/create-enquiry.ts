import { Enquiry } from "@local/lib";

export const createEnquiry = async (
  data: Enquiry,
): Promise<{ status: 201; body: Enquiry }> => {
  // TODO Actually create here
  return {
    status: 201,
    body: data,
  };
};
