import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freecodecamplogo from './images/logo.png'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickHandle = () =>{
    setNumClicks(numClicks + 1); 
  };

  const resetCounter = () =>{
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo' src={freecodecamplogo} alt='logo' />
      </div>
      <div className='main-container'>
        <Counter numClicks= {numClicks} />
        <Button 
          texto = 'Click'
          buttonType = {true}
          clickhandle = {clickHandle}
          />

      <Button 
          texto = 'Reset'
          buttonType = {false}
          clickhandle = {resetCounter}
          />
      </div>
    </div>
  );
}

export default App;
