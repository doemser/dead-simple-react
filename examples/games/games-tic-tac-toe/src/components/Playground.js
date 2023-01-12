export default function Playground({ children }) {
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
