import React from 'react'
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Card from '../../Components/shared/Card/Card';
import Button from '../../Components/shared/Button/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const linkstyle={
    color: '#06b8f4',
    textDecoration:"none",
    fontWeight:"bold",
    marginLeft:"10px",
  }
  const startRegistration=()=>{
      
  }
  return (
    
  <div className={styles.cardWrapper}>
    <Card title="Welcome to FMS platform" icon="logo">
      <p className={styles.text}>
        The FMS platform is created for business stores and organizes electronic documents or captured data from paper-based documents .
      </p>

      <div>
        <Button text="Let's Go"
        onClick={startRegistration}
        ></Button>
      </div>
      <div className={styles.signinwrapper}>
        <span className={styles.signintext}>
          Have a Invite text?
        </span>
        <Link to="/login" style={linkstyle}>
          Sign In
        </Link>
      </div>
    </Card>

  </div>
  )
}

export default Home
