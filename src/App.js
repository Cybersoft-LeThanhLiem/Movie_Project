import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'
import { HomeTemplate } from './Templates/HomeTemplate/HomeTemplate';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import News from './Pages/News/News';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Detail from './Pages/Detail/Detail';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/" exact Component={Home} />

        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
