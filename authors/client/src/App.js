import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import List from './components/List';
import New from './components/New';
import Edit from './components/Edit';
import Notfound from './components/Notfound';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>

      <Switch>
        <Route path='/edit/:id'>
          <Edit/>
        </Route>

        <Route path='/notfound'>
          <Notfound/>
        </Route>


        <Route path='/new'>
          <New/>
        </Route>

        <Route path='/'>
          <List />
        </Route>




      </Switch>
    </div>
  );
}

export default App;
