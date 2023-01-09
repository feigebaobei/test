// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import First from './components/First';
import { useFilter, useParams } from './hooks';
// import {} from './ct'
// import {context} fom
// import {context} from './ct'
// import MyContext from './ctx'
// import createContainer from './ctx2'
import xx from './a'
import Third from './components/Third'
import Four from './components/Four'
import Five from './components/Five'
import Six from './components/Six'
import Seven from './components/Seven'
import Eight from './components/Eight'
import Nine from './components/Nine'
import Ten from './components/Ten'
// import {useFilter, setFilter} from './hooks'

let clog = console.log

function App() {
  let [store, setStore] = useState({name: 'init'})

  // let {getFilter, setFilter} = useFilter()
  let {getParams, setParams} = useParams()
  // clog('app')
  // useEffect(() => {
  //   setFilter('a', 0)
  // }, [])
  // let [key, setKey] = useState(1)
  // let a = getFilter('a')
  // clog('a', a)
  // let setFilter()
  let {getFilter, setFilter} = useFilter()
  
  let buttonClickHandler = () => {
    // setFilter('key', 2)
    // setKey(key + 1)
    // setFilter('k', Math.floor(Math.random() * 10))
    // clog('buttonClickHandler')
    setStore({name: 'from app'})
  }

  // let {ContextProvider, ContextConsumer} = createContainer({store, setStore})
  return (
    <div className="App">
      <button onClick={buttonClickHandler}>button</button>
      {/* <MyContext.Provider value={{
        store, setStore,
        getFilter, setFilter,
        getParams, setParams
        // 'key': key,
        // setFilter,
        // getFilter,
        // getParams,
        // setParams
      }}>
        <First/>
        <Third />
        <Four />
        <Five />
        <Six />
        <Seven />
        <Eight />
        <Nine />
      </MyContext.Provider>
        <p>sdf</p> */}
        {/* <ContextProvider >
          <p>str</p>
          <Ten />
        </ContextProvider> */}
        <xx.Provider>
        <p>str</p>
          <Ten />
        </xx.Provider>
    </div>
  );
}

export default App;
