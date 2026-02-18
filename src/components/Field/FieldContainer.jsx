import React from "react"
import FieldLayout from "./FieldLayout"
import PropTypes from 'prop-types';


const FieldContainer = ({ field, onMotion }) => {



    return <FieldLayout field={field} onMotion={onMotion} />
}

FieldContainer.propTypes = {
    onMotion: PropTypes.func.isRequired,
    field: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default FieldContainer