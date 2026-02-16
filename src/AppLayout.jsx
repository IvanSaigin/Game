import InformationContainer from './components/Information/InformationContainer'
import FieldContainer from './components/Field/FieldContainer'
import WinnerContainer from './components/Winner/WinnerContainer'
import './App.css';


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

export default AppLayout