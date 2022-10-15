import React from 'react';
import Card from '../../Components/shared/Card/Card'
import Button from '../../Components/shared/Button/Button'
import TextInput from '../../Components/shared/TextInput/TextInput'
import styles from "./Signup.module.css"
import { Link } from 'react-router-dom';
import { useState } from 'react'
const  Signup = () => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

   const submit= (e)=>{
    e.preventDefault();
    if (email === '' || username === '' || password === '' || confirmPassword === '') {
        setError('Please enter all required fields');
        return;
    
    }
    if (password !==confirmPassword ){
        setError('password and confirm password must match');
        return;
    }
    console.log("submited");



   }

    return (
        <div className={styles.cardWrapper}>
            <Card title="Enter the login credential here" icon="name">
                <div className={styles.textWrapper}>
                    <TextInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
                </div>
                <div className={styles.textWrapper}>
                    <TextInput value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username here" />
                </div>
                <div className={styles.textWrapper}>
                    <TextInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                </div>
                <div className={styles.textWrapper}>
                    <TextInput value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} type="password" placeholder="Enter Confirm Password" />
                </div>
                <div>
                <p className={styles.buttoomPara2}>
                       {error && error}
                    </p>
                 
                    <div className={styles.actionButtonwrap}>
                        <Button text="SignUp" onClick={submit}></Button>
                    </div>
                    <p className={styles.buttoomPara}>
                        Already SignUp? please <Link to="/login" style={{textDecoration:"None"}}><span className={styles.signuptext}>Login</span></Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}

export default Signup;
