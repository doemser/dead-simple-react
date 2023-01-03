export default function PlayGround({ children }) {
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
