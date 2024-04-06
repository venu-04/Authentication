
import { useNavigate } from 'react-router-dom';

const Home = () => {
 const navigate = useNavigate();

 const handleSignUpClick = () => {
    navigate('/signup');
 };

 const handleLoginClick = () => {
    navigate('/login');
 };

 return (
    <div>
      <h1>Welcome to our Website!</h1>
      <p>This is the home page of our website.</p>
      <button onClick={handleSignUpClick}>Sign Up</button>
      <button onClick={handleLoginClick}>Login</button>
    </div>
 );
};

export default Home;
