import React from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
const Nav = () => {
    const brandStyle={
        color: 'white',
        textDecoration:"none",
        fontSize: "34px",
        fontWeight: "bold",
        display:"flex",
        alignItems:"center",
        marginLeft: "20px",
        
    }
    const logoText={
        marginLeft: "6px",
        color:"black"
    }
  return (
    
    <nav className={`${styles.navbar} container`}>
        <Link style={brandStyle} to="/">
            <img src="/images/folder.png" alt="logo" width="40" height="40"/>
                <span style={logoText}>
                    FMS
                </span>       
        </Link>
        </nav>
  )
}

export default Nav
