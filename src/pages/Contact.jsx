import React, { Component } from 'react'
import contactPict from '../assets/contactPict.png'
import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"
import X from "../assets/x.svg"

export default class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <p>Lorem ipsum dolor <img src={contactPict}></img> sit amet,<br/>consectetur adipiscing elit.</p>
                <div className='Contact_mail'>
                    <p>↪</p>
                    <p>zoemichel.createch@gmail.com</p>
                </div>
                <div className="Contact_ContactMedias_Icons">
                    <img src={Instagram} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={X} alt="" />
                </div>
                <div className='Contact_Counter'>
                    <h2 className="Contact_Hero_Counter">1010010.100011.110101001</h2>
                </div>
            </div>
        )
    }
}
