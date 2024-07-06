import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../ThemeContext";

const StyledComponent = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.body};
`;

const ExampleComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <StyledComponent>
      <h1 style={{ color: theme.colors.primary }}>Styled Component</h1>
      <p style={{ fontFamily: theme.fonts.body }}>This is a paragraph using the body font.</p>
    </StyledComponent>
  );
};

export default ExampleComponent;
