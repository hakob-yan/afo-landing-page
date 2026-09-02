export function CyberCityBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-afo-bg via-transparent to-afo-bg" />

      {/* Cosmos glow */}
      <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-afo-purple/20 blur-3xl" />
      <div className="absolute top-32 right-0 h-48 w-48 rounded-full bg-afo-purple-bright/10 blur-3xl" />

      {/* Polygon city skyline */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-30"
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <polygon points="0,120 0,80 30,60 50,75 70,40 90,55 110,25 130,45 150,20 170,50 190,15 210,40 230,30 250,55 270,20 290,45 310,25 330,60 350,35 370,70 400,50 400,120" fill="#2C2646" />
        <polygon points="0,120 0,95 20,85 40,100 60,75 80,90 100,70 120,85 140,65 160,80 180,60 200,75 220,55 240,70 260,50 280,65 300,45 320,60 340,40 360,55 380,35 400,50 400,120" fill="#261F34" opacity="0.8" />

        {/* Window lights */}
        {[
          [45, 68], [75, 48], [115, 33], [155, 28], [195, 23], [235, 38],
          [275, 28], [315, 33], [355, 45],
        ].map(([x, y], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="4"
            height="6"
            fill={i % 2 === 0 ? "#C084FC" : "#7B2CBF"}
            opacity="0.6"
          />
        ))}
      </svg>

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#C2B2CA 1px, transparent 1px), linear-gradient(90deg, #C2B2CA 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
