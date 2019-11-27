import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './main-copied.scss';
import App from './App';
import {LpFramework, LpFrameworkWrapper} from 'sb-lp-framework';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <LpFramework
            resourceFile={require('./languages.json')}
            funnel_name={"La Formule Francaise"}>
            <LpFrameworkWrapper Component={App}/>
        </LpFramework>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
