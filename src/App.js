import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';

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
       </Switch>
     </Router> 
    </div>
  );
}

export default App;
