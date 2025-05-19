/**
 * Author: Lurd Synell B. Najarila
 * Description: Login page (Modified to support navigation)
 */

import Header from '../../widgets/Header.jsx';
import LoginForm from './LoginForm.jsx';

function Login({ onNav }) {
  return (
    <>
      <Header onNav={ onNav } />
      <div className='flex flex-col h-screen'>        
        <main className='m-auto'>
          <LoginForm />
        </main>
      </div>
    </>
  );
}

export default Login;