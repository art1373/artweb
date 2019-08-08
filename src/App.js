import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/alipic/Logo';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Posts from './components/Posts/Posts';
import CV from './components/CV/CV';


const screenWidth = window.innerWidth;
var width = (screenWidth <= 360) ? 86 : 50;
var perWidth = {width: width + '%'};


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      pages: <Posts />,
    };
  }
  onRouteChange = (route) =>{
    var pages = '';
    switch(route){
      case 0: pages = <Posts />; break;
      case 1: pages = <CV />; break;
      // case 2: pages = <ContactMe />; break;
      default: pages = <Posts />;
    };
    this.setState({pages: pages});
  }

  render() {
   return (
          <div className="App" style={perWidth}>
            <Navigation />  
            <Logo />
            <Nav onRouteChange={this.onRouteChange} />
            {this.state.pages}
            <Footer />
          </div>
        ); 
  }
}

export default App;
