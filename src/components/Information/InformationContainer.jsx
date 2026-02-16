import React from "react";
import InformationLayout from "./InformationLayout";


const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {


    const massage = isDraw ? 'Ничья' : isGameEnded ? `Победил:` : `Ходит:`
    const playerClass = currentPlayer === 'X' ? 'player-x' : 'player-o'


    return <InformationLayout massage={massage} player={playerClass} currentPlayer={currentPlayer} isDraw={isDraw} />

}

export default InformationContainer