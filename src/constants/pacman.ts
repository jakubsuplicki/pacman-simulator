import { Direction } from "../enmus/pacman";
export const GRID_MAX_X = 4;
export const GRID_MAX_Y = 4;

export const initialState = {
    isPlaced: false,
    x: -1,
    y: -1,
    direction: Direction.NORTH,
    report: ''
};