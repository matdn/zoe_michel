import React, { Component } from 'react'
import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"
import X from "../assets/x.svg"
export default class Footer extends Component {
    render() {
        return (
            <div className='Footer'> 
                <div className='Footer_ContactForm'>
                    <h4>Whant to meet up? Let me your mail contact! </h4>
                    <div className="Footer_ContactForm_input">
                        <div className="box left_top"></div>
                        <div className="box left_bottom"></div>
                        <input placeholder='your email' type="email"/>
                        <div className="box right_top"></div>
                        <div className="box right_bottom"></div>
                    </div>
                </div>
                <div className='Footer_ContactMedias'>
                    <h4>Available for projects</h4>
                    <div className="Footer_ContactMedias_Icons">
                        <img src={Instagram} alt="" />
                        <img src={Linkedin} alt="" />
                        {/* <img src={X} alt="" /> */}
                    </div>
                </div>
            </div>
        )
    }
}
