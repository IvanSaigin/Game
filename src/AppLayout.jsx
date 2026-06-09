import InformationContainer from './components/Information/InformationContainer'
import FieldContainer from './components/Field/FieldContainer'
import WinnerContainer from './components/Winner/WinnerContainer'
import { useDispatch } from 'react-redux';
import './App.css';
import { resetGame } from './action';

const AppLayout = () => {

    const dispatch = useDispatch()
    const restart = () => {
        dispatch(resetGame())
    }
    return (
        <>
            <div className="App">
                <InformationContainer />
                <FieldContainer />
                <button onClick={() => restart()} className='button-finish'>Начать заново</button>
            </div>
            <WinnerContainer />
        </>
    )

}

export default AppLayout