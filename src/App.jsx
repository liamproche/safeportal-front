import './App.css';
import Nav from './PublicComponents/Nav/Nav'
import About from './PublicComponents/About/About'
import Login from './PublicComponents/Login/Login'
import Register from './PublicComponents/Register/Register'
import EditAccount from './PrivateComponents/EditAccount/EditAccount';
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <h1>Safeportal</h1>
          <Nav/>
          <Routes>
            <Route path="/" element={<About/>} exact/>
            <Route path="/login" element={<Login/>} exact/>
            <Route path="/register" element={<Register/>} exact/>
            <Route path="/account" element={<EditAccount/>} exact/>
        </Routes>
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
