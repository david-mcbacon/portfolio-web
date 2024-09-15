import type { NextComponentType, NextPageContext } from "next";

interface Props {
  gradientTransparencyThreshold?: number;
}

const GridSvgNew: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute h-full w-full"
        style={{
          background: `radial-gradient(circle, rgba(18, 18, 18, 0), rgba(18, 18, 18, 1) ${
            props.gradientTransparencyThreshold || 70
          }%)`,
        }}
      />
      <svg
        id="patternId"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        // style={{
        //   // radial gradient
        //   background:
        //     "radial-gradient(circle, rgba(255, 255, 255, 0), rgba(19, 19, 19, 1))",
        // }}
      >
        <defs>
          <pattern
            id="a"
            patternUnits="userSpaceOnUse"
            width="14"
            height="14"
            patternTransform="scale(1) rotate(0)"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="hsla(0, 0%, 100%, 0)"
            />
            <path
              d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
              strokeWidth="0.5"
              stroke="hsla(259, 0%, 31%, 0.3)"
              fill="none"
            />
          </pattern>
        </defs>
        <rect
          width="800%"
          height="800%"
          transform="translate(0,0)"
          fill="url(#a)"
        />
      </svg>
    </div>
  );
};

export default GridSvgNew;
