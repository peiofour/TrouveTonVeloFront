import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';

ReactDOM.render(<Header/>, document.getElementById('root'));
registerServiceWorker();
