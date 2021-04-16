import React from 'react'
import { Container } from 'react-bootstrap'

// Components Import
import PageTitle from '../../Components/UI/PageTitle';
import ClientImageWrap from '../../Components/UI/ClientImageWrap';

/**
* @author
* @function Clients
**/

const Clients = (props) => {
  return(
    <>
    <PageTitle heading="Our Clients" />
    <section className="clients-section">
    <Container>
    <div className="client-container">
      <ClientImageWrap 
        img1="https://signageindia.in/wp-content/uploads/2020/03/ashok.png"
        alt1=" "
        img2="https://signageindia.in/wp-content/uploads/2020/03/aditya.png"
        alt2=" "
        img3="https://signageindia.in/wp-content/uploads/2020/03/amway-1.png"
        alt3=" "
        img4="https://signageindia.in/wp-content/uploads/2020/03/Untitled-1.png"
        alt4=" "
      />
      <ClientImageWrap 
        img1="https://signageindia.in/wp-content/uploads/2020/03/airtel.png"
        alt1=" "
        img2="https://signageindia.in/wp-content/uploads/2020/03/starplus.png"
        alt2=" "
        img3="https://signageindia.in/wp-content/uploads/2020/03/news.png"
        alt3=" "
        img4="https://signageindia.in/wp-content/uploads/2020/03/mtnl.png"
        alt4=" "
      />
      <ClientImageWrap 
        img1="https://signageindia.in/wp-content/uploads/2020/03/lcacoste.png"
        alt1=" "
        img2="https://signageindia.in/wp-content/uploads/2020/03/iipm.png"
        alt2=" "
        img3="https://signageindia.in/wp-content/uploads/2020/03/redfm.png"
        alt3=" "
        img4="https://signageindia.in/wp-content/uploads/2020/03/vestga.png"
        alt4=" "
      />
      <ClientImageWrap 
        img1="https://signageindia.in/wp-content/uploads/2020/03/central.png"
        alt1=" "
        img2="https://signageindia.in/wp-content/uploads/2020/03/apollo.png"
        alt2=" "
        img3="https://signageindia.in/wp-content/uploads/2020/03/dlf-1.png"
        alt3=" "
        img4="https://signageindia.in/wp-content/uploads/2020/03/educomp-1.png"
        alt4=" "
      />
      <ClientImageWrap 
        img1="https://signageindia.in/wp-content/uploads/2020/03/baroda.png"
        alt1=" "
        img2="https://signageindia.in/wp-content/uploads/2020/03/conver.png"
        alt2=" "
        img3="https://signageindia.in/wp-content/uploads/2020/03/itc.png"
        alt3=" "
        img4="https://signageindia.in/wp-content/uploads/2020/03/birlasoft-1.png"
        alt4=" "
      />      
    </div>
    </Container>
    </section>
    </>
  )
  }


export default Clients