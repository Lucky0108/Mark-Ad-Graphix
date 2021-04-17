import React from 'react';
import './ClientWrap.css';

/**
* @author
* @function ClientImageWrap
**/

const ClientImageWrap = ({ img1, img2, img3, img4, alt1, alt2, alt3, alt4 }) => {
    return (
        <>
            <div className="d-flex client-img-wrap">
                <div className={img1 ? "client-img-div" : null }>
                    <div className="clearfix">
                        <img src={img1} className={img1 ? "client-img" : null} alt={alt1} />
                    </div>
                </div>
                <div className={img2 ? "client-img-div" : null }>
                    <div className="clearfix">
                        <img src={img2} className={img2 ? "client-img" : null} alt={alt2} />
                    </div>
                </div>
                <div className={img3 ? "client-img-div" : null }>
                    <div className="clearfix">
                        <img src={img3} className={img3 ? "client-img" : null} alt={alt3} />
                    </div>
                </div>
                <div className={img4 ? "client-img-div" : null }>
                    <div className="clearfix">
                        <img src={img4} className={img4 ? "client-img" : null} alt={alt4} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default ClientImageWrap