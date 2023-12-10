import React, { Component } from 'react'

export default class Work extends Component {
render() {
    return (
    <div className='Work'>
        <div className="Line"></div>
        <div className="Work_Hero">
            <div className="Work_Hero_Pict"></div>
            <p>Personal Projects</p>
        </div>
        <div className="About_Pres">
            <h3>Lorem ipsum dolor sit amet, consectetur <span className='color'>adipiscing elit</span>, sed do eiusmod tempor incididunt ut 
                labore et <span className='underline'>dolore magna</span> aliqua.</h3>
        </div>
    </div>
    )
}
}
