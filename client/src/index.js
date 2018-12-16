import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function refreshInterval(){
	window.location.reload();
}

setInterval(refreshInterval, 40000);

var sec = 40;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
  document.getElementById("seconds").innerHTML=pad(--sec%60);
  document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
