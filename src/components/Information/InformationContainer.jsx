import React from "react";
import { useSelector } from 'react-redux'
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors'
import InformationLayout from "./InformationLayout";

const InformationContainer = () => {

    const currentPlayer = useSelector(selectCurrentPlayer)
    const isGameEnded = useSelector(selectIsGameEnded)
    const isDraw = useSelector(selectIsDraw)

    const massage = isDraw ? 'Ничья' : isGameEnded ? `Победил:` : `Ходит:`
    const playerClass = currentPlayer === 'X' ? 'player-x' : 'player-o'


    return <InformationLayout massage={massage} player={playerClass} currentPlayer={currentPlayer} isDraw={isDraw} />

}

export default InformationContainer