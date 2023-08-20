import { initialState } from "../../constants";
import { ActionType, Direction } from "../../enmus";
import { State } from "../../types";
import { pacmanReducer } from "./pacmanReducer";


describe('pacmanReducer', () => {
    let state: State;
    beforeEach(() => {
        state = { ...initialState };
    });
    describe('Basic Movements', () => {
        it('should move the pacman north from origin and report the position', () => {
            state = pacmanReducer(initialState, { type: ActionType.PLACE, x: 0, y: 0, direction: Direction.NORTH });
            state = pacmanReducer(state, { type: ActionType.MOVE });
            state = pacmanReducer(state, { type: ActionType.REPORT });
            expect(state).toEqual({ x: 0, y: 1, direction: Direction.NORTH, report: 'Output: 0,1,NORTH', isPlaced: true });
        });
        it('should perform a sequence of moves and report', () => {
            state = pacmanReducer(initialState, { type: ActionType.PLACE, x: 1, y: 2, direction: Direction.EAST });
            state = pacmanReducer(state, { type: ActionType.MOVE });
            state = pacmanReducer(state, { type: ActionType.MOVE });
            state = pacmanReducer(state, { type: ActionType.LEFT });
            state = pacmanReducer(state, { type: ActionType.MOVE });
            state = pacmanReducer(state, { type: ActionType.REPORT });
            expect(state).toEqual({ x: 3, y: 3, direction: Direction.NORTH, report: 'Output: 3,3,NORTH', isPlaced: true });
        });  
    })

    describe('Rotations', () => {
        it('should rotate correctly from NORTH', () => {
            state = pacmanReducer(initialState, { type: ActionType.PLACE, x: 0, y: 0, direction: Direction.NORTH });
            
            state = pacmanReducer(state, { type: ActionType.LEFT });
            expect(state.direction).toEqual(Direction.WEST);
    
            state = pacmanReducer(state, { type: ActionType.RIGHT });
            expect(state.direction).toEqual(Direction.NORTH);
        });
    
        it('should rotate correctly from EAST', () => {
            state = pacmanReducer(initialState, { type: ActionType.PLACE, x: 0, y: 0, direction: Direction.EAST });
            
            state = pacmanReducer(state, { type: ActionType.LEFT });
            expect(state.direction).toEqual(Direction.NORTH);
        
            state = pacmanReducer(state, { type: ActionType.RIGHT });
            expect(state.direction).toEqual(Direction.EAST); 
        });
    
        it('should rotate correctly from SOUTH', () => {
            state = pacmanReducer(initialState, { type: ActionType.PLACE, x: 0, y: 0, direction: Direction.SOUTH });
            
            state = pacmanReducer(state, { type: ActionType.LEFT });
            expect(state.direction).toEqual(Direction.EAST);
    
            state = pacmanReducer(state, { type: ActionType.RIGHT });
            expect(state.direction).toEqual(Direction.SOUTH);
        });
    
        it('should rotate correctly from WEST', () => {
            state = pacmanReducer(initialState, { type: ActionType.PLACE, x: 0, y: 0, direction: Direction.WEST });
            
            state = pacmanReducer(state, { type: ActionType.LEFT });
            expect(state.direction).toEqual(Direction.SOUTH);
    
            state = pacmanReducer(state, { type: ActionType.RIGHT });
            expect(state.direction).toEqual(Direction.WEST);
        });
    });

    describe('Report and Invalid Actions', () => {
        it('should turn the pacman to the left and report', () => {
            state = pacmanReducer(state, { type: ActionType.PLACE, x: 0, y: 0, direction: Direction.NORTH });
            state = pacmanReducer(state, { type: ActionType.LEFT });
            state = pacmanReducer(state, { type: ActionType.REPORT });
            expect(state).toEqual({ x: 0, y: 0, direction: Direction.WEST, report: 'Output: 0,0,WEST', isPlaced: true });
        });
        it('should not perform any action before PLACE', () => {    
            state = pacmanReducer(state, { type: ActionType.MOVE });
            expect(state).toEqual(initialState);
    
            state = pacmanReducer(state, { type: ActionType.LEFT });
            expect(state).toEqual(initialState);
    
            state = pacmanReducer(state, { type: ActionType.RIGHT });
            expect(state).toEqual(initialState);
    
            state = pacmanReducer(state, { type: ActionType.REPORT });
            expect(state).toEqual(initialState);
        });
        it('should perform actions after PLACE', () => {
            state = pacmanReducer(state, { type: ActionType.PLACE, x: 0, y: 0, direction: Direction.NORTH });
            
            state = pacmanReducer(state, { type: ActionType.MOVE });
            expect(state.y).toEqual(1);
    
            state = pacmanReducer(state, { type: ActionType.LEFT });
            expect(state.direction).toEqual(Direction.WEST);
    
            state = pacmanReducer(state, { type: ActionType.RIGHT });
            expect(state.direction).toEqual(Direction.NORTH);
    
            state = pacmanReducer(state, { type: ActionType.REPORT });
            expect(state.report).toEqual('Output: 0,1,NORTH');
        });
        it('should ignore invalid PLACE commands', () => {
            state = pacmanReducer(state, { type: ActionType.PLACE, x: 6, y: 6, direction: Direction.NORTH });
            expect(state).toEqual(initialState);
        });
        it('should ignore PLACE commands with negative coordinates', () => {
            state = pacmanReducer(state, { type: ActionType.PLACE, x: -1, y: -1, direction: Direction.NORTH });
            expect(state).toEqual(initialState);
        });
    });
    describe('PLACE Redundancy and Boundaries', () => {
        it('should reset position and direction on a subsequent valid PLACE', () => {
            state = pacmanReducer(state, { type: ActionType.PLACE, x: 1, y: 1, direction: Direction.NORTH });
            state = pacmanReducer(state, { type: ActionType.PLACE, x: 2, y: 2, direction: Direction.EAST });
            expect(state).toEqual({ x: 2, y: 2, direction: Direction.EAST, report: '', isPlaced: true });
        });

        it('should retain current state with an invalid subsequent PLACE', () => {
            state = pacmanReducer(state, { type: ActionType.PLACE, x: 1, y: 1, direction: Direction.NORTH });
            state = pacmanReducer(state, { type: ActionType.PLACE, x: 6, y: 6, direction: Direction.EAST });
            expect(state).toEqual({ x: 1, y: 1, direction: Direction.NORTH, report: '', isPlaced: true });
        });
        it('should not allow pacman to move off the bottom-left corner of the grid', () => {
            state = pacmanReducer(initialState, { type: ActionType.PLACE, x: 0, y: 0, direction: Direction.SOUTH });
            state = pacmanReducer(state, { type: ActionType.MOVE });
            expect(state).toEqual({ x: 0, y: 0, direction: Direction.SOUTH, report: '', isPlaced: true });
        });
        it('should not move beyond the top grid limit', () => {
            state = pacmanReducer(initialState, { type: ActionType.PLACE, x: 0, y: 4, direction: Direction.NORTH });
            state = pacmanReducer(state, { type: ActionType.MOVE });
            expect(state.y).toEqual(4);
        });

        it('should not move beyond the right grid limit', () => {
            state = pacmanReducer(initialState, { type: ActionType.PLACE, x: 4, y: 0, direction: Direction.EAST });
            state = pacmanReducer(state, { type: ActionType.MOVE });
            expect(state.x).toEqual(4);
        });
        it('should prevent pacman from moving beyond the top-right corner of the grid', () => {
            state = pacmanReducer(initialState, { type: ActionType.PLACE, x: 4, y: 4, direction: Direction.NORTH });
            state = pacmanReducer(state, { type: ActionType.MOVE });
            expect(state).toEqual({ x: 4, y: 4, direction: Direction.NORTH, report: '', isPlaced: true });
        });
    });
    describe('Unknown/Unsupported Actions', () => {
        it('should retain the current state when an unknown action type is dispatched', () => {
            const unknownAction = { type: 'UNKNOWN_ACTION' };
            const newState = pacmanReducer(state, unknownAction as any);
            expect(newState).toEqual(initialState);
        });
    })
    
})
