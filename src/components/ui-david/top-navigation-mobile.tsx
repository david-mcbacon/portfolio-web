"use client";

import { motion, MotionConfig } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { NAV_LINKS } from "./top-navigation";
import { useScrollToElement } from "@/core/smooth-scroll";

const TopNavigationMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="relative block h-fit w-fit -translate-y-[6px] translate-x-[6px] md:hidden"
    >
      <AnimatedHamburgerButton open={open} setOpen={setOpen} />

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-25%" }}
        className="absolute right-[0%] top-[70%] flex w-32 flex-col gap-2 overflow-hidden rounded-lg bg-background-700 p-2 shadow-xl"
      >
        {NAV_LINKS.map((link) => (
          <Option
            key={link.id}
            setOpen={setOpen}
            text={link.label}
            id={link.id}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Option = ({
  text,
  setOpen,
  id,
}: {
  text: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
}) => {
  const scrollTo = useScrollToElement();
  const handleClick = () => {
    scrollTo(`section[id='${id}']`);
    setOpen(false);
  };

  return (
    <motion.li
      variants={itemVariants}
      onClick={handleClick}
      className="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 font-heading text-xs uppercase"
    >
      <span>{text}</span>
    </motion.li>
  );
};

export default TopNavigationMobile;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

// ------------------------ //
// HAMBURGER MENU COMPONENT //
// ------------------------ //

const AnimatedHamburgerButton = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={open ? "open" : "closed"}
        onClick={() => setOpen((pv) => !pv)}
        className="relative h-20 w-20 scale-[60%]"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-secondary-500"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-secondary-500"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-secondary-500"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
