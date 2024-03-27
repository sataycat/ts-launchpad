import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema } from "@local/lib";
import { useForm } from "react-hook-form";

export const useContactUsForm = () => {
  const formMethods = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: { email: "", message: "" },
  });
  const onSubmit = formMethods.handleSubmit(
    () => {
      console.log("valid");
    },
    (err) => {
      console.log(err);
    },
  );
  return { formMethods, onSubmit };
};
