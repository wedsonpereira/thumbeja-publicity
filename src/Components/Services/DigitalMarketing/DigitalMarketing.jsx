import React from 'react';  // Add this at the top
import './DigitalMarketing.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import DigitalMarketingImg from '../../../assets/Images/DigitalMarketing.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {services1, services2,services3} from "../../../assets/JsonData/Servicesdata/DigitalMarketing.js";
const DigitalMarketing = () => {

        return (
            <div className="DigitalMarketing max-width-[2000px] min-h-[60rem]">
                <Header/>
                <div className="DigitalMarketingbox1 max-w-300  m-auto ">
                    <h1 className="heading pt-[4rem] pl-[2.5rem] "
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "2.3rem"}}> Digital Marketing</h1>
                    <p className="paragraph1 leading-8 pl-[2.5rem] " style={{textAlign: 'left'}}>Digital marketing
                        encompasses a dynamic array of strategies designed to connect businesses with their audiences in
                        the digital realm.</p>
                    <p className="paragraph2 leading-8 pl-[2.5rem] pt-[0.9rem] " style={{textAlign: 'left'}}>1Beyond
                        promotion, digital marketing fosters authentic relationships by emphasizing storytelling and
                        value creation, turning passive viewers into loyal advocates through personalized experiences
                        and interactive content.</p>
                </div>
                <div className="ImageSection pt-10 max-width-[2000px] min-h-[14rem] ">
                    <img src={DigitalMarketingImg} className="DigitalMarketingImg w-[90%] rounded-2xl mt-0 mb-0 m-auto"
                         alt="Digital Marketing"/>
                </div>
                <div>
                    <p className="paragraph1 leading-8 pl-[2.5rem] max-w-300  m-auto pt-8" style={{textAlign: 'left'}}>2Beyond
                        promotion, digital marketing fosters authentic relationships by emphasizing storytelling and value
                        creation, turning passive viewers into loyal advocates through personalized experiences and
                        interactive content.
                    </p>
                </div>
                <div className="Subheadingmain max-w-300  m-auto">
                    <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our branding &
                        marketing services include
                    </h1>
                    <h2 className="subheading pt-[1.5rem] pl-[2.5rem]"
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.4rem"}}>Brand & Marketing
                        Evaluations
                    </h2>
                    <p className="paragraph1 leading-8 pl-[2.5rem] pt-6" style={{textAlign: 'left'}}>Beyond promotion,
                        digital marketing fosters authentic relationships by emphasizing storytelling and value
                        creation, turning passive viewers into loyal advocates through personalized experiences and
                        interactive content.
                    </p>
                    <div className="points max-w-450 pl-14 m-auto  pt-6 leading-6" >
                        <ul className="services-list" >
                            {services1.map((service, index) => (
                                <li key={index} style={{marginBottom: '10px', fontSize: '1rem'}}>
                                    <FontAwesomeIcon icon={faCheck} size="xl"/>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="DigitalMarketingbox2 max-w-300  m-auto ">
                    <h1 className="heading pt-[2rem] pl-[2.5rem] "
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}> Branding & marketing</h1>
                    <p className="paragraph1 leading-8 pl-[2.5rem] " style={{textAlign: 'left'}}>Branding and marketing at Thumbeja Publicity represent a seamless fusion of creative storytelling, strategic innovation, and measurable impact, designed to elevate your business from visibility to unforgettable presence. We craft comprehensive branding solutions—from corporate stationery, marketing collaterals, and merchandise printing to event and personal branding with custom ID cards, badges, and signage—that embody your identity with professional precision.</p>
                </div>
                <div className="points max-w-300 pl-14 m-auto  pt-6 leading-6" >
                    <ul className="services-list" >
                        {services2.map((service, index) => (
                            <li key={index} style={{marginBottom: '10px', fontSize: '1rem'}}>
                                <FontAwesomeIcon icon={faCheck} size="xl"/>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="Subheadingmain max-w-300  m-auto">
                    <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What do our branding &
                        marketing services include
                    </h1>

                    <p className="paragraph1 leading-8 pl-[2.5rem] pt-6" style={{textAlign: 'left'}}>Beyond promotion,
                        digital marketing fosters authentic relationships by emphasizing storytelling and value
                        creation, turning passive viewers into loyal advocates through personalized experiences and
                        interactive content.
                    </p>
                    <div className="points max-w-450 pl-14 m-auto  pt-6 leading-6" >
                        <ul className="services-list" >
                            {services3.map((service, index) => (
                                <li key={index} style={{marginBottom: '10px', fontSize: '1rem'}}>
                                    <FontAwesomeIcon icon={faCheck} size="xl"/>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="4th para max-w-300  m-auto">
                    <h1 className="subheading pt-[1.5rem] pl-[2.5rem]"
                        style={{textAlign: 'left', fontWeight: 'bold', fontSize: "1.8rem"}}>What we have offer
                    </h1>

                    <p className="paragraph1 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>Thumbeja Publicity offers comprehensive branding and marketing services to businesses of all sizes and industries, enhancing online visibility, generating leads, and driving sales through innovative digital and traditional strategies. From search engine marketing with Google Ads and SEO to social media campaigns, video production, WhatsApp automation, CRM management, website development, corporate stationery, marketing collaterals, event branding, signage, merchandise printing, and outdoor advertising like banners and LED displays, we leverage cutting-edge tools and creativity to keep you ahead of the competition and achieve your growth goals. We love to bring designs to life as developers, and we aim to do this using whatever front-end tools are necessary.
                    </p>
                    <p className="paragraph2 leading-8 pl-[2.5rem] pt-3" style={{textAlign: 'left'}}>Our preferred tools are more modern JavaScript libraries like React.js but we like to use whatever is best for the website's needs. There are several reasons why a business would consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.   </p>


                </div>
                <div className="bg max-w-10"
                    style={{
                        backgroundColor: '#1e3a8a', // Light blue (adjust hex/rgb as needed)
                        borderRadius: '8px',
                        marginTop: '30px',
                        marginBottom: '60px',
                        maxWidth:'38rem',
                        height:'18rem',
                        margin:'auto',


                    }}
                >
                    <div className="Box font-extralight" style={{fontSize: "10rem"}}>
                        <div className="apostrophe flex w-[100%] text-white h-[5rem] items-center justify-center" >
                           <span className="h-[100%] w-[100%] text-center ">"</span>
                        </div>
                        <div className={" flex flex-1 "}>
                        </div>
                    </div>
                 
                </div>

            </div>
        );
    };

export default DigitalMarketing;