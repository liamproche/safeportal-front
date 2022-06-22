import './App.css';
import Register from './PublicComponents/Register/Register'
import EditAccount from './PrivateComponents/EditAccount/EditAccount';
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateComponents from './PrivateComponents/PrivateComponents';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PrivateComponents/>} exact/>
            <Route path="/register" element={<Register/>} exact/>
            <Route path="/account" element={<EditAccount/>} exact/>
        </Routes>
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
