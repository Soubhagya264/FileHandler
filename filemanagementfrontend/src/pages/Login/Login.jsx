import React from 'react';
import Card from '../../Components/shared/Card/Card'
import Button from '../../Components/shared/Button/Button'
import TextInput from '../../Components/shared/TextInput/TextInput'
import styles from "./Login.module.css"
import { Link } from "react-router-dom";
import { useState } from 'react'
const Login = () => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = (e)=>{
        e.preventDefault();
        if (email === '' ||  password === '') {
            setError('Please enter all required fields');
            return;
        }
        
    }
    
    return (
        <div className={styles.cardWrapper}>
            <Card title="Enter the login credential here" icon="name">
                <div className={styles.textWrapper}>
                    <TextInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
                </div>
                <div className={styles.textWrapper}>
                    <TextInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                </div>
                <div>
                 <p className={styles.buttoomPara2}>
                        {error && error}
                        </p>
                    <div className={styles.actionButtonwrap}>
                        <Button text="Login" onClick={submit}></Button>
                    </div>
                    <p className={styles.buttoomPara}>
                        Haven't SignUp yet? please <Link to="/signup" style={{textDecoration:"None"}}><span className={styles.signintext}>SignUp</span></Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}

export default Login;
