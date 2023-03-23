import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="d-flex flex-column container">
      <Header />
      <div className="d-flex flex-fill justify-content-center align-items-center">
        <Homepage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
