import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import About from './Component/Pages/Body/About/About';
import Blog from './Component/Pages/Body/Blog/Blog';
import Contact from './Component/Pages/Body/Contact/Contact';
import Destination from './Component/Pages/Body/Destination/Destination';
import Services from './Component/Pages/Body/Services/Services';
import Footer from './Component/Pages/Footer/Footer';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home/Home';
import Login from './Component/Pages/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
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
            <Route path="/services" component={Services} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
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