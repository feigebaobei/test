import logo from './logo.svg';
import './App.css';
import FancyButton from './components/FancyButton';
import First from './components/First';
import LogComp from './components/Hoc';
import { useEffect, useState } from 'react';


function App() {
  let [state, setState] = useState('str')
  let [cnState, setCnState] = useState('str')
  // let timeId = null
  useEffect(() => {
    let timeId = setInterval(() => {
      // console.log('str')
      // setState('str' + Math.floor(Math.random() * 10))
      // setCnState('str' + Math.floor(Math.random() * 10))
    }, 800)
    return () => {
      timeId && clearInterval(timeId)
    }
  }, [])
  let C = LogComp(FancyButton)
  return (
    <div className="App">
      {/* <C cn={cnState}>{state}</C> */}
      <C cn={cnState}>state</C>
      <First />
    </div>
  );
}

export default App;
