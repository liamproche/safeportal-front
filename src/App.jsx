import './App.css';
import Nav from './Nav/Nav'
import About from './About/About'
import Login from './Login/Login'
import Register from './Register/Register'
import { AuthProvider } from './context/AuthContext'


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <h1>App name goes here</h1>
        <Nav/>
        <About/>
        <Login/>
        <Register/>
      </AuthProvider>
    </div>
  );
}

export default App;
