interface PlayGroundProps {
  children: React.ReactNode;
}

export default function PlayGround({ children }: PlayGroundProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        border: "2px solid black",
        overflow: "hidden"
      }}
    >
      {children}
    </div>
  );
}
