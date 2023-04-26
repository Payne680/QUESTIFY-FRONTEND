import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import Header from '../../Components/Atoms/Headings/Header';
import Button from '../../Components/Atoms/Buttons/Button';
import Input from '../../Components/Atoms/Inputs/Input';
import Footerdesign from './Footerdesign';

export default function Signin() {
  const [isLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="headz">
      <form onSubmit={handleSubmit}>
        <Header title="Login" />
        <p>Login and start managing your oraganization</p>
        <p>{isLoading ? 'Loading...' : ''}</p>
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <div className="linkz">
          <p>Forgot Password?</p>
          <Link className="titlez" to="/signup">
            <p className="accountz">No account? Sign Up</p>
          </Link>
        </div>
        <Link to="/dashboard">
          <Button title="Login" />
        </Link>
        {/* <p>
          Have an account?
          <Link className="linkz" to="/login">
            login
          </Link>
        </p> */}
      </form>
      <Footerdesign />
    </div>
  );
}
