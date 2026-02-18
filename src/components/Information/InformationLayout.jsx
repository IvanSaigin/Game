import React from "react";
import './Information.css'
import PropTypes from 'prop-types';

const InformationLayout = ({ massage, player, currentPlayer, isDraw }) => {

    return <span className="step-gamer">
        {massage}
        {!isDraw && < span className={`${player}`}>
            {currentPlayer}
        </span>
        }
    </span >

}

InformationLayout.propType = {
    currentPlayer: PropTypes.string.isRequired,
    isDraw: PropTypes.bool.isRequired,
    player: PropTypes.string.isRequired,
    massage: PropTypes.string.isRequired

}

export default InformationLayout