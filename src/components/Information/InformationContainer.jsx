import React from "react";
import InformationLayout from "./InformationLayout";
import PropTypes from 'prop-types';

const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {


    const massage = isDraw ? 'Ничья' : isGameEnded ? `Победил:` : `Ходит:`
    const playerClass = currentPlayer === 'X' ? 'player-x' : 'player-o'


    return <InformationLayout massage={massage} player={playerClass} currentPlayer={currentPlayer} isDraw={isDraw} />

}

InformationContainer.propType = {
    currentPlayer: PropTypes.string.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired
}

export default InformationContainer