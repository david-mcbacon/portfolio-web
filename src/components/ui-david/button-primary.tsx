"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { cn } from "@/core/generic/cn";
import { FiArrowRight as ArrowRight } from "react-icons/fi";
import { useScrollToElement } from "@/core/smooth-scroll";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getPathDetails } from "@/lib/get-path-details";

interface ButtonPrimaryProps {
  text: string;
  iconSide?: "left" | "right";
  className?: string;
  handleClick?: () => void;
  link?: string;
  variant?: "default" | "sm";
  customSvg?: React.ReactNode;
  iconAnimation?: {
    rotateXStart: number;
    rotateXEnd: number;
    duration?: number;
  };
  circleColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  hoverAnimationDuration?: number;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  linkTarget?: "_blank" | "_self" | "_parent" | "_top";
  scrollToElement?: string;
}

export default function ButtonPrimary({
  iconSide = "right",
  variant = "default",
  backgroundColor = "#ababab",
  textColor = "#131313",
  borderColor = "none",
  circleColor = "#f05a19",
  hoverBorderColor = "none",
  hoverTextColor = "#131313",
  hoverAnimationDuration = 0.5,
  iconAnimation = { rotateXStart: 45, rotateXEnd: 360, duration: 0.8 },
  ...props
}: ButtonPrimaryProps) {
  const pathname = usePathname();
  const { isSamePath, scrollToElement } = getPathDetails(props.link, pathname);

  const ButtonComponent = (
    <Button
      {...{
        iconSide,
        variant,
        iconAnimation,
        circleColor,
        backgroundColor,
        borderColor,
        hoverBorderColor,
        textColor,
        hoverTextColor,
        hoverAnimationDuration,
        scrollToElement,
        ...props,
      }}
    />
  );

  if (props.link) {
    return (
      <Link
        href={props.link}
        className={`h-fit w-fit`}
        target={props.linkTarget}
      >
        {ButtonComponent}
      </Link>
    );
  }

  return ButtonComponent;
}

function Button(props: ButtonPrimaryProps) {
  const [buttonHover, setButtonHover] = useState(false);
  const scrollTo = useScrollToElement();

  const handleClick = () => {
    if (props.scrollToElement) scrollTo(props.scrollToElement);
    else return;
  };

  return (
    <LazyMotion strict features={domAnimation}>
      <m.button
        onClick={handleClick}
        className={cn(
          "group pointer-events-auto relative z-10 flex w-fit items-center justify-start rounded-full border font-light",
          props.className,
        )}
        style={{
          height: props.variant === "sm" ? "35px" : "45px",
          fontSize: props.variant === "sm" ? "1rem" : "1.25rem",
          lineHeight: props.variant === "sm" ? "1rem" : "1.25rem",
          padding:
            props.variant === "sm" && props.iconSide === "right"
              ? "15px 40px 15px 15px"
              : props.variant === "default" && props.iconSide === "right"
                ? "20px 52px 20px 20px"
                : props.variant === "sm" && props.iconSide === "left"
                  ? "15px 15px 15px 40px"
                  : "20px 20px 20px 52px",
        }}
        initial={{
          background:
            props.variant === "sm"
              ? `radial-gradient(circle at ${props.iconSide === "right" ? "calc(100% - 17px)" : "17px"} 50%, ${props.circleColor} 14px, ${props.backgroundColor} 14px)`
              : `radial-gradient(circle at ${props.iconSide === "right" ? "calc(100% - 22px)" : "22px"} 50%, ${props.circleColor} 17px, ${props.backgroundColor} 17px)`,
          borderColor: props.borderColor,
        }}
        whileHover={{
          background:
            props.variant === "sm"
              ? `radial-gradient(circle at ${props.iconSide === "right" ? "calc(100% - 17px)" : "17px"} 50%, ${props.circleColor} 100%, ${props.backgroundColor} 100%)`
              : `radial-gradient(circle at ${props.iconSide === "right" ? "calc(100% - 22px)" : "22px"} 50%, ${props.circleColor} 100%, ${props.backgroundColor} 100%)`,
          transition: {
            duration: props.hoverAnimationDuration,
            type: "spring",
          },
          borderColor: props.hoverBorderColor,
        }}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        aria-label={props.text}
      >
        <m.span
          className="uppercase"
          style={{
            color: props.textColor,
          }}
          animate={{
            color: buttonHover ? props.hoverTextColor : props.textColor,
            transition: { duration: 0.1 },
          }}
        >
          {props.text}
        </m.span>
        <m.div
          initial={false}
          animate={{
            transform: buttonHover
              ? `${props.iconSide === "right" ? "translateX(50%)" : "translateX(-50%)"} translateY(-50%) rotate(${props.iconAnimation?.rotateXEnd}deg)`
              : `${props.iconSide === "right" ? "translateX(50%)" : "translateX(-50%)"} translateY(-50%) rotate(${props.iconAnimation?.rotateXStart}deg)`,
          }}
          transition={{
            type: "spring",
            duration: props.iconAnimation?.duration,
          }}
          style={{
            position: "absolute",
            top: "50%",
            right:
              props.variant === "sm" && props.iconSide === "right"
                ? "17px"
                : props.variant === "default" && props.iconSide === "right"
                  ? "22px"
                  : "",
            left:
              props.variant === "sm" && props.iconSide === "left"
                ? "17px"
                : props.variant === "default" && props.iconSide === "left"
                  ? "22px"
                  : "",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#131313",
          }}
        >
          {props.customSvg ? (
            props.customSvg
          ) : (
            <ArrowRight
              className="h-full w-full"
              size={props.variant === "sm" ? 18 : 24}
            />
          )}
        </m.div>
      </m.button>
    </LazyMotion>
  );
}
