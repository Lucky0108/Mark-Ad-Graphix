import React from 'react';
import './ClientWrap.css';

/**
* @author
* @function ClientImageWrap
**/

const ClientImageWrap = (props) => {
    return (
        <>
            <div className="d-flex client-img-wrap">
                <div className="client-img-div">
                    <div className="clearfix">
                        <img src={props.img1} className="client-img" alt={props.alt1} />
                    </div>
                </div>
                <div className="client-img-div">
                    <div className="clearfix">
                        <img src={props.img2} className="client-img" alt={props.alt2} />
                    </div>
                </div>
                <div className="client-img-div">
                    <div className="clearfix">
                        <img src={props.img3} className="client-img" alt={props.alt3} />
                    </div>
                </div>
                <div className="client-img-div">
                    <div className="clearfix">
                        <img src={props.img4} className="client-img" alt={props.alt4} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default ClientImageWrap