import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './Dashboard/Dashboard';
import MyCart from './pages/cart/MyCart';
import Homepage from './pages/homePage/Homepage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/login" component={Login} />
         <Route path="/signup" component={Signup} />
         <Route path="/dashboard" component={Dashboard} />
         <Route path="/myCart" component={MyCart} />
         <Route path="/homepage" component={Homepage} />
       </Switch>
     </Router> 
    </div>
  );
}

export default App;
