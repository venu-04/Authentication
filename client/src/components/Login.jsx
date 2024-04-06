import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const [credentials, setCredentials] = useState({
    email: '',
    password: '',
 });

 const navigate = useNavigate();

 const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', credentials);
      const { token, refreshToken } = response.data;

      // Store the tokens in localStorage or secure cookie for later use
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);

      // Redirect or perform other actions upon successful login
      navigate('/dashboard');
    } catch (error) {
      // Handle login error
      console.error('Error logging in:', error);
    }
 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
 );
};

export default Login;
