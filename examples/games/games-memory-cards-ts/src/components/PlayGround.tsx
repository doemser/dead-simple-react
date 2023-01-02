import { PlayGroundProps } from "../interfaces";

export default function PlayGround({ children }: PlayGroundProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 25%)",
        gridTemplateRows: "repeat(4, auto)",
        textAlign: "center"
      }}
    >
      {children}
    </div>
  );
}
