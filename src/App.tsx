import { HashRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import './css/index.css';

function App() {

  return (
    <HashRouter>

      <Header />

      <Navbar />

      <main>
        <Router />
      </main>

      <Footer />

    </HashRouter>
  )
}

export default App;
