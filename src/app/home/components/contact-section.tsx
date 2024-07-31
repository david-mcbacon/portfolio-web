import Logo from "@/components/ui-david/logo";
import Heading from "@/core/heading";
import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative z-20 mx-auto flex w-full max-w-[1536px] flex-col pb-10 pt-[450px] md:pb-32 md:pt-40"
    >
      <div className="space-y-6 px-6 md:px-14 xl:px-[13.5rem]">
        <Heading type={2}>Let&apos;s Connect</Heading>
        <div className="flex w-full flex-col items-end justify-between gap-16 md:flex-row md:gap-0">
          <ContactCard />
          <Footer />
        </div>
      </div>
    </section>
  );
};

function ContactCard() {
  return (
    <div className="flex w-full">
      <div className="flex">
        <div className="w-fit space-y-3">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-primary-500 md:gap-4"
            >
              {social.name === "LinkedIn" ? (
                <FaLinkedin size={26} />
              ) : social.name === "GitHub" ? (
                <FaGithub size={26} />
              ) : (
                <FaXTwitter size={26} />
              )}
              <span className="ransition-colors text-base font-semibold text-foreground-700 duration-200 ease-in-out group-hover:text-foreground-500 md:text-xl md:font-extrabold">
                {social.name}
              </span>
            </a>
          ))}
        </div>
        <div className="flex w-fit items-start pl-10 xl:pl-32">
          <div className="space-y-3">
            <div className="text-foreground-500">
              <p>Email</p>
              <a
                href="mailto:info@davidslaninka.dev"
                className="text-sm font-light text-foreground-800 transition-colors duration-200 ease-in-out hover:text-foreground-600"
              >
                info@davidslaninka.dev
              </a>
            </div>
            <div className="text-foreground-500">
              <p>Location</p>
              <span className="text-sm font-light text-foreground-800">
                Slovakia, GMT+2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SOCIALS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/david-slaninka/",
  },
  {
    name: "GitHub",
    url: "https://github.com/david-mcbacon",
  },
  {
    name: "Twitter/X",
    url: "https://twitter.com/DavidMcBacon",
  },
];

function Footer() {
  return (
    <section className="flex h-fit w-full flex-col items-start justify-between md:items-end">
      <div className="flex items-start gap-10 md:gap-5">
        <Logo size="sm" />
        <div>
          <p className="text-xs font-light text-secondary">
            © {new Date().getFullYear()} Copyright David Slaninka
          </p>
          <p className="text-xs font-light text-secondary">
            All rights reserved.
          </p>
          <div className="flex gap-5 pt-4 text-sm font-light text-secondary">
            <Link
              className="transition-colors duration-200 ease-in-out hover:text-secondary-300"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="transition-colors duration-200 ease-in-out hover:text-secondary-300"
              href="/cookie-policy"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
