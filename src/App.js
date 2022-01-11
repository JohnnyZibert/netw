import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (<div>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <span className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store}/>}/>

                    <Route path='/profile'
                           render={() => <Profile store={props.store}/>}/>
                </span>
            </div>
        </div>
    )
}

export default App;