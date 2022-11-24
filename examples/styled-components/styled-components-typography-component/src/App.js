import styled from "styled-components";

const StyledH1 = styled.h1`
  color: red;
`;
const StyledBodyText = styled.p`
  background: ${({ someProp }) => someProp};
`;

const Typography = ({
  children,
  variant = "bodyText",
  component,
  ...props
}) => {
  if (variant === "h1") {
    return (
      <StyledH1 as={component} {...props}>
        {children}
      </StyledH1>
    );
  } else if (variant === "bodyText") {
    return (
      <StyledBodyText as={component} {...props}>
        {children}
      </StyledBodyText>
    );
  }
};

export default function App() {
  return (
    <>
      <Typography variant="h1">Headline 1</Typography>
      <Typography variant="bodyText" someProp="lightpink">
        body text with prop
      </Typography>
      <Typography variant="bodyText" component="h2">
        body text semantically as h2
      </Typography>
    </>
  );
}
