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
                    <h3>Lorem ipsum dolor sit amet, consectetur <span className='color'>adipiscing elit</span>, sed do eiusmod tempor incididunt ut 
                        labore et <span className='underline'>dolore magna</span> aliqua.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        )
    }
}
