/**
 * Author: Lurd Synell B. Najarila
 * Description: Login page
 */

import Header from '../../widgets/Header.jsx';
import LoginForm from './LoginForm.jsx';

function Login() {
  return (
    <div className='flex flex-col h-screen'>
      <header>
        <Header />
      </header>

      <main className='m-auto'>
        <LoginForm />
      </main>
    </div>
  );
}

export default Login;