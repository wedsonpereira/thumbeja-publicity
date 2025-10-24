import React from 'react';  // Add this at the top
import './Printing.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import OutdoorAdvertisingImg from '../../../assets/Images/Printing.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Footer/Footer.jsx";
import {GetInTouch} from "../Services.jsx";
import {services5} from "../../../assets/JsonData/Servicesdata/Printing.js";
import VisitingCard1Img from "../../../assets/Images/VisitingCard1.png";
import VisitingCard2Img from "../../../assets/Images/VisitingCard2.png";
import JayeshaPackersImg from "../../../assets/Images/JayeshaPackers.png";
import JayeshaPackers2Img from "../../../assets/Images/JayeshaPackers2.png";
import cardAnimations from "../../../assets/JsonData/CardAnimations/CardAnimations.js";
import DasaraImg from "../../../assets/Images/DasaraPoster.png";
import DiwaliPosterImg from "../../../assets/Images/DiwaliPoster.png";
import GandhiJayanthiPosterImg from "../../../assets/Images/GandhiJayanthiPoster.png";
import WorldDayPosterImg from "../../../assets/Images/WorldDayPoster.png";
import ThumbejaPublicityPamphletPage1Img from "../../../assets/Images/ThumbejaPublicityPamphletPage1.png";
import ThumbejaPublicityPamphletPage2Img from "../../../assets/Images/ThumbejaPublicityPamphletPage2.png";



const Printing = () => {

    return (
        <div className="DigitalMarketing max-width-[2000px] min-h-[60rem]">
            <Header/>
            <div className="DigitalMarketingbox1 max-w-300 m-auto">
                <h1 className="heading pt-[4rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}>Printing</h1>
                <p className="paragraph1 leading-8 pl-[2.5rem]" style={{textAlign: 'left'}}>
                    At Thumbeja Publicity, our printing services deliver high-quality, custom solutions to bring your
                    brand to life in tangible ways. From corporate stationery and marketing collaterals like brochures
                    and flyers to eye-catching merchandise such as branded apparel and promotional items, we utilize
                    state-of-the-art digital and offset printing techniques to ensure vibrant colors, sharp details, and
                    durable finishes that align with your vision.
                </p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem]" style={{textAlign: 'left'}}>
                    We extend our expertise to outdoor advertising with large-format prints including banners, posters,
                    and LED displays, designed for maximum impact and weather resistance. Beyond production, our team at
                    Thumbeja Publicity offers design consultation and quick turnaround times, empowering businesses to
                    create cohesive branding materials that captivate audiences and reinforce professional identities
                    across all touchpoints.
                </p>
            </div>
            <div className="ImageSection pt-10 max-width-[2000px] min-h-[14rem] ">
                <img src={OutdoorAdvertisingImg} className="DigitalMarketingImg w-[65%] rounded-2xl mt-0 mb-0 m-auto"
                     alt="Digital Marketing"/>
            </div>
            <div>
                <p className="paragraph3 leading-8 pl-[2.5rem] pt-[0.9rem] max-w-300 m-auto "
                   style={{textAlign: 'left'}}>
                    Committed to sustainability, Thumbeja Publicity incorporates eco-friendly inks and recycled
                    materials in our printing processes, minimizing environmental impact while maintaining premium
                    quality. Our end-to-end service—from concept ideation to final delivery—ensures seamless execution,
                    helping clients distribute impactful print materials that complement digital efforts and build
                    lasting brand loyalty.
                </p>
            </div>
            <div className="Subheadingmain max-w-300  m-auto">
                <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our branding &
                    marketing services include
                </h1>


                <div className="points max-w-450 pl-14 m-auto  pt-6 leading-6">
                    <ul className="services-list">
                        {services5.map((service, index) => (
                            <li key={index} style={{marginBottom: '10px', fontSize: '1rem'}}>
                                <FontAwesomeIcon icon={faCheck} size="xl"/>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="relative min-h-[30rem] w-full flex justify-center items-center flex-col p-1">
                {/*Box 1*/}
                <div className={"w-[93%] flex items-center justify-center"}>
                    <h1 className="subheading h-full p-2 font-bold text-2xl">Our Works</h1>
                </div>

                {/*box 2*/}
                <div className=" w-full flex items-center justify-center min-h-[50rem] relative flex-wrap gap-6">
                    {cardAnimations.map((item, index) => {
                        return (
                            <div className={`p-3 ${item.type==="poster"? "container2" : "container1"}`} key={index}>
                                <div className="card border-amber-900">
                                    <div className="front">
                                        <img
                                            src={item.frontImage}
                                            alt={item.altFront || `Front side of card ${index + 1}`}
                                            className=" w-full h-full rounded-[2rem]"
                                        />
                                    </div>
                                    <div className="back">
                                        <img
                                            src={item.backImage}
                                            alt={item.altBack || `Back side of card ${index + 1}`}
                                            className=" w-full h-full rounded-[2rem]"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="4th para max-w-300 m-auto">
                <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What we have offer</h1>
                <p className="paragraph1 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>
                    Thumbeja Publicity offers comprehensive branding and marketing services to businesses of all sizes
                    and industries, enhancing online visibility, generating leads, and driving sales through innovative
                    digital and traditional strategies. From search engine marketing with Google Ads and SEO to social
                    media campaigns, video production, WhatsApp automation, CRM management, website development,
                    corporate stationery, marketing collaterals, event branding, signage, merchandise printing, and
                    outdoor advertising like banners and LED displays, we leverage cutting-edge tools and creativity to
                    keep you ahead of the competition and achieve your growth goals. We love to bring designs to life as
                    developers, and we aim to do this using whatever front-end tools are necessary.
                </p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>
                    Our preferred tools are more modern JavaScript libraries like React.js but we like to use whatever
                    is best for the website's needs. There are several reasons why a business would consider a rebrand
                    and it doesn’t necessarily mean the business has been unsuccessful.
                </p>
            </div>

            <div className="DigitalMarketingboxN max-w-300 m-auto">
                <h1 className="heading pl-[2.5rem]"
                    style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}>Printing Services and Custom
                    Solutions</h1>
                <p className="paragraph1 leading-8 mt-4 pl-[2.5rem]" style={{textAlign: 'left'}}>
                    At Thumbeja Publicity, our printing services provide high-quality, bespoke solutions that transform
                    your creative concepts into tangible assets, strengthening your brand's physical presence. We
                    specialize in everything from corporate stationery and marketing collaterals like brochures, flyers,
                    and business cards to custom merchandise such as branded apparel, mugs, and promotional giveaways,
                    all produced with precision using advanced digital and offset printing technologies for superior
                    color accuracy and durability.
                </p>
                <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem]" style={{textAlign: 'left'}}>
                    Extending to large-scale projects, we handle signage, event branding, and outdoor advertising
                    including weather-resistant banners, posters, and LED displays that capture attention and convey
                    your message effectively. With expert design consultation, eco-friendly material options, and
                    efficient turnaround times, Thumbeja Publicity ensures your print materials seamlessly complement
                    digital efforts, fostering memorable customer experiences and elevating your overall marketing
                    impact.
                </p>
            </div>
            <GetInTouch/>
            <Footer/>
        </div>

    );
};

export default Printing;