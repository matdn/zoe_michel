import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='About'>
                <div className="Line"></div>
                <div className="About_Hero">
                    <div className="About_Hero_Pict"></div>
                    <p>zoé michel</p>
                </div>
                <div className="About_Pres">
                    <h3>As a <span className='color'>Creative Technologist master's student</span> at the <span className='underline'>De Vinci Innovation Center</span>, my work focuses on the themes of Art, Humanity and Technology. 
                        Through the acquisition of multiple design and manufacturing skills, my dream would be to work in the <span className='color'>fashion industry</span>, and offer to apply my expertise within a role that fosters innovation and pushes the limits of conventional boundaries. 
                    </h3>   
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
            </div>
        )
    }
}
