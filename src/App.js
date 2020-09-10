import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './themes.css'
// import Sidebar from './components/Sidebar'
// import Main from './components/Main'
// import { DarkManager } from './components/DarkManager'
// import { CounterManager } from './components/CounterManager'
import store from './store'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <Provider store={ store } >
      {/* <DarkManager>
          <CounterManager>
          <Sidebar />
          <Main />
          </CounterManager>
      </DarkManager> */}

      <BrowserRouter>
        <Switch>
          <Route path="/home">Home</Route>
          <Route exact path="/"><Login /></Route>
          <Route exact path="/register"><Register /></Route>

        </Switch>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
