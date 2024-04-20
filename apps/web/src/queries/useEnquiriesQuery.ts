import type { Enquiry } from "@local/lib";
import { useQuery } from "@tanstack/react-query";
import { api } from "~/services/api";

export const useEnquiriesQuery = () => {
  return useQuery({
    queryKey: ["enquiry"],
    // This obviously isn't safe, since a non 200 status will always return empty list instead of failing
    // Fix by replacing ts-rest with something actually type safe
    queryFn: async (): Promise<Enquiry[]> => {
      const response = await api.listEnquiries();
      if (response.status === 200) {
        return response.body;
      }
      return [];
    },
  });
};
