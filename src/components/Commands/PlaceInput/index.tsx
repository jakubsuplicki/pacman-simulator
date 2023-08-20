import React, { useState } from 'react';
import { usePacman } from '../../../contexts/pacman';
import { ActionType, Direction } from '../../../enmus/pacman';
import { GRID_MAX_X, GRID_MAX_Y } from '../../../constants/pacman';
import { MainButton } from '../../Shared/Buttons';
import { MainSelect } from '../../Shared/Selects';
import { Wrapper } from '../../Shared/Wrappers';
import { MainLabel } from '../../Shared/Labels';
import { StyledLabelsContainer, StyledSubmitContainer } from './PlaceInput.styled';

const PlaceInput: React.FC = () => {
    const { dispatch } = usePacman();
    const [x, setX] = useState<number | null>(null);
    const [y, setY] = useState<number | null>(null);
    const [direction, setDirection] = useState<Direction | null>(null);

    const handlePlace = (e: React.FormEvent) => {
        e.preventDefault();
        if (x !== null && y !== null && direction !== null) {
            dispatch({ type: ActionType.PLACE, x, y, direction });
        }
    };

    return (
        <Wrapper as="form" onSubmit={handlePlace}>
            <StyledLabelsContainer>
                <MainLabel>
                    <span>X Position</span>
                    <MainSelect required value={x !== null ? x : ''} onChange={(e) => setX(Number(e.target.value))}>
                        <option value="" disabled>Select X</option>
                        {Array.from(Array(GRID_MAX_X + 1).keys()).map((value) => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </MainSelect>
                </MainLabel>

                <MainLabel>
                    <span>Y Position</span>
                    <MainSelect required value={y !== null ? y : ''} onChange={(e) => setY(Number(e.target.value))}>
                        <option value="" disabled>Select Y</option>
                        {Array.from(Array(GRID_MAX_Y + 1).keys()).map((value) => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </MainSelect>
                </MainLabel>

                <MainLabel>
                    <span>Direction</span>
                    <MainSelect required value={direction || ''} onChange={(e) => setDirection(e.target.value as Direction)}>
                        <option value="" disabled>Select Direction</option>
                        {Object.values(Direction).map(dir => (
                            <option key={dir} value={dir}>{dir}</option>
                        ))}
                    </MainSelect>
                </MainLabel>
            </StyledLabelsContainer>
            <StyledSubmitContainer>
                <MainButton type="submit">PLACE</MainButton>
            </StyledSubmitContainer>
        </Wrapper>
    );
};

export default PlaceInput;
