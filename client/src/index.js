import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function startTimer(duration, display){
	var timer = duration, seconds;
	setInterval(function(){
		seconds = parseInt(timer % 60, 10);

		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = seconds;

		if(--timer < 0){
			timer = duration;
		}
	}, 1000);
}

window.onload = function(){
	var display = document.querySelector('#time');
	startTimer(10, display);
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
