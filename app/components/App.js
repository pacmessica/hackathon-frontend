import React from 'react';
import Routes from '../routes';
import styles from './App.scss';
import {Link} from 'react-router-dom';


const App = () =>
    <div className={styles.container}>
        <Link to={'/'} className={styles.link}>Cases</Link>
        { Routes }
    </div>;

export default App;
