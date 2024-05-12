type RequiredNotNull<T extends Record<string, unknown>> = {
  [Property in keyof T]-?: NonNullable<T[Property]>;
};
