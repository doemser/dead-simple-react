import { useEffect, useRef, useState } from "react";

function shouldTrack(options, key) {
  const allowAll = !options.allowed;
  const isBlocked = options.blocked?.includes(key);
  const isAllowed = allowAll || options.allowed?.includes(key);

  return !(isBlocked || !isAllowed);
}

function shouldPreventDefault(preventDefault, key) {
  if (Array.isArray(preventDefault)) {
    return preventDefault?.includes(key);
  }
  return Boolean(preventDefault);
}

const initialValue = {};

function useWASD(options = initialValue) {
  const [keyboard, setKeyboard] = useState(
    options.initialValue || initialValue
  );

  const keys = useRef({ ...keyboard });

  useEffect(() => {
    function update() {
      const matchingCombos = options.combos
        ? Object.entries(options.combos).reduce(
            (previousValue, [name, characters]) => ({
              ...previousValue,
              [name]: characters.every((character) => keys.current[character])
            }),
            {}
          )
        : {};
      setKeyboard({ ...keys.current, ...matchingCombos });
    }

    function handleDown(event) {
      const key = event.key.toLowerCase().trim() || "space";
      if (shouldPreventDefault(options.preventDefault, key)) {
        event.preventDefault();
      }
      if (shouldTrack(options, key)) {
        keys.current[key] = true;
        update();
      }
    }

    function handleUp(event) {
      const key = event.key.toLowerCase().trim() || "space";
      if (shouldPreventDefault(options.preventDefault, key)) {
        event.preventDefault();
      }
      if (shouldTrack(options, key)) {
        keys.current[key] = false;
        update();
      }
    }

    const context = options.ref?.current ?? document;

    context.addEventListener("keydown", handleDown);
    context.addEventListener("keyup", handleUp);

    return () => {
      context.removeEventListener("keydown", handleDown);
      context.removeEventListener("keyup", handleUp);
    };
  }, [options]);

  return keyboard;
}

export default function App() {
  const keyboard = useWASD();

  return (
    <pre>
      <code>{JSON.stringify(keyboard)}</code>
    </pre>
  );
}
