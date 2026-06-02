import React from "react";
import './Field.css'
import PropTypes from 'prop-types';

const FieldLayout = ({ field, onMotion, currentPlayer }) => {

    console.log(currentPlayer)
    return (
        <div className='wrapper-grid'>
            <div className="grid-container">
                {field.map((value, index) => {
                    return <div key={index} onClick={() => onMotion(index)} className={`grid-item ${value === '' ? '' : value === 'X' ? 'player-x' : 'player-o'}`}>{value}</div>
                })}
            </div>

        </div >
    )
}

// 
FieldLayout.propTypes = {
    onMotion: PropTypes.func.isRequired,
    field: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default FieldLayout