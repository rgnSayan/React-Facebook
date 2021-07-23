import React, { Fragment } from 'react';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Widgets from './Components/Widgets'
import Login from './Components/Login'
import { useStateValue } from './Components/StateProvider'
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
