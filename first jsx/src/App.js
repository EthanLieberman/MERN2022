import logo from './logo.svg';
import './App.css';

import MyNewComponent from './components/MyNewComponent';
import Person from './components/PersonCard';
import PersonFunc from './components/PersonCardFunction';

const person1 = {
  'firstName' : "Jane",
  'lastName' : "Doe",
  'age' : 45,
  'hairColor' : "Black"
}
const person2 = {
  'firstName' : "John",
  'lastName' : "Smith",
  'age' : 88,
  'hairColor' : "Brown"
}
const person3 = {
  'firstName' : "Millard",
  'lastName' : "Fillmore",
  'age' : 50,
  'hairColor' : "Brown"
}
const person4 = {
  'firstName' : "Maria",
  'lastName' : "Smith",
  'age' : 62,
  'hairColor' : "Brown"
}

function App() {
  return (
    <fieldset>
      <legend>App</legend>
    <div className="padl mt-4">
      <MyNewComponent sometext={"hellow"}/>
      <PersonFunc person = {person4}/>
      {/* <PersonFunc firstName = {person1.firstName} lastName = {person1.lastName} age = {person1.age} hairColor = {person1.hairColor}/> */}
      {/* <PersonFunc firstName = {person2.firstName} lastName = {person2.lastName} age = {person2.age} hairColor = {person2.hairColor}/>
      <PersonFunc firstName = {person3.firstName} lastName = {person3.lastName} age = {person3.age} hairColor = {person3.hairColor}/>
      <PersonFunc firstName = {person4.firstName} lastName = {person4.lastName} age = {person4.age} hairColor = {person4.hairColor}/> */}
    </div>
    </fieldset>
  );
}

export default App;
