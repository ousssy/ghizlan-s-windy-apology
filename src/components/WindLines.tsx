const WindLines = () => {
  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: 10 + i * 12,
    delay: i * 0.4,
    width: 80 + Math.random() * 120,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-lavender-dark/40 to-transparent animate-wind-line"
          style={{
            top: `${line.top}%`,
            width: `${line.width}px`,
            animationDelay: `${line.delay}s`,
            left: "-100px",
          }}
        />
      ))}
    </div>
  );
};

export default WindLines;
