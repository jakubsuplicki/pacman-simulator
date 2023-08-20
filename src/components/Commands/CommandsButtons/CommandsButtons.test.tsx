import { render, screen, fireEvent } from '@testing-library/react';
import { usePacman } from '../../../contexts/pacman';
import { ActionType } from '../../../enmus';
import { PacmanProvider } from "../../../contexts/pacman";
import CommandsButtons from '.';


jest.mock('../../../contexts/pacman', () => {
  const original = jest.requireActual('../../../contexts/pacman');
  return {
    ...original,
    usePacman: jest.fn()
  };
});

describe('<CommandsButtons />', () => {
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    (usePacman as jest.Mock).mockReturnValue({
      state: { isPlaced: false },
      dispatch: mockDispatch
    });
  });

  it('disables all buttons when isPlaced is false', () => {
    render(
      <PacmanProvider>
        <CommandsButtons />
      </PacmanProvider>
    );
    expect(screen.getByRole('button', { name: /LEFT/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /RIGHT/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /MOVE/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /REPORT/i })).toBeDisabled();
  });

  it('enables all buttons when isPlaced is true', () => {
    (usePacman as jest.Mock).mockReturnValueOnce({
      state: { isPlaced: true },
      dispatch: mockDispatch
    });
    render(
      <PacmanProvider>
        <CommandsButtons />
      </PacmanProvider>
    );
    expect(screen.getByRole('button', { name: /LEFT/i })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: /RIGHT/i })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: /MOVE/i })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: /REPORT/i })).not.toBeDisabled();
  });

  it('dispatches correct action when buttons are clicked', () => {
    (usePacman as jest.Mock).mockReturnValueOnce({
      state: { isPlaced: true },
      dispatch: mockDispatch
    });
    render(
      <PacmanProvider>
        <CommandsButtons />
      </PacmanProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /LEFT/i }));
    expect(mockDispatch).toHaveBeenCalledWith({ type: ActionType.LEFT });

    fireEvent.click(screen.getByRole('button', { name: /RIGHT/i }));
    expect(mockDispatch).toHaveBeenCalledWith({ type: ActionType.RIGHT });

    fireEvent.click(screen.getByRole('button', { name: /MOVE/i }));
    expect(mockDispatch).toHaveBeenCalledWith({ type: ActionType.MOVE });

    fireEvent.click(screen.getByRole('button', { name: /REPORT/i }));
    expect(mockDispatch).toHaveBeenCalledWith({ type: ActionType.REPORT });
  });
});
