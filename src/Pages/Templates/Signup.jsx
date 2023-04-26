import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';
import Input from '../../Components/Atoms/Inputs/Input';
import Header from '../../Components/Atoms/Headings/Header';
import Button from '../../Components/Atoms/Buttons/Button';
import Footerdesign from './Footerdesign';

export default function Signup() {
  const [isLoading] = useState(false);
  const [error] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="headz">
      <form onSubmit={handleSubmit}>
        <Header title="Sign up" />
        <p>Sign up and start managing your oraganization</p>
        <p>{isLoading ? 'Loading...' : ''}</p>
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email Address" />
        <Input type="phone" placeholder="Phone Number" />
        <Input type="password" placeholder="Password" />
        {error && <p className="error">{error}</p>}
        <Link className="titlez" to="/login">
          <p className="signz">Have an account? login</p>
        </Link>

        <Link to="/create-first-team">
          <Button title="Sign up" />
        </Link>
      </form>
      <Footerdesign />
    </div>
  );
}
