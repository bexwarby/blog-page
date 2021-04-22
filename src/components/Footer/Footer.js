/**
* components/Footer/Footer.js - Footer component 
*/

/* Imports */
import "./footer.css";
import { useState } from "react";

/*
* Header component 
*/

function Footer() {

    const [time, setTime] = useState(0);

    setTimeout(function () {
        setTime(time + 1);
    }, 1000);

    return (
        <footer className="footer">
            <p>
                Time spent on the page:
                {" " + Math.trunc(time / 3600)}:{Math.trunc(time / 60)}:{time % 60}
            </p>
            <p>
                &copy; <b>Bex's Blog</b> - Thanks for reading!
            </p>
        </footer>
    );
}

/* Export */
export default Footer;