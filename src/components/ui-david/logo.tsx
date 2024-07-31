import Link from "next/link";

interface LogoProps {
  size: "sm" | "md" | "lg";
}

export default function Logo(props: LogoProps) {
  if (props.size === "sm") {
    return (
      <Link href={"/"} className="h-fit w-fit">
        <div className="user-select-none relative aspect-square border border-secondary-500 bg-background p-8 font-heading">
          <p className="absolute right-[6px] top-[9px] -translate-y-1/2 translate-x-1/2 text-[10px] leading-[10px] text-primary">
            1
          </p>
          <p className="absolute right-1/2 top-[45%] -translate-y-1/2 translate-x-1/2 text-xl text-secondary-500">
            DS
          </p>
          <p className="absolute right-1/2 top-[83%] -translate-y-1/2 translate-x-1/2 text-[10px] leading-[10px] text-secondary-500">
            McBacon
          </p>
        </div>
      </Link>
    );
  }
  if (props.size === "md") {
    return (
      <Link href={"/"} className="h-fit w-fit">
        <div className="user-select-none relative aspect-square border border-secondary-500 bg-background p-10 font-heading">
          <p className="absolute right-2 top-3 -translate-y-1/2 translate-x-1/2 text-xs text-primary">
            1
          </p>
          <p className="absolute right-1/2 top-[47%] -translate-y-1/2 translate-x-1/2 text-2xl text-secondary-500">
            DS
          </p>
          <p className="absolute right-1/2 top-[83%] -translate-y-1/2 translate-x-1/2 text-xs text-secondary-500">
            McBacon
          </p>
        </div>
      </Link>
    );
  }
}
