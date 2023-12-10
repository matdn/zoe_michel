import React, { Component } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class Home extends Component {

    componentDidMount() {
        this.initAnimation();
        this.initPictAnimation();
        this.initProjectsAnimation();
        
    }

    initAnimation() {
        gsap.to(".Home_Hero_Counter", {
            x: 200,
            scrollTrigger: {
                trigger: ".Home_Hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });
    }

    initPictAnimation() {
        gsap.to(".Home_Hero_Pict", {
            width: "60%",
            delay: 0.25,
            duration: 2,
            ease: "power3.out"
        });
    }

    initProjectsAnimation() {
        gsap.utils.toArray('.Home_Project').forEach((project, i) => {
            const pict = project.querySelector('.Home_Project_Pict');
            const title = project.querySelector('h4'); 

            gsap.set(title, { opacity: 0, y: 20 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: project,
                    start: "top center+=100", 
                    end: "bottom center",
                    toggleActions: 'play none none reverse',
                }
            });

            tl.fromTo(pict,
                { width: 0 },
                {
                    width: '25vw',
                    duration: 1,
                    delay: i * 0.2 
                }
            ).to(title,
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 1 + (i * 0.2) 
                },
                "-=0.5" 
            );
        });
    }

    render() {
        return (
            <div className='Home'>
                <div className="Line"></div>
                <div className="Home_Hero">
                    <div className="Home_Hero_Pict"></div>
                    <h2 className="Home_Hero_Counter">1010010.100011.110101001</h2>
                </div>
                <div className="Home_Pres">
                    <h3>Hi, my name is <span>Zoé Michel</span> - and I'm an aspiring Creative Technologist.</h3>
                </div>
                <div className="Home_Projects">
                    <div className="Home_Project">
                        <div className='Home_Project_Pict Home_Project_Pict1'></div>
                        <h4>Creative Technology</h4>
                    </div>
                    <div className="Home_Project">
                        <div className='Home_Project_Pict Home_Project_Pict2'></div>
                        <h4>Personal Projects</h4>
                    </div>
                    <div className="Home_Project">
                        <div className='Home_Project_Pict Home_Project_Pict3'></div>
                        <h4>Developpement web</h4>
                    </div>
                </div>
            </div>
        )
    }
}
