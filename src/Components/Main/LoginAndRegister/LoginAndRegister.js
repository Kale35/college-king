import React, { useState } from 'react';
import './LoginAndRegister.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button, IconButton} from '@material-ui/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../../firebase';

const LoginAndRegister = ({setModalShown}) => {
    const [activeTab, setactiveTab] = useState('login');

    const closeModal = (e) => {
        e.preventDefault();
        if(document.getElementById("Modal")){
            document.getElementById("Modal").style.display = "none";
        }
        setModalShown(false);
    }
  
    return (
        <div id="Modal" className="login-register-modal" data-options="closeOnBackgroundClick:true">
            <div className="login-register-modal__wrapper">
                <div className="login-register-modal__close">
                    <IconButton onClick={(e) => closeModal(e)}>
                     <CancelIcon></CancelIcon>
                    </IconButton>
                </div>
               <div className="login-register-modal__contents">
                <div className="login-register-modal__logo">
                    {activeTab && activeTab === 'login' ? (
                        <VpnKeyIcon
                            color={
                                activeTab && activeTab === 'login'
                                    ? 'primary'
                                    : 'disabled'
                            }
                            className="iconButton"
                            style={{ fontSize: 100}}
                        />
                    ) : (
                        <PersonAddIcon
                            color={
                                activeTab && activeTab === 'register'
                                    ? 'secondary'
                                    : 'disabled'
                            }
                            style={{ fontSize: 100 }}
                            className="iconButton"
                        />
                    )}
                </div>
                <div className="login-register-modal__tabs">
                    <Button
                        color="primary"
                        size="large"
                        startIcon={<LockOpenIcon />}
                        style={{ marginRight: '15px' }}
                        onClick={() => setactiveTab('login')}
                    >
                        Login
                    </Button>
                    <Button
                        color="secondary"
                        size="large"
                        startIcon={<PersonAddIcon />}
                        onClick={() => setactiveTab('register')}
                    >
                        Register
                    </Button>
                </div>

                {activeTab && activeTab === 'login' ? (
                    <LoginWrapper setModalShown={setModalShown}/>
                ) : (
                    <RegisterWrapper setModalShown={setModalShown}/>
                )}
            </div>
            </div>
        </div>
    );
};

const LoginWrapper = ({setModalShown}) => {
     //Variables for user when they register
     const [loginEmailUsername, setLoginEmailUsername] = useState("");
     const [loginPassword, setLoginPassword] = useState("");
 
    const onLoginSubmit = (e, setModalShown) => {
        e.preventDefault();
        console.log("Submitted");
        signInWithEmailAndPassword(auth, loginEmailUsername, loginPassword);
        setModalShown(false);
    }
     
    return (
        <div className="login-register-inner-wrapper">
            <form className="login-form">
                <input type="text" className="login-register-input" id="register-password" placeholder="Username/Email" onChange={e => setLoginEmailUsername(e.target.value)}/>
                <input type="text" className="login-register-input" id="register-password-confirm" placeholder="Password"  onChange={e => setLoginPassword(e.target.value)}/>
                <a className="login-register-link" href="https://www.google.com/">Sign in with Google</a>
                <a className="login-register-link" href="https://www.google.com/">Forgot username/password?</a>

                <Button
                    onClick={(e) => onLoginSubmit(e, setModalShown)}
                    style={{ marginTop: '30px' }}
                    color="primary" type="submit">Sign In
                </Button>
            </form>
        </div>

    );
};

const RegisterWrapper = ({setModalShown}) => {

    //Variables for user when they register
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmation, setRegisterConfirmation] = useState("");
    
    const onRegisterSubmit = (e) => {
        e.preventDefault();
        
        if(registerPassword != registerConfirmation){
            alert("Passwords do not match")
        }

        else{
            console.log(registerEmail, registerUsername, registerPassword, registerConfirmation);
            const user = {
                email: registerEmail,
                username: registerUsername, 
                password: registerPassword, 
                confirm: registerConfirmation
            }

            createUserWithEmailAndPassword(auth, registerEmail, registerPassword, registerUsername)
            .catch((err) => {
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        alert(err.message);
                        break;
                    case "auth/wrong-password":
                        alert(err.message);
                        break;
                }
            })
            }

            setModalShown(false);
        }
    return (
        <div className="login-register-inner-wrapper">
            <form className="register-form" onSubmit={(e) => onRegisterSubmit(e)}>
                <input
                type="email"
                className="login-register-input" 
                id="register-email"
                placeholder="Email" 
                onChange={e => setRegisterEmail(e.target.value)} />
                
                <input
                type="text"
                className="login-register-input"
                id="register-username"
                placeholder="Username"
                onChange={e => setRegisterUsername(e.target.value)}/>
                
                <input 
                type="password"
                className="login-register-input" 
                id="register-password"
                placeholder="Password"
                onChange={e => setRegisterPassword(e.target.value)}/>
                
                <input
                 type="password" 
                 className="login-register-input" 
                 id="register-password-confirm" 
                 placeholder="Confirm password"  
                 onChange={e => setRegisterConfirmation(e.target.value)}/>
                                
                <Button
                    onClick={(e) => onRegisterSubmit(e)}
                    style={{ marginTop: '30px' }}
                    color="secondary" type="submit">Sign Up
                </Button>
            </form>
        </div>
    );
};

export default LoginAndRegister;
