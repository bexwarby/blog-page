/**
* components/Menu/Menu.js - Menu component 
*/

/* Imports */
import "./menu.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';

/*
* Menu component 
*/
function Menu() {
    return (
        <div className="navBar fixed-top">
            <nav className="sticky-top navbar navbar-expand-lg">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <AnchorLink href='#about' className="nav-link">About us</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink href='#profilesBlock' className="nav-link">Profiles</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink href='#blogDiv' className="nav-link">Blog</AnchorLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;