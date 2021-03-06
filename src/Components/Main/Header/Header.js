import React, { useState } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import SchoolIcon from '@material-ui/icons/School';
import LoginAndRegister from '../LoginAndRegister/LoginAndRegister';

function Header() {
    const [modalShown, setModalShown] = useState(false);

    modalShown ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    return (
        <React.Fragment>
            {modalShown ? <LoginAndRegister setModalShown={setModalShown}/> : null }
            <div className="header">
                <div className="header__logo">
                    <SchoolIcon></SchoolIcon>
                </div>
                <div className="header__buttons">
                    <div className="header__button">
                        <Button onClick={() => setModalShown(!modalShown)}>
                            Login
                        </Button>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;
