import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/setting' component={Settings} />
        </div>
      </div>
    </BrowserRouter>);

}

export default App;
