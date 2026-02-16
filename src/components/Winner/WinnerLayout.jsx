import React from "react";
import './Winner.css'


const WinnerLayout = ({ win }) => {

    return (
        <div className='wrapper-win'>
            <span>Победы:</span>
            <span>X - {win.X}</span>
            <span>О - {win.O}</span>
        </div>
    )
}

export default WinnerLayout