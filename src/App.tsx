import React from "react";
import PlaceCommandInput from "./components/Commands/PlaceInput";
import OutputDisplay from "./components/OutputDisplay";
import { PacmanProvider } from "./contexts/pacman";
import styled from 'styled-components';
import CommandsButtons from "./components/Commands/CommandsButtons";

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f4f4f4;
`;

const App: React.FC = () => {
  return (
    <PacmanProvider>
      <StyledMainWrapper>
        <h1>Pacman Simulator</h1>
        <PlaceCommandInput />
        <CommandsButtons />
        <OutputDisplay />
      </StyledMainWrapper>
    </PacmanProvider>
  );
};

export default App;
