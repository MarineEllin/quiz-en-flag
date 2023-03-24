import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`${styles.appContainer} d-flex flex-column`}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
