import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import NumberPage from './components/NumberPage';
import ColorBox from './components/ColorBox';

function App() {
  return (
    <div className="App">

      <Link to='/'>Home</Link>


      <Switch>

        <Route path={'/:word/:bg/:color'}>
          <ColorBox/>
        </Route>

        <Route exact path={'/:num'}>
          <NumberPage/>
        </Route>

        <Route path={'/'}>
          <Home/>
        </Route>



      </Switch>


    </div>
  );
}

export default App;
