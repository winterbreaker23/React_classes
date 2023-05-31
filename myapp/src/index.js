import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car6 from './Car';
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
class Car3 extends React.Component{
  render(){
    return <h2>I am a {this.props.color} Car</h2>
  }
}

class Car4 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return<h2>I am a {this.props.model}!</h2>
  }
}
class Car5 extends React.Component{
  render(){
    return(
      <div>
        <h1>
          Who lives in my Garage
        </h1>
        <Car/>
      </div>
    );
  }
}

class Car7 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brand:"ford",
      color:"black",
      year:1964,
      model:"mustang"
    };
  }
  render(){
    return(
    <div>
      <h1>my {this.state.brand}</h1>
      <p>The color is {this.state.color}</p>
      <p>the model is {this.state.model}</p>
    </div>
    );
  }
}
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {favoritecolor:"red"};
  }
  static getDerivedStateFromProps(props, state){
    return{favoritecolor:props.favcol};
  }
  render(){
    return(
      <h1>My Favourite Color is {this.state.favoritecolor}</h1>
    );
  }
}
class Header2 extends React.Component{
  constructor(props){
    super(props);
    this.state={favoritecolor:"red"};
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({favoritecolor:"yellow"})
    }, 1000)
  }
  render(){
    return(
      <h1>My color is {this.state.favoritecolor}</h1>
    );
  }
}

class Header3 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render(){
    return(
      <div>
        <h1>My color is {this.state.favoritecolor}</h1>
        <button type="button" onclick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

class Header4 extends React.Component{

    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
      return false;
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  
}
root.render(
  <React.StrictMode>
    <Header4/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
