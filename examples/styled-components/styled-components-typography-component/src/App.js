import styled from "styled-components";

const StyledH1 = styled.h1`
  color: red;
`;
const StyledBodyText = styled.p`
  background: ${({ someProp }) => someProp};
`;

// Could map all styles that a typography can have in a project.
const Typography = ({
  children,
  variant = "bodyText",
  component,
  ...props
}) => {
  // Depending on the props you pass
  // this lets you separate component style ( variant ) and semantics ( component ).
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
