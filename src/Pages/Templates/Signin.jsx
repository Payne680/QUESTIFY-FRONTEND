/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles.css';
import Header from '../../Components/Atoms/Headings/Header';
import Button from '../../Components/Atoms/Buttons/Button';
import Input from '../../Components/Atoms/Inputs/Input';
import Footerdesign from './Footerdesign';
import { login } from '../../Api/auth';
import { saveToken } from '../../utils';

export default function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      emailAddress: target.emailAddress.value,
      password: target.password.value,
    };
    setIsLoading(true);
    try {
      const { data } = await login(user.emailAddress, user.password);
      console.log(user);
      saveToken(data);
      navigate('/dashboard');
      window.location.reload(true);
    } catch (event) {
      if (event.response.status === 401) {
        setError('Invalid username or password');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="headz">
      <form onSubmit={handleSubmit}>
        <Header title="Login" />
        <p>Login and start managing your oraganization</p>
        <p>{isLoading ? 'Loading...' : ''}</p>
        {error && <p className="error">{error}</p>}
        <Input
          type="email"
          placeholder="Email Address"
          name="emailAddress"
          required
        />
        <Input type="password" placeholder="Password" name="password" />
        <div className="linkz">
          <p>Forgot Password?</p>
          <Link className="titlez" to="/signup">
            <p className="accountz">No account? Sign Up</p>
          </Link>
        </div>
        <Button type="submit" title="Login" />
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
