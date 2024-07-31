"use client";
import {
  LazyMotion,
  m,
  domAnimation,
  MotionValue,
  useTransform,
} from "framer-motion";
import { memo, useMemo } from "react";

interface AxisX {
  color: string;
  strokeWidth: number;
  axisLabels?: string[];
  axisLabelsColor?: string;
  title?: string;
  titleColor?: string;
}

interface AxisY {
  color: string;
  strokeWidth: number;
  axisLabels?: string[];
  axisLabelsColor?: string;
  title?: string;
  titleColor?: string;
}

interface LineData {
  data: number[];
  dataName: string;
  color: string;
  strokeWidth: number;
}

interface LineChartProps {
  lines: LineData[];
  scrollYProgress: MotionValue<number>;
  axisX?: AxisX;
  axisY?: AxisY;
}

const LineChart = ({
  lines,
  axisX = { color: "white", strokeWidth: 2 },
  axisY = { color: "white", strokeWidth: 2 },
  scrollYProgress,
}: LineChartProps) => {
  // check the length of the data for each line, if they are not the same, throw an error
  const dataLength = lines[0].data.length;
  if (!lines.every((line) => line.data.length === dataLength)) {
    throw new Error("All lines must have the same length of data");
  }

  const viewBoxWidth = 600;
  const viewBoxHeight = 300;

  const axisXViewboxOffset = 30;
  const axisYViewboxOffset = 30;

  const [stepX, stepY] = useMemo(() => {
    return [
      (viewBoxWidth - axisXViewboxOffset) / (dataLength - 1),
      (viewBoxHeight - axisYViewboxOffset) / (dataLength - 1),
    ];
  }, [
    dataLength,
    viewBoxWidth,
    viewBoxHeight,
    axisXViewboxOffset,
    axisYViewboxOffset,
  ]);

  const linesWithLength = useMemo(() => {
    return calculatePathLength({
      lines,
      stepX,
      viewBoxHeight,
      axisYViewboxOffset,
      axisXViewboxOffset,
    });
  }, [lines, stepX, viewBoxHeight, axisYViewboxOffset, axisXViewboxOffset]);

  return (
    <LazyMotion strict features={domAnimation}>
      <div className="flex h-full w-full flex-col">
        <m.svg
          className="h-full w-full"
          viewBox={`0 0 ${viewBoxWidth + axisXViewboxOffset} ${viewBoxHeight + axisYViewboxOffset}`}
        >
          {/* AXIS */}
          <path
            d={`M${axisXViewboxOffset} ${viewBoxHeight - axisXViewboxOffset} L${viewBoxWidth} ${viewBoxHeight - axisXViewboxOffset}`}
            stroke={axisX.color}
            fill="none"
            strokeWidth={axisX.strokeWidth}
          />
          <path
            d={`M${axisYViewboxOffset} ${viewBoxHeight - axisYViewboxOffset} L${axisYViewboxOffset} 0`}
            stroke={axisY.color}
            fill="none"
            strokeWidth={axisY.strokeWidth}
          />

          {/* AXIS TITLES */}
          {axisX.title && (
            <text
              x={viewBoxWidth / 2}
              y={viewBoxHeight + axisXViewboxOffset}
              textAnchor="middle"
              fill={axisX.titleColor || "white"}
              fontSize="12"
            >
              {axisX.title}
            </text>
          )}
          {axisY.title && (
            <text
              x={-viewBoxHeight / 2 + 20}
              y={axisYViewboxOffset / 2}
              textAnchor="middle"
              fill={axisY.titleColor || "white"}
              fontSize="12"
              transform="rotate(-90)"
            >
              {axisY.title}
            </text>
          )}

          {/* AXIS LABELS */}
          {axisX.axisLabels &&
            axisX.axisLabels.map((label, index) => (
              <text
                key={index}
                x={index * stepX + axisXViewboxOffset}
                y={viewBoxHeight}
                textAnchor="middle"
                fill={axisX.axisLabelsColor || "white"}
                fontSize="12"
              >
                {label}
              </text>
            ))}
          {axisY.axisLabels &&
            axisY.axisLabels.map((label, index) => (
              <text
                key={index}
                x={20}
                y={viewBoxHeight - axisYViewboxOffset - index * stepY}
                textAnchor="end"
                fill={axisY.axisLabelsColor || "white"}
                fontSize="12"
              >
                {label}
              </text>
            ))}

          {/* LINES */}
          {linesWithLength.map((line, lineIndex) => {
            return Line(
              line,
              lineIndex,
              scrollYProgress,
              line.path,
              line.modifier,
            );
          })}
        </m.svg>
        <div>
          <Legend lines={lines} />
        </div>
      </div>
    </LazyMotion>
  );
};

const Line = (
  line: LineData,
  lineIndex: number,
  scrollYProgress: MotionValue<number>,
  path: SVGPathElement,
  modifier: number,
) => {
  const modifiedLength = useTransform(scrollYProgress, (latest) =>
    adjustScrollProgress(latest, modifier),
  );

  return (
    <m.path
      key={lineIndex}
      d={path.getAttribute("d") as string}
      fill="none"
      stroke={line.color}
      strokeWidth={line.strokeWidth}
      initial={{ pathLength: 0 }}
      style={{ pathLength: modifiedLength }}
    />
  );
};

const Legend = memo(({ lines }: { lines: LineData[] }) => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-4">
      {lines.map((line, index) => (
        <div key={index} className="flex items-center">
          <div
            className="mr-2 h-2 w-2 rounded-full"
            style={{ backgroundColor: line.color }}
          ></div>
          <p className="text-sm">{line.dataName}</p>
        </div>
      ))}
    </div>
  );
});

Legend.displayName = "Legend";

export default LineChart;

// ---------------------------------------------------- //
// Helper functions
// ---------------------------------------------------- //

function calculatePathLength({
  lines,
  stepX,
  viewBoxHeight,
  axisYViewboxOffset,
  axisXViewboxOffset,
}: {
  lines: LineData[];
  stepX: number;
  viewBoxHeight: number;
  axisYViewboxOffset: number;
  axisXViewboxOffset: number;
}) {
  // Calculate the path and path length for each line
  const linesWithPaths = lines.map((line) => {
    const path = calculatePath({
      data: line.data,
      stepX,
      viewBoxHeight,
      axisYViewboxOffset,
      axisXViewboxOffset,
    });
    const pathLength = path.getTotalLength();
    return { ...line, path, pathLength };
  });

  // Find the shortest path length
  const shortestPathLength = Math.min(
    ...linesWithPaths.map((line) => line.pathLength),
  );

  // Calculate the modifier for each line
  const linesWithModifiers = linesWithPaths.map((line) => ({
    ...line,
    modifier: shortestPathLength / line.pathLength,
  }));

  return linesWithModifiers;
}

const calculatePath = ({
  data,
  stepX,
  viewBoxHeight,
  axisYViewboxOffset,
  axisXViewboxOffset,
}: {
  data: number[];
  stepX: number;
  viewBoxHeight: number;
  axisYViewboxOffset: number;
  axisXViewboxOffset: number;
}) => {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const d = data
    .map(
      (value, index) =>
        `${Math.floor(index * stepX + axisXViewboxOffset)} ${Math.floor(viewBoxHeight - value - axisYViewboxOffset)}`,
    )
    .join(" L ");
  path.setAttribute("d", `M ${d}`);
  return path;
};

function adjustScrollProgress(
  scrollYprogress: number,
  modifier: number,
): number {
  if (scrollYprogress < 0.8) {
    return scrollYprogress * modifier;
  } else {
    // function that increase modifier close to 1 with growing scrollYprogress
    const newModifier =
      modifier < 1 ? modifier + (scrollYprogress - 0.8) * 0.4 : 1;
    return scrollYprogress * newModifier;
  }
}
