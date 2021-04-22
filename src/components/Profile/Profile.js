/**
* components/Profile/Profile.js - Profile component 
*/

/* Imports */
import "./profile.css";
import { useState } from "react";

/**
* Profile component 
*/

function Profile(props) {

    const [name, setName] = useState(" ");
    const [surname, setSurname] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [age, setAge] = useState(0);
    const [hobbies, setHobbies] = useState(" ");
    const [quote, setQuote] = useState(" ");

    function setProfile(e) {
        setName(e.target.value);
        setSurname(e.target.value);
        setEmail(e.target.value);
        setAge(e.target.value);
        setHobbies(e.target.value);
        setQuote(e.target.value);
        console.log(name + " " + surname, email, age, "likes: " + hobbies)
        console.log("Quote: " + quote)
    }

    return (

        <main className="profile">

            {/* Profile Info */}

            <table
                className="inputProfile"
                onChange={setProfile}>

                {/* Title - Name and Surname */}
                <thead>
                    <tr>
                        <th colspan="2">{props.name} {props.surname} - About Me</th>
                    </tr>
                </thead>

                {/* Personal Data */}
                <tbody>
                    <tr className="email">
                        <td className="tEmail">Email:</td>
                        <td className="resultProfile">{props.email}</td>
                    </tr>
                    <tr className="age">
                        <td className="tAge">Age:</td>
                        <td className="resultProfile">{props.age}</td>
                    </tr>
                    <tr className="hobbies">
                        <td className="tHobbies">Hobbies:</td>
                        <td className="resultProfile">{props.hobbies}</td>
                    </tr>
                    <tr className="quote">
                        <td className="tQuote">Quote:</td>
                        <td className="resultProfile">{props.quote}</td>
                    </tr>
                </tbody>

            </table>

        </main>
    );
}

/* Export */
export default Profile;