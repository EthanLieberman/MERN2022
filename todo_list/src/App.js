import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import List from './components/List';
import { useState } from 'react';

function App() {

  const todo1 = {
    title: 'todo 1',
    isChecked: false
  }
  const todo2 = {
    title: 'todo 2',
    isChecked: false
  }
  const todo3 = {
    title: 'todo 3',
    isChecked: false
  }


  const [list, setList] = useState([todo1, todo2, todo3])

  const createTodo = (newTodo) => {
    console.log("appcv.js")
    setList([...list, newTodo])
  }

  const updateChecked = (setting, i) => {
    console.log(setting)
    console.log(i)
    setList(list.map((item, ind) => {
      if (ind === i) {
        item.isChecked = setting
      }
      return item

    }))

  }

  const remove = (e, i) => {
    console.log(e)
    console.log(i)
    setList(list.filter( (item, ind) => ind !== i))

  }



  return (
    <div className="App">
      <Input createTodo={createTodo} />
      <List list={list} updateChecked={updateChecked} remove={remove} />
    </div>
  );
}



export default App;
