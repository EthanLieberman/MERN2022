import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Input from './components/Input';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Unknown from './components/Unknown';

function App() {



  return (
    <div className="App">
      <Input/>

      <Switch>

        <Route path={'/people/:int'}>
          <People/>
        </Route>

        <Route path={'/planets/:int'}>
          <Planets/>
        </Route>

        <Route path={'/starships/:int'}>
          <Starships/>
        </Route>

        <Route path={'/404'}>
          <Unknown />
        </Route>



      </Switch>





    </div>
  );
}

export default App;
