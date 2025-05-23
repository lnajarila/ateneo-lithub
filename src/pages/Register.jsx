import Footer from "../widgets/Footer";
import RegistrationForm from "../widgets/RegistrationForm";
import Header from '../widgets/Header.jsx';

function Register() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <RegistrationForm />
      <Footer />
    </div>
  )
}

export default Register;