import { ACTION_TYPES } from "./action";

const initialState = {
    win: { X: 0, O: 0 },
    stackX: [],
    stackO: [],
    field: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    isGameEnded: false,
    isDraw: false
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.SET_FIELD:
            return { ...state, field: payload };

        case ACTION_TYPES.SET_STACK_X:
            return { ...state, stackX: payload };

        case ACTION_TYPES.SET_STACK_O:
            return { ...state, stackO: payload };

        case ACTION_TYPES.SET_CURRENT_PLAYER:
            return { ...state, currentPlayer: payload };

        case ACTION_TYPES.SET_IS_GAME_ENDED:
            return { ...state, isGameEnded: payload };

        case ACTION_TYPES.SET_WIN:
            return { ...state, win: payload };

        case ACTION_TYPES.SET_IS_DRAW:
            return { ...state, isDraw: payload };

        case ACTION_TYPES.RESET_GAME:
            return { ...initialState };

        default:
            return state;
    }
};