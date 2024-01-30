import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                {/* <div className="Line"></div> */}
                <nav>
                    <ul className='flex'>
                        <li className={window.location.pathname === "/" ? "active-page" : ""}>
                            <NavLink exact to="/" activeclassname="active-link">home</NavLink>
                        </li>
                        <li className={window.location.pathname === "/aboutme" ? "active-page" : ""}>
                            <NavLink exact to="/about" activeclassname="active-link">about me</NavLink>
                        </li>
                        {/* <li className={window.location.pathname === "/mywork" ? "active-page" : ""}>
                            <NavLink exact to="/mywork" activeclassname="active-link">my work</NavLink>
                        </li> */}
                    </ul>
                    <ul className='flex'>
                        <li className={window.location.pathname === "/contact" ? "active-page" : ""}>
                            <NavLink exact to="/contact" activeclassname="active-link">contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
