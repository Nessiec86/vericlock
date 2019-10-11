import React, {Component} from 'react';
import ClockSign from './ClockSign';
import Nav from '../Componentes/Nav';
import NewClock from '../Componentes/NewClock';

class Clock extends Component {
  
  state= {
    token: '',
    request: [],
    keyword:'',
    userid:0,
  }

  render () {  
  
    return (
      <div className='backgr'>
        <Nav/>
        <div className="contain">
          <header className='App-header'>
            <h2>REGISTRO HORARIO</h2>
          </header>
            <NewClock/>
            <ClockSign props={this.state}/>
          </div>
      </div>
    );
  }
}

export default Clock;