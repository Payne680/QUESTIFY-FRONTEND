import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import Input from '../../Core/Components/Atoms/Input';
import Btn from '../../Core/Components/Atoms/Button';
import Header from '../../Core/Components/Atoms/Header';
import Footerdesign from '../../Core/Components/Atoms/Footerdesign';

export default function Signup() {
  const [isLoading] = useState(false);
  const [error] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Header title="Sign up" />
        <p>Sign up and start managing your oraganization</p>
        <p>{isLoading ? 'Loading...' : ''}</p>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email Address" />
        <Input type="phone" placeholder="Phone Number" />
        <Input type="password" placeholder="Password" />
        <Input
          type="password"
          placeholder="Password Confirmation"
          name="passwordConfirmation"
        />
        {error && <p className="error">{error}</p>}
        <Link to="/login">
          <Btn title="Sign up" />
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
