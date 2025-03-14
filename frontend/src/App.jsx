
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import SobreMi from './views/SobreMi.jsx';
import Contacto from './views/Contacto.jsx';
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext.jsx";
import Navbar from "./components/NavBar.jsx";
import Footer from './components/Footer.jsx';


const App = () => {
  const { user } = useContext(UserContext);
  return (
  <div>
   <Navbar />
     <Routes>
       <Route
         path="/"
         element={<Home />}
       />

       <Route
         path="/sobre-mi"
         element={<SobreMi />}
       />

       <Route
         path="/contacto"
         element={<Contacto />}
       />

     </Routes>
     <Footer />
  </div>
  );
  };
  export default App;
