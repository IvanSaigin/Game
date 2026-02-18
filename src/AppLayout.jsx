import InformationContainer from './components/Information/InformationContainer'
import FieldContainer from './components/Field/FieldContainer'
import WinnerContainer from './components/Winner/WinnerContainer'
import './App.css';
import PropTypes, { resetWarningCache } from 'prop-types';

const AppLayout = (prop) => {

    const { win, restart, onMotion, field, ...infowin } = prop

    return (
        <>
            <div className="App">
                <InformationContainer {...infowin} />
                <FieldContainer field={field} onMotion={onMotion} />
                <button onClick={() => restart()} className='button-finish'>Начать заново</button>
            </div>
            <WinnerContainer win={win} />
        </>
    )

}

AppLayout.propTypes = {
    win: PropTypes.shape({
        X: PropTypes.number.isRequired,
        O: PropTypes.number.isRequired
    }).isRequired,
    restart: PropTypes.func.isRequired,
    onMotion: PropTypes.func.isRequired,
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPlayer: PropTypes.string.isRequired,
    isGameEnded: PropTypes.bool.isRequired,
    isDraw: PropTypes.bool.isRequired

}


export default AppLayout