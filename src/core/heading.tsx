import { headingFont } from "./fonts";
import { twMerge } from "tailwind-merge";
import { cn } from "./generic/cn";

type HeadingType = 1 | 2 | 3 | 4 | 5 | 6;

const Heading: React.FCC<{ type?: HeadingType; className?: string }> = ({
  type,
  children,
  className,
}) => {
  switch (type) {
    case 1:
      return (
        <h1
          className={twMerge(
            "text-8xl font-extrabold uppercase leading-[6rem] tracking-wide",
            className,
            headingFont.className,
          )}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={twMerge(
            "font-heading text-xl uppercase tracking-widest",
            className,
            headingFont.className,
          )}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={cn(
            "font-heading uppercase tracking-widest",
            className,
            headingFont.className,
          )}
        >
          {children}
        </h3>
      );

    default:
      return <Heading type={1}>{children}</Heading>;
  }
};

export default Heading;
