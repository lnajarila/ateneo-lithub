import Footer from "./Footer";
import Registration from "./Registration";

function App() {
  return (
    <>
      <div className="bg-primary-500 text-white p-4">
        <h1 className="font-serif text-2xl font-bold">Ateneo LitHub</h1>
      </div>
      <Registration />
      <Footer />
    </>
  )
}

export default App;