import './App.css';
import Nav from './PrivateComponents/Nav/Nav'
import Landing from './PublicComponents/Landing/Landing';
import Register from './PublicComponents/Register/Register'
import EditAccount from './PrivateComponents/EditAccount/EditAccount';
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing/>} exact/>
            <Route path="/register" element={<Register/>} exact/>
            <Route path="/account" element={<EditAccount/>} exact/>
        </Routes>
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
