import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  debugger
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
          <Route path='/profile' render={() => <Profile store={props.store} />} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/setting' component={Settings} />
        </div>
      </div>
    </BrowserRouter>);

}

export default App;
