/**
 *  App.js - Main component 
*/

/* Imports */
import "./app.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Blog from "./components/Blog/Blog";
import Formula from "./components/Formula/Formula";
import Intro from "./components/Intro/Intro";
import 'bootstrap/dist/css/bootstrap.min.css';

/* 
* App component 
*/
function App() {

    return (

        <div className="mainBody">
            <div className="top">
                <Menu />
                <Header />
            </div>
            <Intro id="about" />
            <div id="profilesBlock">
                <h2 className="profileT">Our Profiles:</h2>
                <div className="blockProfiles">
                    <Profile name="Bex"
                        surname="Warby"
                        email="r@lobocal.academy"
                        age="31"
                        hobbies="coding! Dancing, reading, hiking."
                        quote="Smile and the world smiles back."
                    />
                    <Profile name="Fred"
                        surname="Lopes"
                        email="f@lobocal.academy"
                        age="39"
                        hobbies="Coding! dancing, living in the past. WINE!"
                        quote="Keep relaxed and enjoy."
                    />
                    <Profile name="Virginie"
                        surname="xxx"
                        email="v@lobocal.academy"
                        age="31"
                        hobbies="Coding! Travelling, motorbike."
                        quote="Positive vibes and southern accent all the way."
                    />
                    <Profile name="Jean-François"
                        surname="Martins"
                        email="jf@lobocal.academy"
                        age="23"
                        hobbies="Veteran coder. Donkeys, lots of donkeys."
                        quote="Clean up that code!"
                    />
                    <Profile name="Clément"
                        surname="XXX"
                        email="cl@lobocal.academy"
                        age="37"
                        hobbies="Coding :-)"
                        quote="You must never be scared to ask questions!"
                    />
                    <Profile name="Cyril"
                        surname="Perez"
                        email="cp@lobocal.academy"
                        age="21"
                        hobbies="Pushing limits, sarching for a challenge"
                        quote="Keep learning everyday"
                    />
                    <Profile name="Thibault"
                        surname="C"
                        email="t@lobocal.academy"
                        age="35"
                        hobbies="COFFEE. Spending all night coding, searching for the solution"
                        quote="Ah ouiiii"
                    />
                </div>
            </div>
            <div id="blogDiv">
                <h2 className="blogT">Our Blogs:</h2>
                <Blog
                    title="JavaScript Vanilla"
                    author="Bex + Fred"
                    date="24.03.21"
                >
                    Understanding algorithms and the logics behind JS
                    formed the beginning of our intense training into
                    JS Vanilla.
                    <br />
                    <br />
                    So what is JS Vanilla?
                    <br />
                    <br />
                    We'll let you know soon!
                </Blog>
                <Blog
                    title="React"
                    author="Cyril, Clément + Thibault"
                    date="12.03.21"
                >
                    <span className="rName">React</span> - what a
                    powerful and exciting Framework.
                    <br />
                    <br />
                    As opposed to similar apps Angular and Vue,
                    React allows us to manipulate highly powerful
                    applications with several pages.
                    <br />
                    <br />
                    It is the <span className="future">future</span> !
                </Blog>
                <Blog
                    title="Post Training"
                    author="Jean-François + Virginie"
                    date="24.03.21"
                >
                    So, what is he like you may be wondering?
                    <br />
                    <br />
                    Many of us will be hoping to complete
                    internships following this 10-week intense
                    course, in order to acquire the skills need to
                    begin as a Junior Developer.
                    <br />
                    <br />
                    How exciting!
                </Blog>
            </div>
            <Formula id="addYourBlog" />
            <Footer id="contact" />
        </div>
    );
}

/* Export */
export default App;