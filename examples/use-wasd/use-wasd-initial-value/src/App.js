import useWASD from "use-wasd";

const options = {
  allowed: ["l", "o", "v", "e"],
  // Initially setting a value to true,
  // will not reverse the mechanism.
  initialValue: { l: true, o: true, v: true, e: true }
};

export default function App() {
  const keyboard = useWASD(options);
  return (
    <>
      <h1>useWASD</h1>
      <h2>initialValue</h2>
      <hr />
      <p>press one of the keys on your keyboard</p>
      {options.allowed.map((key) => {
        return (
          <label key={key}>
            {key}:{/* Controlled input type checkbox*/}
            <input type="checkbox" checked={keyboard[key]} readOnly />
          </label>
        );
      })}
    </>
  );
}
