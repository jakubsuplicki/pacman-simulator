import React from "react";
import { usePacman } from "../../contexts/pacman";
import { StyledOutputContainer } from "./OutputDisplay.styled";

const OutputDisplay: React.FC = () => {
    const { state } = usePacman();
    return state.report ? (
        <StyledOutputContainer>
            <p>{state.report}</p>
        </StyledOutputContainer>
    ) : null;
};


export default OutputDisplay;
