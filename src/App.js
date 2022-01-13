import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from "./components/Menu/Menu";
import HomePage from "./pages/homePage/HomePage";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

import "./reset.scss"
import './App.scss';


class App extends React.Component {

  state= {
    menuOpen: true
  }

  componentDidMount =() => {
      window.addEventListener("resize", this.resize);
      this.resize();
  }

  resize =() =>  {
      this.setState({menuOpen: window.innerWidth >= 900});
  }

  componentWillUnmount =() =>  {
      window.removeEventListener("resize", this.resize);
  }
  
  toggleMenu = () => {
    if (window.innerWidth <= 900) {
      this.setState({menuOpen: !this.state.menuOpen})
    }
      
  } 


  render() {
    return (
      <div className="page_container">
        <Menu  menuOpen={this.state.menuOpen} toggleMenu={() =>this.toggleMenu()}/>
        <div className="width_80" >
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App ;


