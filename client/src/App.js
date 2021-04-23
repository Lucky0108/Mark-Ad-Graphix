// Basic Imports
import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router';

// Css Imports
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import loadingImg from './img/puff.svg'

// Route Components Import
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
    console.log(location)
  }, [location])

  const NavbarCheck = () => {
    if(location.pathname !== '/admin' && location.pathname !== '/admin/login') return <Navbar />
  }

  const FooterCheck = () => {
    if(location.pathname !== '/admin' && location.pathname !== '/admin/login') return <Footer />
  }

  return (
    <div className="App">
      <Suspense fallback={
        <div className="divLoader">
            <img src={loadingImg} alt="Loading" />
        </div>}>
        {NavbarCheck()}
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
      {FooterCheck()}
      {/* <Footer /> */}
      <WhatsAppIcon />
      <BackTop />
      </Suspense>
    </div>
  );
}

export default App;
