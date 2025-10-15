import "./App.css";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import {Routes, Route} from "react-router-dom";
import Services from "./Components/Services/Services.jsx";
import Career from "./Components/Career/Career.jsx";
import TermsConditions from "./Components/TermsConditions/Terms&Conditions.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
// import {snowflakeCursor} from "./Components/MouseHover/SnowFlake.js";


function App() {
    // const [isLoading, setIsLoading] = useState(true);
    //
    // useEffect(() => {
    //     // simulate real loading (API, image load, etc.)
    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1000); // 2 seconds
    //
    //     return () => clearTimeout(timer);
    // }, []);


    // snowflakeCursor(document.body);

    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/career" element={<Career/>}/>
                <Route path="/info" element={<TermsConditions/>}/>
            </Routes>
        </>
    );
}

export default App;
