import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import BookingPlace from './Component/BookingPlace/BookingPlace';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import About from './Component/Pages/Body/About/About';
import Contact from './Component/Pages/Body/Contact/Contact';
import Destination from './Component/Pages/Body/Destination/Destination';
import ServiceMange from './Component/Pages/Body/ServiceManage/ServiceMange';
import Services from './Component/Pages/Body/Services/Services';
import Footer from './Component/Pages/Footer/Footer';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home/Home';
import Login from './Component/Pages/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import UpdateServices from './Component/UpdateService/UpdateServices';
import AuthProvider from './Context/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute>
            <Route path='/login' component={Login}/>
            <Route exact path="/services" component={Services} />
            <Route path="/servicemanage" component={ServiceMange} />
            <Route path="/booking/:bookingId">
                <BookingPlace></BookingPlace>
            </Route>
            <Route exact path="/services/update/:updateId">
              <UpdateServices></UpdateServices>
            </Route>
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
// https://preview.colorlib.com/#travelo 
// https://preview.colorlib.com/theme/travelo/