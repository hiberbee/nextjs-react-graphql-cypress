import { FC, HTMLAttributes, PropsWithChildren } from "react";

export const Button: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>>> = (props) => (
  <button data-cy={"vercel"} {...props} />
);
