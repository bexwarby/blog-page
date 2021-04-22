/**
* components/Intro/Intro.js - Intro component 
*/

/* Imports */
import "./intro.css";

/*
* Header component 
*/
function Intro() {
    return (

        <div className="introBlock">

            <img
                className="imgIntro"
                alt="Bocal Academy"
                src="https://www.pierre-giraud.com/wp-content/uploads/2019/08/javascript-cours.png"
            />

            <div className="leftContent">
                <h2 className="titleMain">
                    About us
                </h2>
                <p className="description">
                    We are the <b>Bocal Academy Fullstack JavaScript </b>
                    <br />
                    <br />
                    class of <b>March-April 2021.</b>
                    <br />
                    <br />
                    Ready to take over the coding world in
                    <br />
                    <br />
                    <span class="styleSpan">style</span>    !
                </p>
            </div>

            <div className="rightContent">
                <h2 className="titleSecond">
                    The Bocal Team
                </h2>
                <img
                    className="profs"
                    alt="Bocal staff"
                    class="bStaff"
                    src="https://www.nicestartsup.com/wp-content/uploads/2020/02/57.bocalacademy.jpeg"
                />
            </div>

        </div>
    );
}

/* Export */
export default Intro;