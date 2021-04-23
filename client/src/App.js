// Basic Imports
import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router';

// Css Imports
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import loadingImg from './img/puff.svg'

// Route Components Import
// import Service from './Containers/Services';
// import About from './Containers/About';
// import Product from './Containers/Products';
// import Client from './Containers/Clients';
// import Contact from './Containers/Contact';
// import Footer from './Components/Footer';
// import ProductPage from './Components/UI/ProductPage';
// import WhatsAppIcon from './Components/WhatsappIcon';
// import BackTop from './Components/BackTop';
// import Page404 from './Containers/Page 404';
// import AdminHome from './Containers/Admin/AdminHome';
// import login from './Containers/Admin/Login';
const Navbar = lazy(() => import('./Components/Navbar'));
const Home = lazy(() => import('./Containers/Home'));
const Service = lazy(() => import('./Containers/Services'));
const About = lazy(() => import('./Containers/About'));
const Product = lazy(() => import('./Containers/Products'));
const Client = lazy(() => import('./Containers/Clients'));
const Contact = lazy(() => import('./Containers/Contact'));
const Footer = lazy(() => import('./Components/Footer'));
const ProductPage = lazy(() => import('./Components/UI/ProductPage'));
const WhatsAppIcon = lazy(() => import('./Components/WhatsappIcon'));
const BackTop = lazy(() => import('./Components/BackTop'));
const Page404 = lazy(() => import('./Containers/Page 404'));
const AdminHome = lazy(() => import('./Containers/Admin/AdminHome'));
const login = lazy(() => import('./Containers/Admin/Login'));

function App() {

  const location = useLocation();
  
  
  useEffect(() => {
    // Go To Top Of Page When Component or Location Changes
    window.scrollTo(0,0);
  }, [location])

  return (
    <div className="App">
      <Suspense fallback={
        <div className="divLoader">
            <img src={loadingImg} alt="Loading" />
        </div>}>
        <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/product/hello" component={ProductPage} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/admin/login" component={login} />
        <Route component={Page404} />
      </Switch>
      <Footer />
      <WhatsAppIcon />
      <BackTop />
      </Suspense>
    </div>
  );
}

export default App;
