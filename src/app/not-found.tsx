import ButtonPrimary from "@/components/ui-david/button-primary";

export default function NotFound() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-10">
      <BrandedNotFound />
      <ButtonPrimary text="Return Home" link="/" />
    </div>
  );
}

function BrandedNotFound() {
  return (
    <div className="relative flex size-80 items-center justify-center border border-secondary-400 font-heading text-secondary-400">
      <div className="relative -mt-3 flex flex-col items-center justify-center gap-2">
        <p className="text-9xl font-thin">NF</p>
      </div>
      <h1 className="absolute bottom-7 text-xl font-thin uppercase">
        Not found
      </h1>
      <p className="absolute right-5 top-5 text-xl text-primary">404</p>
    </div>
  );
}
