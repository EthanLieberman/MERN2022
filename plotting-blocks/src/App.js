import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='Flex'>
        <Navigation></Navigation>
        <Main></Main>
      </div>

    </div>
  );
}

export default App;
