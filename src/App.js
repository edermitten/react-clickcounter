import './App.css';
import Button from './components/button';
import freecodecamplogo from './images/logo.png'

function App() {
  const clickHandle = () =>{
    console.log('Click');
  }

  const resetCounter = () =>{
    console.log('Reset');
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo' src={freecodecamplogo} alt='logo' />
      </div>
      <div className='main-container'>
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
