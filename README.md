<p align="center"><img src="./assets/png/dead-simple-react-logo.png"/></p>

# dead-simple-react

### Leaving that bloat at home.

Dead simple examples to learn how to love react.

---

## To-do App - Principles

<details>
 <summary><font size="3">Add to-do</font></summary>
A form that submits to-dos to a list.

- uses a controlled input
- input field is required
- input field clears after form submit

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-principles/adding-todo-app" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

</details>

<details>
 <summary><font size="3">Complete to-do</font></summary>
A completable to-dos list.

- uses a controlled input of type checkbox
- uses `map()` to toggle each todo's completed state
- uses inline-styling to show if completed

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-principles/completing-todo-app" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

</details>

<details>
 <summary><font size="3">Delete to-do</font></summary>
A deletable to-do list.

- uses `filter()` method to delete item
- has no confirm message

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-principles/deleting-todo-app" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

</details>

<details>
 <summary><font size="3">Edit to-do</font></summary>
An editable to-do list.

- uses `map()` method to toggle if todo is in edit mode
- edit mode swaps span with input
- input controlled by todo name
- changes are directly written into the state

> this is dead simple - but edit mode should not be in the data we mock as a database, better keep your data structure clean from states that are only needed to render on the frontend.

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-principles/editing-todo-app" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

</details>

---

## To-do App - Advanced

<details>
 <summary><font size="3">Add to-do - multiple inputs</font></summary>
A form that submits to-dos with multiple values to a list.

- uses `new FormData()` instead of controlled inputs

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-advanced/adding-todo-app-multiple-inputs" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

</details>

<details>
 <summary><font size="3">Delete to-do - confirm message</font></summary>
A deletable todo list that asks for confirmation before deleting.

- uses custom component
- uses "Lifting up State"

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-advanced/deleting-todo-app-confirm-message" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

</details>

<details>
 <summary><font size="3">Edit to-do - keeping data clean</font></summary>
An editable to-do list with nested edit mode toggle.

- uses custom component
- uses "Lifting up State"
- keeps data structure clean from an items edit state
- uses formData and controlled input

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-advanced/editing-todo-app-keeping-data-clean" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

</details>

---

## To-do App - Disguised

<details>
 <summary><font size="3">Color Palette Creator</font></summary>
A form that submits colors to a list from where you can copy the hex codes.

- text and color input are using the same useState
- uses async function `navigator.clipboard.writeText()`

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-disguised/todo-app-disguised-color-palette-creator" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

> Depending on the browser, this will throw an error in Codesandbox's editor-mode, but will most likely work if you open the app in a new window.

</details>

<details>
 <summary><font size="3">Budget Planner</font></summary>
A form that submits expenses and calculates a budget.

- uses a loading bar to display rest budget
- uses controlled inputs
- uses `Number.parseFloat()`
- uses `Math.round()`
- size at where you should split up custom components

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-disguised/todo-app-disguised-budget-planner" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

</details>

---

## Custom Hooks

<details>
 <summary><font size="3">useMousePosition</font></summary>
Custom hook that returns the position of the mouse.

- uses `window.addEventListener()` and `window.removeEventListener()`
- uses a cleanup function in a useEffect
- one of the most easiest self written hooks

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/custom-hooks/custom-hooks-use-mouse-position" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

</details>
