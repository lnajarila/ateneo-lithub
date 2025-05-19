/**
 * Author: Lurd Synell B. Najarila
 * Description: Register page (Modified to support navigation)
 */

import Header from "../widgets/Header.jsx";
import Footer from "../widgets/Footer";
import RegistrationForm from "../widgets/RegistrationForm";

function Register({ onNav }) {
  return (
    <>
      <Header onNav={onNav} />
      <RegistrationForm />
      <Footer />
    </>
  );
}

export default Register;
