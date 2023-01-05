import { useState } from "react";
import styled from "./styled-components";

const StyledButton = styled.button`
  background: ${({ bgColor = "blue" }) => bgColor};
  color: white;
  font-size: x-large;
`;

export default function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <StyledButton
      bgColor={isOn ? "green" : "red"}
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      Love
    </StyledButton>
  );
}
