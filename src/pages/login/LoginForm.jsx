/**
 * Author: Lurd Synell B. Najarila
 * Description: Form component for the Login page.
 */

import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext.jsx';
import { UserContext } from '../../context/UserContext.jsx';
import Card from '../../components/Card.jsx';
import TextField from '../../components/TextField.jsx';
import AccentButton from '../../components/AccentButton.jsx';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const { getUserOnLogin } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogin() {
    const user = getUserOnLogin(email, password);

    if (user != null) {
      login(user.id);
      navigate(`/user/${user.id}`)
    }
  }

  return (
    <form className='w-full'>
      <Card elevation={1}>
        <div className='p-12'>
          <h2 className='mb-8 font-serif font-bold text-4xl text-center'>
            Login to Ateneo LitHub
          </h2>

          <div className='pb-4'>
            <TextField
              id={'email'}
              label={'Email Address'}
              placeholder={'Enter your email address'}
              handleChange={(value) => setEmail(value)}
            />
          </div>

          <div className='pb-4'>
            <TextField
              id={'password'}
              label={'Password'}
              placeholder={'Enter your password'}
              isVisible={false}
              handleChange={(value) => setPassword(value)}
            />
          </div>

          <div className='mt-8 flex justify-center'>
            <AccentButton handleClick={handleLogin}>Log In</AccentButton>
          </div>

          <div className='mt-4 flex justify-center'>
            <p>
              <span>Don't have an account? </span>
              <Link to={'/register'}>
                <span className='text-primary-500 hover:text-primary-400 font-bold duration-300'>
                  Sign up here!
                </span>
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </form>
  );
}

export default LoginForm;