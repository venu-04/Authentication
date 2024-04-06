import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
 return (
 <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      
      {/* Add other routes as needed */}
    </Routes>
 </Router>
 );
}

export default App;
