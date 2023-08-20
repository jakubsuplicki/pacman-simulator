import { ReactNode } from "react";
import { Direction, ActionType } from "../enmus/pacman";

export type State = {
    isPlaced: boolean;
    x: number;
    y: number;
    direction: Direction;
    report: string;
};

export type Action =
    | { type: ActionType.PLACE; x: number; y: number; direction: Direction }
    | { type: ActionType.MOVE }
    | { type: ActionType.LEFT }
    | { type: ActionType.RIGHT }
    | { type: ActionType.REPORT };

export type PacmanContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
};

export interface PacmanProviderProps {
    children: ReactNode;
}
