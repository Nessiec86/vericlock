import React, {Component} from 'react';
import { Button } from 'react-bootstrap';


class ClockButtons extends Component {
  
    state = {
        props: '',
    }

   componentDidMount= () => {
        this.setState({
            props: this.props,
        });
   }
    render () {  
      const {text, start} = this.props.data
      return (
        <div>
            <Button variant="primary" onClick={() => this.handleSubmit(text)}>Validar</Button>
            { start === 0 ?
                <Button variant="primary" onClick={() => this.handleWork(text)}>Empezar a trabajar</Button>
            :
                <Button variant="primary" onClick={() => this.handleWork(text)}>Dejar de trabajar</Button>
            }
        </div>  
        );  
    }
  }
  
  
  
  export default ClockButtons;