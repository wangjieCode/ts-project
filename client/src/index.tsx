import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const result = MovieService.add({
// 	name: "wangjie",
// 	types: ["戏剧","王杰"],
// 	timeLong: 120,
// 	isHot: false,
// 	isClassic:false,
// 	isComing: false,
// 	areas: ["北京","上海"]
// })

// console.log(result)