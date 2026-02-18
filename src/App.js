import { use, useState } from 'react';
import AppLayout from './AppLayout'

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

function App() {

  const [currentPlayer, setCurrentPlayer] = useState('O')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [win, setWin] = useState({ X: 0, O: 0 })

  const [stackX, setStackX] = useState([])
  const [stackO, setstackO] = useState([])


  const [field, setField] = useState([
    '', '', '',
    '', '', '',
    '', '', '',
  ])

  const checkWinner = (fieldToCheck) => {

    return WIN_PATTERNS.some((value) => {

      const [a, ...rest] = value
      if (!fieldToCheck[a]) return false

      return rest.every((value) =>
        fieldToCheck[value] === fieldToCheck[a]
      )

    })
  }

  const deleteValueStack = (index, currentPlayer, newField) => {

    let updatedField = [...newField];

    if (currentPlayer === 'X') {

      if (stackX.length === 3) {
        const firstElem = stackX[0];

        setStackX(prev => [...prev.slice(1), index]);

        updatedField[firstElem] = '';

      } else {
        setStackX(prev => [...prev, index]);
      }

    } else {

      if (stackO.length === 3) {
        const firstElem = stackO[0];

        setstackO(prev => [...prev.slice(1), index]);

        updatedField[firstElem] = '';

      } else {
        setstackO(prev => [...prev, index]);
      }

    }

    return updatedField;
  };


  const onMotion = (index) => {

    if (field[index] || isGameEnded) return;

    let newField = [...field];
    newField[index] = currentPlayer;

    newField = deleteValueStack(index, currentPlayer, newField);

    setField(newField);

    if (checkWinner(newField)) {
      setIsGameEnded(true);
      setWin(prev => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + 1
      }));
      return;
    }



    setCurrentPlayer(prev => prev === 'X' ? 'O' : 'X');
  };


  const Restart = () => {
    setIsDraw(false)
    setIsGameEnded(false)
    setField(Array(9).fill(''))
    setStackX([])
    setstackO([])

  }

  return (

    <div className='wrapper-app'>
      <AppLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} field={field} onMotion={onMotion} restart={Restart} win={win} />
    </div>

  );
}

export default App;
