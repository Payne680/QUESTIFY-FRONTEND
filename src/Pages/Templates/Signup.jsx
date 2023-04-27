import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles.css';
import Input from '../../Components/Atoms/Inputs/Input';
import Header from '../../Components/Atoms/Headings/Header';
import Button from '../../Components/Atoms/Buttons/Button';
import Footerdesign from './Footerdesign';
import { register } from '../../Api/auth';

export default function Signup() {
  const [isLoading] = useState(false);
  const [error] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    register(values);
    navigate('/create-first-team');
  };

  return (
    <div className="headz">
      <form onSubmit={handleSubmit}>
        <Header title="Sign up" />
        <p>Sign up and start managing your oraganization</p>
        <p>{isLoading ? 'Loading...' : ''}</p>
        <Input type="text" placeholder="Username" name="name" />
        <Input type="email" placeholder="Email Address" name="emailAddress" />
        <Input type="phone" placeholder="Phone Number" name="phone" />
        <Input type="password" placeholder="Password" />
        {error && <p className="error">{error}</p>}
        <Link className="titlez" to="/login">
          <p className="signz">Have an account? login</p>
        </Link>
        <Button title="Sign up" />
      </form>
      <Footerdesign />
    </div>
  );
}
