import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import './styles/styles.css';

export { default as Projects } from './assets/Projects'
export { default as Also } from './assets/Also'
export { default as Contact } from './assets/Contact'
export { default as Education } from './assets/Education'
export { default as Hello } from './assets/Hello'
export { default as Technologies } from './assets/Technologies'


ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
