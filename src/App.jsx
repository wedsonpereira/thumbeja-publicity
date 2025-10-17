import "./App.css";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import {Routes, Route} from "react-router-dom";
import Services from "./Components/Services/Services.jsx";
import Career from "./Components/Career/Career.jsx";
import TermsConditions from "./Components/TermsConditions/Terms&Conditions.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import DigitalMarketing from "./Components/Services/DigitalMarketing/DigitalMarketing.jsx";
import Printing from "./Components/Services/Printing/Printing.jsx";
import CustomerRelationshipManagement
    from "./Components/Services/CustomerRelationshipManagement/CustomerRelstionshipManagement.jsx";
import GraphicDesign from "./Components/Services/GraphicDesign/GraphicDesign.jsx";
import OutdoorAdvertising from "./Components/Services/OutdoorAdvertising/OutdoorAdvertising.jsx";
import SocialMediaHandling from "./Components/Services/SocialMediaHandling/SocialMediaHandling.jsx";
import SocialMediaMarketing from "./Components/Services/SocialMediaMarketing/SocialMediaMarketing.jsx";
import VideoMarketing from "./Components/Services/VideoMarketing/VideoMarketing.jsx";
import WebsiteSoftwareDevelopment
    from "./Components/Services/Website Software Development/WebsiteSoftwareDevelopment.jsx";
import WhatsappChatbot from "./Components/Services/Whatsapp & Chatbot/WhatsappChatbot.jsx";



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
                <Route path="/services/digitalmarketing" element={<DigitalMarketing/>}/>
                <Route path="/services/printing" element={<Printing/>}/>
                <Route path="/services/customerrelationshipmanagement" element={<CustomerRelationshipManagement/>}/>
                <Route path="/services/graphicdesign" element={<GraphicDesign/>}/>
                <Route path="/services/outdooradvertising" element={<OutdoorAdvertising/>}/>
                <Route path="/services/socialmediahandling" element={<SocialMediaHandling/>}/>
                <Route path="/services/socialmediamarketing" element={<SocialMediaMarketing/>}/>
                <Route path="/services/videomarketing" element={<VideoMarketing/>}/>
                <Route path="/services/websitesoftwaredevelopment" element={<WebsiteSoftwareDevelopment/>}/>
                <Route path="/services/whatsappchatbot" element={<WhatsappChatbot/>}/>



            </Routes>
        </>
    );
}

export default App;
