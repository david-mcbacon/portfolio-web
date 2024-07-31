import OrangeMacbookScene from "@/components/3d/orange-macbook-scene";

export default function TestPage() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      {/* <div className="h-screen"></div> */}
      <div className="-mt-[100vh] h-screen w-full">
        <OrangeMacbookScene />
      </div>

      {/* <div className="h-screen"></div> */}
    </div>
  );
}
