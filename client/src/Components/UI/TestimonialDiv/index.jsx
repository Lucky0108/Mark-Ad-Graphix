import React from 'react'
import './TestimonialDiv.css'


/**
* @author
* @function TestimonialDiv
**/

const TestimonialDiv = (props) => {
    return (
        <>
                <div className="testimonial-div">
                    <img src={props.img} alt={props.name} />
                    <p className="quote">{props.quote}</p>
                    <div className="info">
                        <h5>{props.name}</h5>
                        <p>{props.company} </p>
                    </div>
                </div>
        </>
    )
}


export default TestimonialDiv