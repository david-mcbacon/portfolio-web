"use client";
import { useScrollToElement } from "@/core/smooth-scroll";
import { memo } from "react";
import TopNavigationMobile from "./top-navigation-mobile";

export const NAV_LINKS: NavLinkProps[] = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "recent-projects",
    label: "Work",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

interface NavLinkProps {
  id: string;
  label: string;
}

const NavLinkComponent = memo((props: NavLinkProps) => {
  const scrollTo = useScrollToElement();

  return (
    <li
      key={props.id}
      className="w-min cursor-pointer text-right font-heading text-sm uppercase text-secondary-500 transition-colors duration-200 ease-in-out hover:text-foreground"
      onClick={() => scrollTo(`section[id='${props.id}']`)}
    >
      <span>{props.label}</span>
    </li>
  );
});

NavLinkComponent.displayName = "NavLinkComponent";

const TopNavigation = () => {
  return (
    <nav className="fixed right-0 top-0 z-50 md:right-14 md:top-14">
      <ul className="hidden flex-col items-end gap-1 md:flex">
        {NAV_LINKS.map((link) => (
          <NavLinkComponent key={link.id} {...link} />
        ))}
      </ul>
      <TopNavigationMobile />
    </nav>
  );
};

export default TopNavigation;
