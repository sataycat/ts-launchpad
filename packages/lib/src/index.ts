export const isEven = (input: unknown): boolean => {
  if (typeof input !== "number") {
    throw new Error("Input must be a number");
  }

  return input % 2 === 0;
};

export * from "./schemas/enquiry.schema";
