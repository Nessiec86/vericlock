import React, { Component } from 'react';
import user from '../lib/api-service';
// import ClockButtons from '../Components/ClockButtons';
import { Button } from 'react-bootstrap';

class Clocksign extends Component {

    state = {
        text: '',
        date: '',
        data: {
            data: {
                id:'',
                name: '',
                start: '',
            },
        },
        isLoading: true,
        status: "loading",
        working:'',
        verify: false
    }
    
    handleSubmit = (event) => {
        if (this.state.text.length === 9) {
        user.read (event)
            .then((data) => { 
                if (data.data.id > 0) {
                    this.setState({
                        data,
                    });
                }
            })
            .catch(error => {
                this.setState({
                    status: "error",
                    isLoading: false
                });
            });
        } else {

        }
    };
    
    handleWork = (event) => {
        user.change (event)
        .then((working) => {
            this.setState({
                working,
                date: new Date().toString(),
                verify: true,
            });
            this.handleSubmit(event)
            setTimeout(() => {
                this.setState({
                    data: {
                        data: {
                            id:'',
                            name: '',
                            start: '',
                        },
                    },
                })
            }, 50);
            setTimeout(() => {
                this.setState({
                    verify: false,
                    text: '',
                    
                })
            }, 2500);
        })
        .catch(error => {
            this.setState({
                status: "error",
                isLoading: false
            });
        });
    };
    
    
    handleSubmit2 = () => {
        user.tokenGet(undefined)
        
    };
    
   
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        if (value.length < 9){
            this.setState({
                data: {
                    data: {
                        id:'',
                        name: '',
                        start: '',
                    },
                },
            })
        }
    };

    render() {
        let time = 0
        const { text, verify } = this.state
        const { name, start } = this.state.data.data
        const dateObj = new Date(start * 1000); 
        const utcString = dateObj.toString(); 
        time = utcString.slice(16, 24); 
        console.log(this.state.data.data)

        return (
            <div className='clock-sign'>
                <input
                    placeholder="DNI"
                    onChange={this.handleChange}
                    name="text"
                    value={text}
                    style={{margin:'0 0 1rem 0'}}
                />
                <p style={{margin:'1rem 0'}}>{name}</p>
                {start > 0 ?
                    <p>Hora de Entrada: {time}</p>
                :
                    <p style={{margin:'1.3rem 0'}}></p>
                }
                <Button variant="success"className='val' onClick={() => this.handleSubmit(text)}>VALIDAR</Button>
                <div style={{position: 'absolute', alignSelf: 'center', margin: '1rem 0'}}>
                    { verify === true ?
                        <i className="far fa-thumbs-up" style={{fontSize: '5rem', color: '#ac451d'}}></i>
                    :
                        <div>
                        </div>
                    }
                </div>
                { name === '' || text.length < 9 ?
                    <div>
                    </div>
                    : 
                    <div style={{display:'flex', justifyContent:'center'}}>
                        {start === 0 ?
                            <Button variant="success" className='work' onClick={() => this.handleWork(text)}>EMPEZAR A TRABAJAR</Button>
                        :
                            <Button variant="danger" className='work' onClick={() => this.handleWork(text)}>DEJAR DE TRABAJAR</Button>
                        }
                    </div>
                }
            </div>
        );
    }
};

  
export default Clocksign;