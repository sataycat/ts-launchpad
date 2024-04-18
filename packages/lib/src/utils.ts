// This type is used for DB return values, since drizzle doesn't return optionals but nulls
export type OptionalToNull<T> = T extends object // Check if T is an object
  ? {
      [P in keyof T]-?: undefined extends T[P] // Check if the property can be undefined
        ? Exclude<T[P], undefined> | null // Exclude undefined and add null
        : OptionalToNull<T[P]>; // Recurse for objects
    }
  : T;
