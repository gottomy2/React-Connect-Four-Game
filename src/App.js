import './App.css';
import Game from './components/Game';
import AddForm from "./components/AddForm";
import React from 'react';

class App extends React.Component {

    render(){
        { window.localStorage.clear()}
        return (
            <>
                <div className="App">
                    <div className="form"><AddForm/></div>
                    <div>
                        <Game/>
                    </div>
                </div>
            </>
        );
    }

}

export default App;
