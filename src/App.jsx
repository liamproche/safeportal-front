import './App.css';
import EditAccount from './PrivateComponents/EditAccount/EditAccount';
import PrivateComponents from './PrivateComponents/PrivateComponents';
import Profile from './PrivateComponents/Profile/Profile';
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PrivateComponents/>} exact/>
            <Route path="/profile" element={<Profile/>} exact/>
            <Route path="/account" element={<EditAccount/>} exact/>
        </Routes>
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
