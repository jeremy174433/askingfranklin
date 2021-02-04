import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from '../src/pages/components/elements/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.scss';
import './i18n';
import App from './App';

ReactDOM.render(
    <Suspense fallback={(<Loader/>)}>
        <App/>
    </Suspense>
    , document.getElementById('root')
);