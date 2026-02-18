import React from "react";
import './Winner.css'
import PropTypes from 'prop-types';

const WinnerLayout = ({ win }) => {

    return (
        <div className='wrapper-win'>
            <span>Победы:</span>
            <span>X - {win.X}</span>
            <span>О - {win.O}</span>
        </div>
    )
}

WinnerLayout.propTypes = {
    win: PropTypes.shape({
        X: PropTypes.number.isRequired,
        O: PropTypes.number.isRequired
    }).isRequired,
}

export default WinnerLayout