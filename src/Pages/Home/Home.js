import React from 'react';
import Header from '../../Components/Main/Header/Header';
import './Home.css';
function Home({ setloginModalVisible, loginModalVisible }) {
    return (
        <div>
            <Header
                setloginModalVisible={setloginModalVisible}
                loginModalVisible={loginModalVisible}
            />

            <div className="home">
                <img className="home__img" src="https://www.capturehighered.com/wp-content/uploads/2017/11/AdobeStock_76029922-720x360.jpeg"></img>
                <input
                    className="home__search"
                    placeholder="Search college, major, or question "
                    type="text"
                ></input>
            </div>
        </div>
    );
}

export default Home;
