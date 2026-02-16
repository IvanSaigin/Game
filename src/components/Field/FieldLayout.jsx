import React from "react";
import './Field.css'


const FieldLayout = ({ field, onMotion }) => {


    return (
        <div className='wrapper-grid'>
            <div className="grid-container">
                {field.map((value, index) => {
                    return <div key={index} onClick={() => onMotion(index)} className="grid-item">{value}</div>
                })}
            </div>

        </div>
    )
}

export default FieldLayout