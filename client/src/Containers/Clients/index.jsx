import React from 'react'
import { Container } from 'react-bootstrap'

// Components Import
import PageTitle from '../../Components/UI/PageTitle';
import ClientImageWrap from '../../Components/UI/ClientImageWrap';

// Media Import
import client1 from '../../img/allen-solly.webp'
import client2 from '../../img/trends.webp'
import client3 from '../../img/Louis.webp'
import client4 from '../../img/van-heusen.webp'
import client5 from '../../img/planet.webp'
import client6 from '../../img/stanmax1.webp'
import client7 from '../../img/wls.webp'
import client8 from '../../img/johnplayers.webp'
import client9 from '../../img/gitanjali.webp'
import client10 from '../../img/cantabil.webp'
import client11 from '../../img/levis.webp'

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
        img1={client1}
        alt1="Allen Solly"
        img2={client2}
        alt2="Reliance Trends"
        img3={client3}
        alt3="Louis Philippe"
        img4={client4}
        alt4="Van Huesen"
      />
      <ClientImageWrap 
        img1={client5}
        alt1="Planet Fashion"
        img2={client6}
        alt2="Stanmax"
        img3={client7}
        alt3="Wills Life Style"
        img4={client8}
        alt4="John Player"
      />
      <ClientImageWrap 
        img1={client9}
        alt1="Gitanjali"
        img2={client10}
        alt2="Cantabil" 
        img3={client11}
        alt3="Levi's"
        img4={undefined}
      /> 
    </div>
    </Container>
    </section>
    </>
  )
  }


export default Clients