export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="bg-orb bg-orb-a -left-1/4 -top-1/3 h-[60vmax] w-[60vmax]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--accent-a), transparent 70%)",
          opacity: 0.22,
        }}
      />
      <div
        className="bg-orb bg-orb-b -right-1/4 top-1/3 h-[55vmax] w-[55vmax]"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, var(--accent-b), transparent 70%)",
          opacity: 0.18,
        }}
      />
      <div
        className="bg-orb bg-orb-a bottom-[-20%] left-1/3 h-[50vmax] w-[50vmax]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--accent-c), transparent 70%)",
          opacity: 0.14,
        }}
      />
    </div>
  );
}
