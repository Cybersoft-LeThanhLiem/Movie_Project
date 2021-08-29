import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'
import { HomeTemplate } from './Templates/HomeTemplate/HomeTemplate';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import News from './Pages/News/News';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/" exact Component={Home} />

        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
