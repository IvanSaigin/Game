import React from "react"
import FieldLayout from "./FieldLayout"
import { useSelector, useDispatch } from 'react-redux'
import { setField, setIsGameEnded, setStackO, setStackX, setIsDraw, setWin, setCurrentPlayer } from "../../action";
import {
    selectCurrentPlayer,
    selectField,
    selectStackX,
    selectStackO,
    selectWin,
    selectIsGameEnded
} from '../../selectors';
const FieldContainer = () => {

    const WIN_PATTERNS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];


    const currentPlayer = useSelector(selectCurrentPlayer);
    const field = useSelector(selectField);
    const stackX = useSelector(selectStackX);
    const stackO = useSelector(selectStackO);
    const win = useSelector(selectWin);
    const isGameEnded = useSelector(selectIsGameEnded);

    const dispatch = useDispatch()

    const checkWinner = (fieldToCheck) => {

        return WIN_PATTERNS.some((value) => {

            const [a, ...rest] = value
            if (!fieldToCheck[a]) return false

            return rest.every((value) =>
                fieldToCheck[value] === fieldToCheck[a]
            )


        })
    }

    const deleteValueStack = (index, currentPlayer, newField) => {

        const isX = currentPlayer === 'X';
        const stack = isX ? stackX : stackO;
        const updatedField = [...newField];

        if (stack.length === 3) {
            const firstElem = stack[0];
            const newStack = [...stack.slice(1), index];

            if (isX) {
                dispatch(setStackX(newStack));
            } else {
                dispatch(setStackO(newStack));
            }

            updatedField[firstElem] = '';
        } else {
            const newStack = [...stack, index];

            if (isX) {
                dispatch(setStackX(newStack));
            } else {
                dispatch(setStackO(newStack));
            }
        }

        return updatedField;
    };

    const onMotion = (index) => {

        if (field[index] || isGameEnded) return;

        let newField = [...field];
        newField[index] = currentPlayer;

        newField = deleteValueStack(index, currentPlayer, newField);

        dispatch(setField(newField));

        if (checkWinner(newField)) {
            dispatch(setIsGameEnded(true));
            const newWin = {
                X: currentPlayer === 'X' ? win.X + 1 : win.X,
                O: currentPlayer === 'O' ? win.O + 1 : win.O
            }

            dispatch(setWin(newWin));
            return;
        }

        const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
        dispatch(setCurrentPlayer(nextPlayer));
    };


    return <FieldLayout field={field} onMotion={onMotion} currentPlayer={currentPlayer} />
}

export default FieldContainer