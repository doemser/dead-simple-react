import GameControls from "./components/GameControls";
import PlayGround from "./components/PlayGround";
import Opponents from "./components/Opponents";

export default function App() {
  return (
    <>
      <h1>Arcade Survival Game</h1>
      <PlayGround>
        <Opponents />
      </PlayGround>
      <GameControls />
      <p>Controls: "w", "a", "s", "d" on your keyboard</p>
    </>
  );
}
