import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  min-width: 100px;
  margin: 5px;
  padding: 10px 0;
  border: none;
  background: transparent;
  text-decoration: none;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background: lightgrey;
    color: black;
  }

  ${({ variant = "contained" }) => {
    if (variant === "text") {
      return css`
        border: none;
      `;
    } else if (variant === "contained") {
      return css`
        background: black;
        color: white;
      `;
    } else if (variant === "outlined") {
      return css`
        border: 2px solid black;
      `;
    }
  }}

  &:disabled {
    background: lightgrey;
    color: grey;
    cursor: not-allowed;
  }
`;

function Button(props) {
  return (
    <StyledButton as={props.href && "a"} {...props}>
      {props.children}
    </StyledButton>
  );
}

export default function App() {
  return (
    <>
      <h1>Button / Link Component</h1>

      <Button variant="text">TEXT</Button>
      <Button variant="contained">CONTAINED</Button>
      <Button variant="outlined">OUTLINED</Button>
      <hr />
      <Button>PRIMARY</Button>
      <Button disabled>DISABLED</Button>
      <Button href="https://github.com/doemser" target="_blank">
        LINK
      </Button>
    </>
  );
}
