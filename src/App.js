import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import './App.css';
import Clock from './pages/Clock';
import NotFound from './Componentes/NotFound';
import LoadingDots from './Componentes/LoadingDots';
import Logo from './Componentes/Logo';

require('dotenv').config();

class App extends Component {
  
  state = {
    logotime: true,
    isLoading: true,
    status: "loading",
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        status: "loaded",
        isLoading: false,
      })
    }, 5000);
  };

  render () { 
   
    const { isLoading } = this.state;
    
    return (
      isLoading ? 
        <div className='App'>
          <Logo/>
          <LoadingDots/>
        </div>
        :
        <Switch>
          <Route exact path="/" component={Clock} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
    );
  }
}

export default App;