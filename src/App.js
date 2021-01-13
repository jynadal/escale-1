import './App.css';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/homePage/Home'
import Blog from './pages/homePage/Blog'
import Services from './pages/services/Services'
import ServiceDetail from './pages/services/ServiceDetail'
import FourZeroFour from './pages/FourZeroFour'



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/services/:slug'  component={ServiceDetail}/>
        <Route path='/blog'  component={Blog}/>
        <Route path='*'  component={FourZeroFour}/>
         {/* "homepage": "http://jynadal/github.io/escale-1", */}
      </Switch>

    </Router>
  );
}

export default App;
