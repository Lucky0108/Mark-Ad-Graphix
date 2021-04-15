import React from 'react'
import './PageTitle.css'

/**
* @author
* @function PageTitle
**/

const PageTitle = (props) => {
    return (
        <>
            <div className="header-banner-container">
                <div className="img-overlay"></div>
                <div className="page-title-content">
                    <h1 className="page-title">{props.heading}</h1>
                </div>
            </div>
        </>
    )
}


export default PageTitle