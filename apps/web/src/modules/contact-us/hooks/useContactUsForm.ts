import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { api } from "~/services/api";

import { Enquiry, enquirySchema } from "@local/lib";

export const useContactUsForm = () => {
  const { mutate } = useMutation({
    mutationFn: (enquiry: Enquiry) => api.createEnquiry({ body: enquiry }),
  });

  const formMethods = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: { email: "", message: "" },
  });

  const onSubmit = formMethods.handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        notifications.show({
          color: "green",
          title: "Success",
          message: "Your enquiry has been sent successfully.",
        });
      },
    });
  });
  return { formMethods, onSubmit };
};
