import { initialState, GRID_MAX_X, GRID_MAX_Y } from '../../constants';
import { ActionType, Direction } from '../../enmus';
import { Action, State } from '../../types';


export const pacmanReducer = (state: State = initialState, action: Action): State => {
    if (!state.isPlaced && action.type !== ActionType.PLACE) {
        return state;
    }
    switch (action.type) {
        case ActionType.PLACE:
            if (action.x === undefined || action.x < 0 || action.x > GRID_MAX_X ||
                action.y === undefined || action.y < 0 || action.y > GRID_MAX_Y ||
                action.direction === undefined) {
                    return state;
            }
            return { ...state, x: action.x, y: action.y, direction: action.direction, isPlaced: true };
        
        case ActionType.MOVE:
            switch (state.direction) {
                case Direction.NORTH:
                    if (state.y < GRID_MAX_Y) return { ...state, y: state.y + 1 };
                    break;
                case Direction.SOUTH:
                    if (state.y > 0) return { ...state, y: state.y - 1 };
                    break;
                case Direction.EAST:
                    if (state.x < GRID_MAX_X) return { ...state, x: state.x + 1 };
                    break;
                case Direction.WEST:
                    if (state.x > 0) return { ...state, x: state.x - 1 };
                    break;
            }
            return state; 
        case ActionType.LEFT:
            const leftDirections: Record<Direction, Direction> = {
                [Direction.NORTH]: Direction.WEST,
                [Direction.WEST]: Direction.SOUTH,
                [Direction.SOUTH]: Direction.EAST,
                [Direction.EAST]: Direction.NORTH,
            };
            return { ...state, direction: leftDirections[state.direction] };
        case ActionType.RIGHT:
            const rightDirections: Record<Direction, Direction> = {
                [Direction.NORTH]: Direction.EAST,
                [Direction.EAST]: Direction.SOUTH,
                [Direction.SOUTH]: Direction.WEST,
                [Direction.WEST]: Direction.NORTH,
            };
            return { ...state, direction: rightDirections[state.direction] };
        case ActionType.REPORT:
            const output = `${state.x},${state.y},${state.direction}`;
            return { ...state, report: `Output: ${output}` };
        default:
            return state;
    }
};
