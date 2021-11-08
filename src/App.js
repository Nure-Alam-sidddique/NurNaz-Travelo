import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import BookingDetails from './Component/BookingDetails/BookingDetails';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import About from './Component/Pages/Body/About/About';
import Contact from './Component/Pages/Body/Contact/Contact';
import Destination from './Component/Pages/Body/Destination/Destination';
import ServiceMange from './Component/Pages/Body/ServiceManage/ServiceMange';
import Services from './Component/Pages/Body/Services/Services';
import Footer from './Component/Pages/Footer/Footer';
import Header from './Component/Pages/Header/Header';
import Banner from './Component/Pages/Home/Banner/Banner';
import Home from './Component/Pages/Home/Home/Home';
import Login from './Component/Pages/Login/Login';
import Myorders from './Component/Pages/Myorders/Myorders';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import UpdateServices from './Component/UpdateService/UpdateServices';
import AuthProvider from './Context/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Banner></Banner>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute>
            <Route path='/login' component={Login}/>
            <PrivateRoute exact path="/services" >
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/servicemanage">
              <ServiceMange></ServiceMange>
            </PrivateRoute>
            <Route exact path="/services/update/:updateId">
              <UpdateServices></UpdateServices>
            </Route>
            <PrivateRoute path='/booking/:bookingId'>
               <BookingDetails></BookingDetails>
            </PrivateRoute>
            <PrivateRoute path='/myorders'>
               <Myorders></Myorders>
            </PrivateRoute>
            <Route path="/servicemanage/:placeId" component={ServiceMange} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={PageNotFound}/>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;