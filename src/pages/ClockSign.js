import React, { Component } from 'react';
import user from '../lib/api-service';
import { Button } from 'react-bootstrap';
import icon from '../icon/thumbs-up-regular.svg';

class Clocksign extends Component {

    state = {
        text: '',
        date: '',
        data: {
            data: {
                id:'',
                activo: '',
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
        }
    };
    
    handleWork = (event) => {
        user.change (event)
        .then((working) => {
            this.setState({
                working,
                date: new Date().toString(),
                verify: true,
                text: '',
            });
            this.handleSubmit(event)
            //setTimeout(() => {
            this.setState({
                data: {
                    data: {
                        id:'',
                        activo: '',
                        name: '',
                        start: '',
                    },
                },
            })
            //}, 50);
            setTimeout(() => {
                this.setState({
                    verify: false,
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
   
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        if (value.length < 9){
            this.setState({
                data: {
                    data: {
                        id:'',
                        activo: '',
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
        const { name, start, activo } = this.state.data.data
        const dateObj = new Date(start * 1000); 
        const utcString = dateObj.toString(); 
        time = utcString.slice(16, 24); 
        
        const val = {
            borderRadius:'45px',
            padding:'24px 11px',
            margin: '25% auto 60% auto',
            width: 'min-content',
        }
        const work = {
            margin: '15% 0 55% 0',
            width: 'min-content',
            borderRadius:'45px',
            padding:'9px 15px',
        }
        const undo = {
            margin: '15% 0 55% 0',
            width: 'min-content',
            borderRadius:'45px',
            padding:'21px 6px',
        }

        return (
            <div className='clock-sign'>
                <input
                    placeholder="DNI"
                    onChange={this.handleChange}
                    name="text"
                    value={text}
                    className='clock_input'
                    //style={{margin:'2rem 0'}}
                    type="text"
                />
                <p style={{margin:'1rem auto'}}>{name}</p>
                {start > 0 && activo === 0 ?
                    <p style={{margin: '0 auto'}}> Hora de Entrada: {time}</p>
                :
                    <p style={{margin:'1.3rem 0'}}></p>
                }
                <div style={{alignSelf: 'center'}}>
                    { verify === true ?
                        <img src={icon} style={{width: '30%', position: 'absolute', margin: '-20% 0 0 -13%'}} alt='Okey'/>
                        :
                        <div>
                        </div>
                    }
                </div>
                { name === '' || text.length < 9 ?
                    <Button variant="success" className='val' style={val} onClick={() => this.handleSubmit(text)}>VALIDAR</Button>
                : 
                    <div style={{display:'flex', justifyContent:'center'}}>
                        { activo === 1 ?
                            <Button variant="info" className='work' style={undo}>USUARIO DESACTIVADO</Button>
                        :
                        <div>
                            { start === 0 ?
                            <Button variant="success" className='work' style={work} onClick={() => this.handleWork(text)}>EMPEZAR A TRABAJAR</Button>
                            :
                            <Button variant="danger" className='work' style={work} onClick={() => this.handleWork(text)}>DEJAR DE TRABAJAR</Button>
                            }
                        </div>
                        }
                    </div>
                    }
                    
            </div>
        );
    }
};

  
export default Clocksign;