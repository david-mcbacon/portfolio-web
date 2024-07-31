import Heading from "@/core/heading";

interface CollapsibeHoverTableProps {
  tableTitle: string;
  rows: React.ReactNode;
  rowsLength: number;
  rowHeightMobile?: string;
}

export default function CollapsibeHoverTable({
  rowHeightMobile = "h-20",
  ...props
}: CollapsibeHoverTableProps) {
  return (
    <div className="w-full">
      <Heading
        type={2}
        className="mx-auto mb-5 w-full max-w-[1536px] px-6 md:px-14 xl:px-[13.5rem]"
      >
        {props.tableTitle}
      </Heading>
      <div className="relative">
        <div className="z-30">{props.rows}</div>
        {/* The same div as above, only for displaying borders, that needs to be under the 3d scene. The height 28 of the div inside array mapping is the same as in the <CollapsibleHoverTableRow> */}
        <div className="pointer-events-none absolute inset-0 z-0 last:border-b last:border-secondary-900 [&>*]:border-t [&>*]:border-secondary-900">
          {Array.from({ length: props.rowsLength }).map((_, index) => (
            <div
              className={`z-0 ${rowHeightMobile} w-full md:h-28`}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
