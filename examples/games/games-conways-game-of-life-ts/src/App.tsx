import "./styles.css";
import Tiles from "./components/Tiles";
import Life from "./components/Life";
import Controls from "./components/Controls";
import Heading from "./components/Heading";

export default function App() {
  return (
    <>
      <Heading />
      <Controls />
      <Tiles />
      <Life />
    </>
  );
}
