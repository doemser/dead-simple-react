import { useState } from "react";
import { nanoid } from "nanoid";

function say(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

export default function App() {
  const [thingsSaid, setThingsSaid] = useState([
    { text: "keep it simple stupid", id: "hZNks" }
  ]);

  return (
    <>
      <h1>Speech Synthesizer</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const text = event.target.elements.textInput.value;

          say(text);
          setThingsSaid([{ text, id: nanoid(5) }, ...thingsSaid]);
        }}
      >
        <input type="text" name="textInput" />
        <button type="submit">speak</button>
      </form>

      <hr />

      <ul>
        {thingsSaid.map((said) => {
          return (
            <li key={said.id}>
              {said.text}
              <button
                type="button"
                onClick={() => {
                  say(said.text);
                }}
              >
                speak
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
