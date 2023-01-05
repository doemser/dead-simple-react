import { createElement } from "react";
import { nanoid } from "nanoid";

const styled = {};
const hashes = {};
const htmlElements = ["div", "button", "input"];

htmlElements.forEach((element) => {
  styled[element] = (strings, ...args) => {
    return (props) => {
      const rules = strings
        .flatMap((string, index) => {
          let interpolation = args[index];
          if (typeof interpolation === "function") {
            interpolation = interpolation(props);
          }
          return [string, interpolation].filter(
            (element) => element !== undefined
          );
        })
        .join("")
        .replace(/\s/g, "");

      if (!hashes[rules]) {
        hashes[rules] = nanoid(5);
        const style = document.createElement("style");
        style.innerHTML = `.${hashes[rules]}{${rules}}`;
        document.head.append(style);
      }

      return createElement(element, { ...props, className: hashes[rules] });
    };
  };
});

export default styled;
