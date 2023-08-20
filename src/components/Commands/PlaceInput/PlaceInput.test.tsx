import { render, screen, fireEvent } from '@testing-library/react';
import PlaceInput from '.';
import { usePacman } from '../../../contexts/pacman';
import { ActionType, Direction } from '../../../enmus/pacman';

jest.mock('../../../contexts/pacman', () => ({
    usePacman: jest.fn()
}));

describe('<PlaceInput />', () => {
    let mockDispatch: jest.Mock;

    beforeEach(() => {
        mockDispatch = jest.fn();
        (usePacman as jest.Mock).mockReturnValue({
            dispatch: mockDispatch
        });
    });

    it('dispatches correct action when PLACE button is clicked', () => {
        render(<PlaceInput />);

        fireEvent.change(screen.getByLabelText(/X Position/), { target: { value: '2' } });
        fireEvent.change(screen.getByLabelText(/Y Position/), { target: { value: '3' } });
        fireEvent.change(screen.getByLabelText(/Direction/), { target: { value: Direction.NORTH } });

        fireEvent.click(screen.getByText('PLACE'));

        expect(mockDispatch).toHaveBeenCalledWith({
            type: ActionType.PLACE,
            x: 2,
            y: 3,
            direction: Direction.NORTH
        });
    });

    it('does not dispatch if any of the values are missing', () => {
        render(<PlaceInput />);

        fireEvent.change(screen.getByLabelText(/X Position/), { target: { value: '2' } });
        fireEvent.change(screen.getByLabelText(/Y Position/), { target: { value: '3' } });

        fireEvent.click(screen.getByText('PLACE'));

        expect(mockDispatch).not.toHaveBeenCalled();
    });
});
