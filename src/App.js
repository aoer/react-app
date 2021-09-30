import { useState } from 'react';
//import Hello from './SayHello';
//import Tweet from './Tweet'
//import GuessTheNumber from './GuessTheNumber';
import PageHeader from './UI/PageHeader';
import PageFooter from './UI/PageFooter';
import ComponentSelection from './UI/ComponentSelection';
import ComponentDisplay from './UI/ComponentDisplay';
//import logo from './logo.svg';
//import Hangman from './Hangman/Hangman';
import './App.css'

function App() {
  const [componentNameToDisplay, SetComponentNameToDisplay] = useState('guessTheNumber');

  const UserSelected = (name) => {
    //console.log(name);
    SetComponentNameToDisplay(name);
  }
  
  return (
    <div className='App'>
      <PageHeader />
      <div className='main-content'>
        <ComponentSelection names={['guessTheNumber', 'hangman']} UserSelectedCallBack={UserSelected} />
        <ComponentDisplay name={componentNameToDisplay} />
      </div>
      <PageFooter />
    </div>
  );
}


/*
function App() {
  
  return (
    <div className='App'>
      <div className='GuessTheNumbers'>
        <GuessTheNumber />
        <GuessTheNumber min={1} max={50} />
        <GuessTheNumber min={1} max={5} />
      </div>
    </div>
  );
}
*/

/*
function App() {
  
  return (
    <div className='App'>
      <img src={logo} className="App-logo" alt="logo" />
      <div className='Tweets'>
        <Tweet name='Pure Clickbait' message='Please click me..' likesCount={5670}/>
        <Tweet name='End is near..' message='The world ends at 5pm..' likesCount={120}/>
        <Tweet name='Winter is coming' message='I am the only true king.' likesCount={67900}/>
        <Tweet name='WTF Japan' message='Oh lord...' likesCount={99}/>
      </div>
    </div>
  );
}
*/

export default App;