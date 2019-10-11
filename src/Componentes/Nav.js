import React, { Component } from "react";
import logoveri from '../img/layout_set_logo.png';
    import { Button } from 'react-bootstrap';

class Nav extends Component {
    
    handleReturn = () => {
        window.history.back()
    }

    render() {

        return (
            <nav className='nav'>
                <div>
                    <img src={logoveri} alt="veri" style={{width: '5rem'}}></img>
                </div>
                {/* <div>
                <Link to="/Private/" >
                    <img src="../Images/mysmar-t@3x.png" alt="my smar-t" style={{width: '3rem'}}></img>  
                </Link>
                </div>
                <div>
                <Link to="/Profile/" >
                    <img src="../Images/account@3x.png" alt="my smar-t" style={{width: '3rem'}}></img>  
                </Link>
                </div> */}
                <div className='link'> 
                    <span className='link-icon'>
                        <Button className='fas fa-backward' style={{backgroundColor:'transparent', border:'transparent'}}onClick={()=> this.handleReturn()}/>
                    </span>
                </div>
            </nav>
        );
    }
}

export default Nav;