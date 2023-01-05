import { useState } from "react";
import styled from "./styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  background: ${({ color = "blue" }) => color};
  color: white;
  font-size: x-large;
`;

export default function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <StyledButton
      color={isOn ? "green" : "red"}
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      Love
    </StyledButton>
  );
}
