import './App.css'
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import {Routes,Route} from "react-router-dom";
import Services from "./Components/Services/Services.jsx";
import Career from "./Components/Career/Career.jsx";
import TermsConditions from "./Components/TermsConditions/Terms&Conditions.jsx";

function App() {

  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/career" element={<Career />} />
              <Route path="/info" element={<TermsConditions />} />
          </Routes>
      </>

  )
}

export default App
