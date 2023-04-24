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
          <Btn title="Sign up" />
        </Link>
      </form>
      <Footerdesign />
    </div>
  );
}
