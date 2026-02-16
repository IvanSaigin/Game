import React from "react";
import './Information.css'


const InformationLayout = ({ massage, player, currentPlayer, isDraw }) => {

    return <span className="step-gamer">
        {massage}
        {!isDraw && < span className={`${player}`}>
            {currentPlayer}
        </span>
        }
    </span >

}

export default InformationLayout