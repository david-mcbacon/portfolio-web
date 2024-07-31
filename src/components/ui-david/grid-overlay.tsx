const GridOverlay = () => {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-full w-screen">
      <div className="grid h-full w-full grid-cols-12 gap-12">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="h-full min-h-screen bg-neutral-800/20"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GridOverlay;
