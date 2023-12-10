import React, { useState, useEffect } from 'react';


const Transition = ({ location, onAnimationMiddle, onAnimationEnd }) => {
    const [isAnimating, setAnimating] = useState(false);

    useEffect(() => {
    setAnimating(true);
    
    const middleTimer = setTimeout(() => {
        onAnimationMiddle(); 
    }, 500); 

    const endTimer = setTimeout(() => {
        setAnimating(false);
        onAnimationEnd(); 
    }, 1000); 
    return () => {
        clearTimeout(middleTimer);
        clearTimeout(endTimer);
    };
    }, [location, onAnimationMiddle, onAnimationEnd]);

    return isAnimating ? <div className="page-transition"></div> : null;
};


export default Transition;