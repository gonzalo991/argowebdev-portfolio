import { HashRouter } from "react-router-dom";
import Router from "./Router";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import './css/index.css';

function App() {

  return (
    <HashRouter>
      <Navbar />

      <main>
        <Router />
      </main>

      <Footer />

    </HashRouter>
  )
}

export default App;
