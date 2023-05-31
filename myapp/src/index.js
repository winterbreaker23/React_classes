import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Car extends React.Component{
  render(){
    return <h1>This is a Car.</h1>
  }
}
class Car2 extends React.Component{
  constructor(){
    super();
    this.state={color:"red"};
  }
  render(){
    return<h2>I am a {this.state.color} Car</h2>
  }
}
root.render(
  <React.StrictMode>
    <Car2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
