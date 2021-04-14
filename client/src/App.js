// Basic Imports
import { Switch, Route } from 'react-router';

// Css Imports
import './App.css';

// Route Components Import
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import Service from './Containers/Services';
import About from './Containers/About';
import Product from './Containers/Products';
import Client from './Containers/Clients';
import Contact from './Containers/Contact';
import Footer from './Components/Footer';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
