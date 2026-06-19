export default function BackgroundEffects() {
  return (
    <>
      <div
        className="
        fixed
        -left-40
        -top-40
        h-[700px]
        w-[700px]
        rounded-full
        bg-blue-300/20
        blur-[120px]
        animate-pulse
        pointer-events-none
        "
      />

      <div
        className="
        fixed
        -right-40
        top-20
        h-[700px]
        w-[700px]
        rounded-full
        bg-cyan-300/20
        blur-[120px]
        animate-pulse
        pointer-events-none
        "
      />

      <div
        className="
        fixed
        bottom-0
        left-1/3
        h-[500px]
        w-[500px]
        rounded-full
        bg-indigo-300/15
        blur-[100px]
        pointer-events-none
        "
      />

      <div
        className="
        fixed
        inset-0
        opacity-[0.03]
        pointer-events-none
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}