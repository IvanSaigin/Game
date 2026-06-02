import React from "react";
import InformationLayout from "./InformationLayout";
import { useReduxState } from "../../ReduxMeneger";

const InformationContainer = () => {

    const { currentPlayer, isGameEnded, isDraw } = useReduxState()

    const massage = isDraw ? 'Ничья' : isGameEnded ? `Победил:` : `Ходит:`
    const playerClass = currentPlayer === 'X' ? 'player-x' : 'player-o'


    return <InformationLayout massage={massage} player={playerClass} currentPlayer={currentPlayer} isDraw={isDraw} />

}

export default InformationContainer