import React from 'react';
import {createRoot} from 'react-dom/client';

import './styles/index.css';
// import App components
import App from './components/app/App';

const container = document.getElementById( 'app' )
const root = createRoot(container) 

// compile App component in `#app` HTML element
root.render(<App />)