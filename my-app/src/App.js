import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import About from './About';
import Custom from './Custom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body />
      <Custom />
      <About />

    </div>
  );
}

export default App;
