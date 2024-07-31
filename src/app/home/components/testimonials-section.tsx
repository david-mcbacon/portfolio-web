import Heading from "@/core/heading";
import { InViewAnimation } from "@/core/in-view-animation";
import { Testimonial3dScene } from "@/components/3d/testimonial-scene";

const TestimonialsSection = () => {
  return (
    <section
      id="testemonials"
      className="relative flex h-[90rem] min-h-screen w-full flex-col pb-20"
    >
      <div className="absolute left-0 top-52 z-10 flex h-full w-full flex-col gap-6">
        <Heading type={2} className="px-6 md:px-14 xl:px-[13.5rem]">
          Testimonials
        </Heading>

        <div className="flex flex-col gap-0">
          {testimonials.map((item, index) => (
            <InViewAnimation key={index}>
              <Testimonial
                name={item.name}
                position={item.position}
                company={item.company}
                testimonial={item.testimonial}
              />
            </InViewAnimation>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-[90rem] w-screen">
        <Testimonial3dScene />
      </div>
    </section>
  );
};

export default TestimonialsSection;

const Testimonial = ({
  name,
  position,
  company,
  testimonial,
}: {
  name: string;
  position: string;
  company: string;
  testimonial: string;
}) => {
  return (
    <div className="flex h-auto min-h-96 gap-5 px-6 md:px-14 xl:px-[13.5rem]">
      <div className="relative w-full border-t border-background-200">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <p className="text-4xl font-light">{testimonial}</p>
          <div className="pt-10">
            <p className="mb-1 text-xl font-bold">{name}</p>
            <p className="mb-[-3px] font-light text-foreground/60">
              {position}
            </p>
            <p className="font-light text-foreground/60">{company}</p>
          </div>
        </div>
        <div className="absolute left-[-4.5rem] top-[20%]">
          <p className="text-9xl leading-none text-primary-500">“</p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "John Doe",
    position: "CEO",
    company: "Company",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "John Doe",
    position: "CEO",
    company: "Company",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "John Doe",
    position: "CEO",
    company: "Company",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
