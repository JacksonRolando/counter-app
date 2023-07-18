import { useState } from 'react';
import './Incrementer';
import './App.css';
import ValueComp from './Incrementer';

function App() {
  const [countData, setCountData] = useState({})
  const [inputText, setInputText] = useState('')

  const increment = (numToIncrement, amt) => {
    countData[numToIncrement] = (countData[numToIncrement] || 0) + amt
    setCountData({ ...countData })
    // console.log("incrementing: " + numToIncrement);
    // console.log("current data: " + JSON.stringify(countData));
  }

  const addIncrementer = (event) => {
    increment(inputText, 0)
  }

  return (
    <div style={{ marginTop: "1.5rem", textAlign: 'center' }}>
      <form onSubmit={(event) => {
        event.preventDefault()
        addIncrementer()
        document.getElementById('inField').value = ''
      }
      }>
        Add Counter:<input style={{ marginLeft: '.5rem' }} id='inField' type='text' onChange={(event) => setInputText(event.target.value)} />
        <button type='submit'>Add</button>
      </form>
      <div style={{ display: "flex", justifyContent: 'center', maxWidth: "70rem", margin: 'auto', flexWrap: 'wrap', marginTop: '1rem' }}>
        {Object.keys(countData).map(key => <ValueComp key={key} label={key} countData={countData} increment={increment} />)}
      </div>
    </div>
  );
}

export default App;
