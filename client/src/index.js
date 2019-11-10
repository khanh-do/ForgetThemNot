import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './Register'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './Components/NavBar'
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <NavBar />  
        <div>
            <Route exact path="/" component={App} />
            <Route path="/register" component={Register}/>
        </div>
    </Router>

)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
