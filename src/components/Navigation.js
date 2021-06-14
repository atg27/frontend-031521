import React from 'react'
import {NavLink} from 'react-router-dom'

const link ={
    width: '100px',
    padding: "15px",
    margin: "20px 20px 20px",
    color: "Red",
    textDecoration: "none"
}

const Navigation = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <NavLink 
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: "black"
                }}
            >Home</NavLink>
            
            <NavLink 
                to="/authors"
                exact
                style={link}
                activeStyle={{
                    background: "black"
                }}
            >Authors</NavLink>
            
    
        </div>
    )
}


export default Navigation
