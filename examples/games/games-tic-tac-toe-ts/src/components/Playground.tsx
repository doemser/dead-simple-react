interface PlayGroundProps {
  children: React.ReactNode;
}

export default function Playground({ children }: PlayGroundProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,50px)",
        gridTemplateRows: "repeat(3,auto)"
      }}
    >
      {children}
    </div>
  );
}
