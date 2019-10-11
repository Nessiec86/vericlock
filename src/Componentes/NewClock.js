import React, {Component} from 'react';


class NewClock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
  
    static pad(num, digit) {
        let zero = '';
        for (let i = 0; i < digit; ++i) zero += '0';
        return (zero+num).slice(-digit);
    }
    
    tick() { this.setState({ date: new Date() }); }
    
    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() { 
        clearInterval(this.timer); 
    }

    render() {

    let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    let date = this.state.date;
    let h = NewClock.pad(date.getHours(), 2);
		let m = NewClock.pad(date.getMinutes(), 2);
		let s = NewClock.pad(date.getSeconds(), 2);
    let d = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    return (
      <div className='newclock'>
        <p id="date">{d}</p>
        <hr/>
        <h3 id="hours">{h}:</h3>
        <h3 id="minutes">{m}:</h3>
        <h3 id="seconds">{s}</h3>
      </div>
    );
  }
}

export default NewClock;