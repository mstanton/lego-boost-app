import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SplashScreen from './components/splashScreen/SplashScreen';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SplashScreen />, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
