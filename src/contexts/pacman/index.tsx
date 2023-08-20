import React, { createContext, useReducer, useContext } from "react";
import { pacmanReducer } from './pacmanReducer';
import { PacmanContextType, PacmanProviderProps } from "../../types";
import { initialState } from "../../constants/pacman";

const PacmanContext = createContext<PacmanContextType | undefined>(undefined);

export const PacmanProvider: React.FC<PacmanProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(pacmanReducer, initialState);
    return (
        <PacmanContext.Provider value={{ state, dispatch }}>
            {children}
        </PacmanContext.Provider>
    );
};

export const usePacman = () => {
    const context = useContext(PacmanContext);
    if (context === undefined) {
        throw new Error("usePacman must be used within a PacmanProvider");
    }
    return context;
};
