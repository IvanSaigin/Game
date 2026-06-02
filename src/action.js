export const ACTION_TYPES = {
    SET_FIELD: 'SET_FIELD',
    SET_STACK_X: 'SET_STACK_X',
    SET_STACK_O: 'SET_STACK_O',
    SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER',
    SET_IS_GAME_ENDED: 'SET_IS_GAME_ENDED',
    SET_WIN: 'SET_WIN',
    SET_IS_DRAW: 'SET_IS_DRAW',
    RESET_GAME: 'RESET_GAME'
};

export const setField = (payload) => ({
    type: ACTION_TYPES.SET_FIELD,
    payload
});

export const setStackX = (payload) => ({
    type: ACTION_TYPES.SET_STACK_X,
    payload
});

export const setStackO = (payload) => ({
    type: ACTION_TYPES.SET_STACK_O,
    payload
});

export const setCurrentPlayer = (payload) => ({
    type: ACTION_TYPES.SET_CURRENT_PLAYER,
    payload
});

export const setIsGameEnded = (payload) => ({
    type: ACTION_TYPES.SET_IS_GAME_ENDED,
    payload
});

export const setWin = (payload) => ({
    type: ACTION_TYPES.SET_WIN,
    payload
});

export const setIsDraw = (payload) => ({
    type: ACTION_TYPES.SET_IS_DRAW,
    payload
});

export const resetGame = () => ({
    type: ACTION_TYPES.RESET_GAME
});