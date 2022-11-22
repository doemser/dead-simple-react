<p align="center"><img src="./assets/png/dead-simple-react-logo.png"/></p>

# dead-simple-react

Dead simple examples to learn how to work with react.

---

## Props

<details>
 <summary><font size="3">Understanding props</font></summary>
A Tutorial on how to understand props.

- read code from top to bottom
- ignores the existence of children
- first understand, then learn about children

<a target="blank"></a>
[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://githubbox.com/doemser/dead-simple-react/tree/main/examples/props/understanding-props)

</details>

---

## To-do App - Principles

<details>
 <summary><font size="3">Add to-do</font></summary>
A form that submits to-dos to a list.

- uses a controlled input
- input field is required
- input field clears after form submit

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-principles/adding-todo-app)

</details>

<details>
 <summary><font size="3">Delete to-do</font></summary>
A deletable to-do list.

- uses filter method to delete item
- has no confirm message

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-principles/deleting-todo-app)

</details>

<details>
 <summary><font size="3">Edit to-do</font></summary>
An editable to-do list.

- uses map method to toggle if todo is in edit mode
- edit mode swaps span with input
- input controlled by todo name
- changes are directly written into the state

> this is dead simple - but edit mode should not be in the data we mock as a database, better keep your data structure clean from states that are only needed to render on the frontend.

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-principles/editing-todo-app)

</details>

---

## To-do App - Advanced

<details>
 <summary><font size="3">Edit to-do - keeping data clean</font></summary>
An editable to-do list with nested edit mode toggle.

- uses custom component
- uses "Lifting up State"
- keeps data structure clean from an items edit state
- changes are directly written into the state

<a href="https://githubbox.com/doemser/dead-simple-react/tree/main/examples/todo-app-principles/editing-todo-app-keeping-data-clean" target="_blank">![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)</a>

</details>
