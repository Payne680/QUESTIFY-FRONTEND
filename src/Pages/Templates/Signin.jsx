import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import Input2 from '../../Core/Components/Atoms/Input';
import Btn from '../../Core/Components/Atoms/Button';
import Header from '../../Core/Components/Atoms/Header';
import Footerdesign from '../../Core/Components/Atoms/Footerdesign';

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
        <Input2 type="email" placeholder="Email Address" />
        <Input2 type="password" placeholder="Password" />
        <div className="linkz">
          <p>Forgot Password?</p>
          <Link className="titlez" to="/signup">
            <p className="accountz">No account? Sign Up</p>
          </Link>
        </div>
        <Link to="/dashboard">
          <Btn title="Login" />
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
