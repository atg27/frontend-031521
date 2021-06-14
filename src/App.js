import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Author from './containers/Author'
import Authors from './containers/Authors'
// import Publications from './components/Publications' //not used yet
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/authors" component={Authors}/>
          <Route path="/authors/:id" component={Author}/> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
