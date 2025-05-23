/**
 * Author: Lurd Synell B. Najarila
 * Description: Login page
 */

import Header from '../../widgets/Header.jsx';
import Footer from '../../widgets/Footer.jsx';
import LoginForm from './LoginForm.jsx';

function Login() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <Header />
      </header>

      <main className='m-auto'>
        <LoginForm />
      </main>

      <Footer />
    </div>
  );
}

export default Login;