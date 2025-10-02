import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import "./home.css"
import Header from "../header/Header.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp, faCheck} from "@fortawesome/free-solid-svg-icons";
import banner from "/src/assets/Images/20943546.jpg";
import data from "/src/assets/JsonData/data1.jsx"
import Footer from "../Footer/Footer.jsx";
import {homepageData2, homePageData, homepageData3, homepageData4} from "../../assets/JsonData/HomePageData.jsx";
import featureImg from '/src/assets/Images/features.png'
import processImg1 from '/src/assets/Images/processImg1.jpg'
import processImg2 from '/src/assets/Images/processImg2.jpg'
import processImg3 from '/src/assets/Images/processImg3.jpg'
import {useEffect} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SwiperSlide,Swiper} from "swiper/react"
import "swiper/css"
import {A11y, Autoplay, EffectFade, FreeMode, Navigation, Pagination, Parallax, Scrollbar, Zoom} from "swiper/modules";
import carousal1 from "/src/assets/Images/carousal1.jpg"
import carousal2 from "/src/assets/Images/carousal2.jpg"
import carousal3 from "/src/assets/Images/carousal3.jpg"

import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

gsap.registerPlugin(ScrollTrigger)

const Home = () => {

    const [Index, setIndex] = useState(0);

    const handleInputChange = (index) => {
        setIndex(index);
        console.log(index);
    };

    const [hoverIndex, setHoverIndex] = useState(0);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
        console.log(index);
    }

    const [fade, setFade] = useState(true);

    useEffect(() => {
        setFade(false); // start fade-out
        const timeout = setTimeout(() => setFade(true), 200); // fade-in new image
        return () => clearTimeout(timeout);
    }, [hoverIndex]);


    useGSAP(()=>{
        gsap.from(".home-animation-1",{
            scrollTrigger:{
                trigger: ".home-animation-1",
                toggleActions:"restart none none none",
            },
            x:-400,
            duration:1,
            opacity:0,
            stagger: 0.3,
        })
    })


    return (
        <>
            <Header/>
            <div className={'tp-home w-full bg-[#fefdf7] pt-[7rem]'}>
                {/*<Swiper spaceBetween={50} slidesPerView={1} pagination={{clickable: true}} autoplay={true} effect={"cube"} modules={[Navigation,Autoplay,EffectFade,A11y,Scrollbar,Pagination]} className={"h-[90%] w-[90%] rounded-4xl"}>*/}
                {/*    <SwiperSlide className={"flex border-red-600"}>*/}
                {/*        <div className={"w-full h-full flex items-center justify-center"}>*/}
                {/*          <img src={carousal1} alt="carousal1"/>*/}
                {/*        </div>*/}
                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide>*/}
                {/*        <img src={carousal2} alt="carousal1" width="100%" height="100%"/>*/}

                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide>*/}
                {/*        <img src={carousal3} alt="carousal1" width="100%" height="100%"/>*/}

                {/*    </SwiperSlide>*/}
                {/*    <SwiperSlide>*/}
                {/*        <img src={carousal2} alt="carousal1" width="100%" height="100%"/>*/}
                {/*    </SwiperSlide>*/}
                {/*</Swiper>*/}

                <div className={"tp-box-1 flex items-center justify-center"}>
                    <span className={"tp-home-header-1 text-[5em] text-center font-bold p-2 text-[#091e44] home-animation-1"}>
                    Transform your business with digital marketing solutions
                    </span>
                </div>
                <div className={"w-max m-auto mt-0 mb-0 flex items-center justify-center flex-col "}>
                    <Link to={"/services"}
                          className={"flex tp-home-header-btn gap-3 home-animation-1  bg-[#091e42] p-6 rounded-4xl text-amber-50 cursor-pointer font-bold hover:bg-[#091e68]"}>
                        <span className={""}>
                             Explore Our Services
                        </span>
                        <span className={""}>
                            <FontAwesomeIcon className={"rotate-45"} icon={faArrowUp}/>
                        </span>
                    </Link>
                </div>
                <div className={"tp-box-3"}>
                    <div className={"tp-home-img-1"}>
                        <img src={banner} alt="banner" className={"banner object-cover home-animation-1"}/>
                    </div>
                </div>
            </div>
            {/*1st content starting*/}
            <div className={"tp-content h-[70lvh] m-auto mt-0 mb-0 flex flex-col items-center justify-center gap-10"}>
                <div className={"tp-content-inner1 flex flex-col items-center w-[70%] gap-8 tp-content-header-1"}>
                    <span className={"text-lg select-none"}>--------Who we are--------</span>
                    <span className={"text-4xl text-center font-semibold select-none"}>Our team consists of digital marketing experts who are passionate about helping businesses succeed online.</span>
                </div>
                <div className={"flex flex-wrap w-[93%] gap-8 justify-center"}>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}
                                     className="tp-card w-[25rem] h-max  p-5 relative flex justify-evenly flex-col">
                                    {/*<div className={"tp-card-in w-[90%] h-[90%] flex p-4 flex-col border-1"}>*/}
                                    <span
                                        className="text-5xl font-bold h-[6rem] flex items-center text-[#583bac] select-none">{item.stats}{item.operators}</span>
                                    <div className={"flex gap-4 flex-col  h-[10rem] justify-center"}>
                                        <p className="tp-home-card-content text-2xl select-none">{item.content}</p>
                                        <p className="tp-home-card-desc text-lg text-gray-500 select-none">{item.description}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/*2st content starting*/}
            <div className={"tp-content-services flex items-center w-[85%] m-auto mt-0 mb-0 flex-col h-[80lvh] justify-center gap-10"}>
                <div className={"tp-content-header-2 h-max p-2 flex items-center justify-evenly gap-10"}>
                    <div className={"w-[45%] h-[10rem] p-2 flex flex-col  justify-center gap-10 "}>
                        <span className={"text-lg"}>Our Services -------------------</span>
                        <span className={"text-5xl font-semibold"}>What we can do for <br/><span
                            className={"text-[#5439a3]"}>our clients</span></span>
                    </div>
                    <div className={"w-[30%] flex h-[10rem] items-center justify-evenly"}>
                        <p className={"text-lg"}>
                            We’re a team of strategists working globally with the largest brands, we believe that
                            progress only happens when you refuse to play things safe. We combine ideas and behaviors.
                        </p>
                    </div>
                </div>
                {/*container starting*/}
                <div className="w-[85%] h-max tp-content-header-3">
                    <div
                        className="tp-home-serv-sect1 w-full h-max flex items-center justify-center rounded-4xl bg-[#0a071f]">
                        {/* Left Buttons */}
                        <div
                            className="tp-home-serv-sect1-fc flex items-center justify-evenly flex-col w-[25rem] h-[35rem]">
                            {homePageData.map((item, index) => (
                                <button
                                    key={item.id}
                                    className="text-white hover:text-white hover:bg-orange-500 border rounded-4xl w-[80%] h-[4rem]"
                                    onClick={() => handleInputChange(index)}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>

                        {/* Right Content */}
                        <div
                            className="tp-home-serv-sect2 border-l-1 border-amber-50 w-[70%] h-max flex items-center justify-center">
                            <div className="text-white w-[80%] h-max flex justify-center flex-col gap-10">
                                <div className="w-[80%] flex gap-10 flex-col tp-home-serv-sect2-text0">
                                    <span className="text-4xl font-semibold">{homePageData[Index].title}</span>
                                    <p>{homePageData[Index].subtitle}</p>
                                </div>
                                <div className="p-2 flex flex-col gap-8 tp-home-serv-sect2-text1">
                                    {homePageData[Index].services.map((service, i) => (
                                        <div key={i} className="flex items-center gap-3 pb-2">
                                            <FontAwesomeIcon icon={faCheck} size="xl"/>
                                            <span>{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={"tp-content-features h-[70lvh] w-[85%] m-auto mt-[7rem] flex items-center justify-center text-white select-none "}>
                <div
                    className={"m-auto w-[85%] h-max bg-[#00001d] rounded-4xl flex items-center justify-evenly tp-home-serv-sect border-1"}>
                    <div className={"tp-content-features0 w-[50%] h-max flex flex-col gap-1"}>
                        <div className={"tp-content-features0-text h-[10rem] flex justify-center flex-col gap-6"}>
                            <span>Features -------</span>
                            <span className={"text-3xl font-semibold"}>
                                    The power of  digital marketing
                                </span>
                        </div>
                        <div className={"flex flex-wrap gap-9 pb-8 w-[100%] items-start"}>
                            {homepageData2.map((item, index) => {
                                return (
                                    <div key={index} className={"flex flex-col w-[45%] gap-4 h-max "}>
                                        <span className={"text-2xl"}>0{item.id}</span>
                                        <hr className={"h-max"}/>
                                        <span className={"text-2xl"}>
                                            {item.title}
                                        </span>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={"tp-content-features1 w-[30%] h-[80%] flex items-end"}>
                        <div className={"tp-home-feature-gradient overflow-hidden"}>
                            <img src={featureImg} className={"brightness-90"} width={"100%"} height={"100%"}
                                 alt="yena"/>
                        </div>
                    </div>
                </div>
            </div>

            {/*Process container*/}
            <div className={"tp-content-process h-[85lvh] w-[85%] m-auto mt-[7rem] flex flex-col gap-6"}>
                <div
                    className={"flex flex-col gap-1 w-full h-[11rem] items-center justify-evenly tp-content-process0 text-center"}>
                    <span>------Process-----</span>
                    <span className={"text-5xl font-semibold"}>A systematic approach to<span
                        className={"text-[#5e3bab]"}><br/>digital marketing</span></span>
                </div>
                <div className={"flex text-black h-max w-full tp-content-process1"}>
                    <div className={"flex w-[50%] h-full items-center justify-center tp-content-process1-inner"}>
                        <div className="w-[50%] flex flex-col justify-center items-center gap-10  h-full">
                            <div className="tp-process-1 w-[100%]">
                                <img
                                    src={processImg1}
                                    className="object-cover w-full h-full rounded-full tp-process-img1"
                                    alt=""
                                />
                            </div>
                            <div className="tp-process-2 w-[100%]">
                                <img
                                    src={processImg2}
                                    className="object-cover w-full h-full rounded-full tp-process-img1"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="w-[100%] flex flex-col justify-center items-center gap-10 h-full">
                            <div className="tp-process-3 w-[100%]">
                                <img
                                    src={processImg3}
                                    className="object-cover w-full h-full rounded-full tp-process-img1"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className={"flex flex-col justify-center gap-6 w-[50%] tp-content-process1-inner1 h-full"}>
                        {
                            homepageData4.map((item, index) => {
                                return (
                                    <div key={index} className={"gap-4 flex flex-col w-[100%] h-max"}>
                                        <div className={"flex items-center  gap-6"}>
                                            <span className={""}>
                                                <FontAwesomeIcon icon={item.icon} size="4x"/>
                                            </span>
                                            <span className={"text-2xl font-semibold"}>{item.title}</span>
                                        </div>
                                        <div className={" ml-30"}>{item.description}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/*Who choose us Container*/}
            <div className={"tp-content-whychooseus h-[100lvh] w-[85%] m-auto mt-[7rem] flex flex-col gap-7 select-none"}>
                <div className={"tp-content-whychooseus0 h-[15rem] w-[100%] flex"}>
                    <div className={"flex w-[50%] flex-col gap-5 justify-center"}>
                        <span className={"text-lg"}>Why Choose Us-----</span>
                        <span
                            className={"text-5xl text-[#002221] leading-tight font-semibold"}>Effective and affordable <span
                            className={"text-[#5e3bab]"}>marketing solutions</span> </span>
                    </div>
                    <div className={"flex w-[50%] flex-col justify-center"}>
                        <span className={"text-lg"}>This agency is not just its expertise but a personalized approach that tailors strategies to each clients unique needs.</span>
                    </div>
                </div>
                <div className={"tp-content-whychooseus1 flex overflow-hidden h-max gap-10"}>
                    <div className={"tp-content-whychooseus1-left flex flex-1 justify-start h-[40rem]"}>
                        <div className={"w-[100%] h-[40rem] object-cover flex flex-col gap-6"}>
                            {
                                homepageData3.map((item, index)=> {
                                    return (
                                        <div key={index} className={"w-[100%] border-b-[.09rem] flex flex-col gap-2 tp-content-whychooseus1-left-head h-full"}>
                                            <div className={"flex w-full"}>
                                                <span className={"h-[100%] w-[10%] bg-[white] text-red-800 flex items-center justify-start text-4xl"}>0{item.id}</span>
                                                <span className={"h-[100%] w-[80%] bg-[white] text-black flex items-center justify-start text-4xl"} onClick={()=>handleMouseEnter(index)}>{item.title}</span>
                                            </div>
                                            <div className={"flex justify-start w-full"}>
                                                <span className={"pt-1 pb-1 ml-20 text-lg"}>{hoverIndex === index && <TypingDescription text={homepageData3[hoverIndex].description} trigger={hoverIndex === index}/>}</span>
                                            </div>
                                            <div className={`w-[100%] ${hoverIndex===index && " h-[20rem]"} h-[0] flex items-start justify-center relative overflow-hidden tp-why-image-container`}>
                                                <img src={homepageData3[hoverIndex].src} className={`w-[95%] h-[95%] object-cover rounded-2xl transition-opacity duration-500 ease-in ${
                                                    fade ? "opacity-100" : "opacity-0"
                                                }`} alt=""/>
                                            </div>
                                        </div>
                                    )})
                            }
                        </div>
                    </div>
                    <div className={"tp-content-whychooseus1-right w-[50%] h-[40rem] flex items-start justify-center relative overflow-hidden"}>
                        <img src={homepageData3[hoverIndex].src} className={`w-[100%] h-[100%] object-cover rounded-3xl transition-opacity duration-500 ease-in ${
                            fade ? "opacity-100" : "opacity-0"
                        }`} alt=""/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};


const TypingDescription = ({text, trigger}) => {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {

        if (!trigger) {
            setDisplayed("");
            return;
        }

        let i = 0;
        setDisplayed(""); // reset on re-trigger
        const interval = setInterval(() => {
            setDisplayed((prev) => prev + text.charAt(i));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, 20); // typing speed in ms

        return () => clearInterval(interval);
    }, [text, trigger]);

    return <span>{displayed}</span>;
};


export default Home;