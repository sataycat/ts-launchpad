import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { api } from "~/services/api";

import { CreateEnquiry, createEnquirySchema } from "@local/lib";
import { useQueryClient } from "@tanstack/react-query";

export const useContactUsForm = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (enquiry: CreateEnquiry) =>
      api.createEnquiry({ body: enquiry }),
    onSuccess: () => queryClient.invalidateQueries(["enquiry"]),
  });

  const formMethods = useForm({
    resolver: zodResolver(createEnquirySchema),
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
