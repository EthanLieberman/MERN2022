import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import ListProducts from './components/ListProducts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom'
import SingleProduct from './components/SingleProduct';
import EditProduct from './components/EditProduct';


function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(result => {
        console.log(result.data)
        setList(result.data)
      })
      .catch(err => console.log(`error: ${err}`))
  }, []);

  const removeFromDom = id => {
      console.log(list)
      setList(list.filter(product => id != product._id))
  }

  const addToDom = res => {
    // console.log(list, res.data.product)
    setList([...list, res.data.product])
  }

  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Switch>

        <Route exact path='/'>
          <Main addToDom={addToDom}/>
          <Link to='/products'>Products</Link>
        </Route>
        <Route path='/products'>
          <ListProducts list={list} removeFromDom={removeFromDom} />
          {/* {list.products ? <ListProducts list={list} />
            : <div>loading</div>
          } */}
        </Route>

        <Route exact path='/product/edit/:id'>
          <EditProduct />
        </Route>

        <Route exact path='/product/:id'>
          <SingleProduct />
        </Route>




      </Switch>

    </div>
  );
}

export default App;
