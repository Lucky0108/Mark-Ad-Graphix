// Basic Imports
import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';

// Css Imports
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'react-toastify/dist/ReactToastify.css';
// import "toastr/build/toastr.css";
// import "animate.css/animate.css";
import loadingImg from './img/puff.svg'

// Route Components Import
import Profile from './Containers/Admin/Profile'
import ContactList from './Containers/Admin/ContactList'
const Navbar = lazy(() => import('./Components/Navbar'));
const Home = lazy(() => import('./Containers/Home'));
const Service = lazy(() => import('./Containers/Services'));
const About = lazy(() => import('./Containers/About'));
const Product = lazy(() => import('./Containers/Products'));
const Client = lazy(() => import('./Containers/Clients'));
const Contact = lazy(() => import('./Containers/Contact'));
const Footer = lazy(() => import('./Components/Footer'));
const WhatsAppIcon = lazy(() => import('./Components/WhatsappIcon'));
const BackTop = lazy(() => import('./Components/BackTop'));
const Page404 = lazy(() => import('./Containers/Page 404'));
const login = lazy(() => import('./Containers/Admin/Login'));
const Newsletter = lazy(() => import('./Containers/Admin/Newsletter'));
const PrivateRoute = lazy(() => import('./user/PrivateRoutes'));

function App() {

  const location = useLocation();
  
  
  useEffect(() => {
    // Go To Top Of Page When Component or Location Changes
    window.scrollTo(0,0);
    // console.log(location)
  }, [location])

  const NavbarCheck = () => {
    if(!location.pathname.includes('/admin')) return <Navbar />
  }

  const FooterCheck = () => {
    if(!location.pathname.includes('/admin')) return <Footer />
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
        <Route exact path="/admin" component={login} />
        <PrivateRoute exact path='/admin/profile' component={Profile} />
        <PrivateRoute exact path='/admin/newsletter' component={Newsletter} />
        <PrivateRoute exact path='/admin/contacts' component={ContactList} />
        <Route component={Page404} />
      </Switch>
      {FooterCheck()}
      <WhatsAppIcon />
      <BackTop />
      </Suspense>
      <ToastContainer
          position="top-right"
          autoClose={6000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </div>
  );
}

export default App;
