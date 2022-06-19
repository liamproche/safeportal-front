import './App.css';
import Nav from './Nav/Nav'
import About from './About/About'
import Login from './Login/Login'
import Register from './Register/Register'

function App() {
  return (
    <div className="App">
      <h1>App name goes here</h1>
      <Nav/>
      <About/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
