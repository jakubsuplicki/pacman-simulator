import React from "react";
import { usePacman } from "../../../contexts/pacman";
import { StyledActionsContainer } from "./CommandsButtons.styled";
import { ActionType } from "../../../enmus";
import { MainButton } from "../../Shared/Buttons";
import { Wrapper } from "../../Shared/Wrappers";

const CommandsButtons: React.FC = () => {
    const { dispatch, state } = usePacman();
    const isDisabled = !state.isPlaced;
    return (
        <Wrapper>
            <StyledActionsContainer>
                <MainButton disabled={isDisabled} onClick={() => dispatch({ type: ActionType.LEFT })}>LEFT</MainButton>
                <MainButton disabled={isDisabled} onClick={() => dispatch({ type: ActionType.RIGHT })}>RIGHT</MainButton>
            </StyledActionsContainer>
            <StyledActionsContainer>
                <MainButton disabled={isDisabled} onClick={() => dispatch({ type: ActionType.MOVE })}>MOVE</MainButton>
                <MainButton disabled={isDisabled} onClick={() => dispatch({ type: ActionType.REPORT })}>REPORT</MainButton>
            </StyledActionsContainer>
        </Wrapper>
    );
};

export default CommandsButtons;
