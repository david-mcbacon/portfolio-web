declare module "react" {
  type FCC<Props = Record<string, unknown>> = React.FC<
    React.PropsWithChildren<Props>
  >;
}

declare global {
  type Maybe<T> = T | undefined;
}
export {};
