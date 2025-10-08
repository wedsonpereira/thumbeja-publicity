import React, {useRef, useState} from 'react';
import Header from "../header/Header.jsx";
import "./contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import contactdetails from "/src/assets/JsonData/contactDetails.jsx";
import {faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import toast, {Toaster} from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {

    function handleContactUrlClick(item){
        window.open(item.url);
    }

    const container = useRef('')

    useGSAP(() => {

        gsap.from('.tp-contact-lbl', {y: -300, duration: 1, stagger: {from: "end", each: 0.2}});

        gsap.from('.tp-contact-card', {
            duration: 1,
            stagger: {
                from: "center", each: 0.3}, yoyo: true, opacity: 0, ease: 'expo.in'
        });



    }, {scope: container});

    const {register, reset, handleSubmit} = useForm();

    const [isSuccess, setIsSuccess] = useState(false);

    const accessKey = "085ca770-a329-45fd-a838-5061025e036a";

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            subject: "Website client form submission details",
            replyto:"email"
            // ... other settings
        },
        onSuccess: (msg, data) => {
            setIsSuccess(true);
            // setMessage(msg)
            toast(msg)
            console.log("this is data"+data)
            reset();
        },
        onError: (msg, data) => {
            setIsSuccess(false);
           // setMessage(msg)
            toast(msg)
            console.log(data);
        },
    });


    useGSAP(()=>{

        gsap.from('.tp-contact-scroll-animation-1', {y:-50,duration:0.7,opacity:0,ease:"power1.inOut",
            scrollTrigger:{
                trigger: '.tp-contact-scroll-animation-1',
                toggleActions:'restart none none reverse',
                start:'top+=300px bottom-=100px',
                end:'top-=200px top',
            }})

         gsap.from('.tp-contact-scroll-animation-2', {x:-100,stagger:0.2,duration:1,opacity:0,ease:'power1.in',
            scrollTrigger:{
                trigger: '.tp-contact-scroll-animation-2',
                start:'top center+=300px',
                end:'top-=300px top',
                toggleActions:'restart none none reverse',
            }})



    },[])

    console.log("this is is isSuccess "+isSuccess);
    // console.log("this is result"+result);

    return (<>
            <Header/>
            <div ref={container} className={"tp-contact-main pt-24 flex items-center flex-col gap-6 w-full h-max bg-[#fefdf7] pb-8"}>
                <div className={"tp-contact-header w-full h-[15%] flex gap-6 flex-col"}>
                    <div className={" tp-contact-lbl w-full flex items-center justify-center"}>
                        <span>Contact Us</span>
                    </div>
                    <div className={""}>
                        <span className={"tp-contact-lbl text-5xl w-full flex text-center items-center justify-center"}>Want to Get in touch with us?</span>
                    </div>
                </div>
                {/*contact card*/}
                <div className={"w-[100%] h-max flex flex-wrap items-center justify-center pt-2 gap-5"}>
                    {
                        contactdetails.map((item, index) => {
                            return (
                                <div key={index}
                                     className="bg-amber-50 tp-contact-card w-[90%] sm:w-2/3 md:w-1/2 lg:w-[25%] h-[22rem] rounded-2xl p-4 flex items-center justify-evenly flex-col tp-contact-lbl">
                                    <div className={"flex items-center justify-center h-[40%]"}>
                                        <span
                                            className={"w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-700 rounded-full flex items-center justify-center"}
                                            onClick={() => handleContactUrlClick(item)}>
                                            <FontAwesomeIcon icon={item.icon} size={"2x"}
                                                             className={"sm:text-3x md:text-4x text-white"}/>
                                        </span>
                                    </div>
                                    <span className={"w-4/5 bg-[#2222223b] h-[0.5%] rounded-full"}></span>
                                    <div className={"h-[40%] flex items-center justify-center flex-col gap-3"}>
                                        <span className={"text-2xl"}>{item.text}</span>
                                        <p>{item.contact}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/*Contact form*/}
            <div className={"flex w-[100%] justify-evenly pt-20 h-max gap-10 bg-[#fefdf7] relative tp-contact-container"}>
                <div className={"w-[40%] p-5 pt-0"}>
                    <div className={"tp-animation-side-scroll p-2 tp-contact-scroll-animation-1"}>
                        <span className={"text-4xl"}>Contact us for a free consultation</span>
                    </div>
                    <div className={"tp-contact-dtl pt-9 tp-contact-scroll-animation-1"}>
                        <div className={"flex items-center gap-3 p-2"}>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <span className={"w-[70%] hover:text-blue-300 transition-shadow"}>Address</span>
                        </div>
                        <div className={"flex items-center gap-3 p-2 tp-contact-scroll-animation-1"}>
                            <FontAwesomeIcon icon={faPhone}/>
                            <span className={"hover:text-blue-300 transition-shadow"}>21651161611</span>
                        </div>
                    </div>
                    <hr className={"opacity-55 w-[100%] mt-8 mb-8 tp-horizontal-line"}/>
                    <div className={"tp-contact-sc-lk flex items-center gap-2 pt-5 tp-contact-scroll-animation-1"}>
                        <a href={"#"} className={"p-2 tp-contact-sc-hover-effect"}>
                            <FontAwesomeIcon size={"2xl"} className={"cursor-pointer"} icon={faFacebook}/>
                        </a>
                        <a href={"#"} className={"p-2 tp-contact-sc-hover-effect"}>
                              <FontAwesomeIcon size={"2xl"} icon={faInstagram}/>
                        </a>
                        <a href={"#"} className={"p-2 tp-contact-sc-hover-effect"}>
                            <FontAwesomeIcon size={"2xl"} icon={faTwitter}/>
                        </a>
                        <a href={"#"} className={"p-2 tp-contact-sc-hover-effect"}>
                            <FontAwesomeIcon size={"2xl"} icon={faLinkedin}/>
                        </a>
                    </div>
                </div>
                <form className="tp-animation-side-scroll flex w-[40%] flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <div className="tp-form-text-fields flex flex-col gap-10 overflow-hidden w-full h-full pr-4 ">
                        <div className="tp-contact-input-box flex flex-col gap-7 h-[70%]">
                            <input type="text" {...register("name", {required: true})} className="border-1 rounded-2xl tp-contact-scroll-animation-1"
                                   placeholder="Enter name"/>
                            <input type="text" {...register("company", {required: true})}
                                   className="border-1 rounded-2xl tp-contact-scroll-animation-1" placeholder="Company name"/>
                            <input type="tel" data-for="phoneNumber" minLength={10} maxLength={13}
                                   prefix={"+91"} {...register("number", {required: true})}
                                   className="border-1 rounded-2xl tp-contact-scroll-animation-1" placeholder="Phone"/>
                            <input type="email" {...register("email", {required: true})}
                                   className="border-1 rounded-2xl tp-contact-scroll-animation-1" placeholder="Email"/>
                            <textarea rows={3} cols={3} {...register("message", {required: true})}
                                      className="tp-contact-textarea border-1 rounded-2xl tp-contact-scroll-animation-1" placeholder="Message"/>
                        </div>
                        <div className="tp-contact-input-box2 h-max">
                            <div className="tp-contact-agreement rounded flex items-start">
                                <input type="checkbox" required={true}/>
                                <Link to={"/info"} className={"hover:text-[blue] tp-contact-scroll-animation-1"}> All agree to the terms &
                                    conditions.</Link>
                            </div>
                            <div className="rounded text-white tp-submit-btn tp-contact-scroll-animation-1">
                                <button type="submit" className="rounded-4xl w-[30%] bg-[#091e42] p-5 h-[100%] hover:bg-[#4169E1] transition ">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <Toaster toastOptions={{style: {background: "black", color: "white"}}} position={"top-center"}/>
            </div>
            <iframe id={"map"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7779.3339529053455!2d74.8310431605438!3d12.864773152630576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bf106d2fe49%3A0x4c9a2d8d669dde46!2sThumbeja%20Publicity!5e0!3m2!1sen!2sin!4v1758909845560!5m2!1sen!2sin"
                    width="600" height="500" className={"w-full tp-contact-scroll-animation-2"} loading={"eager"}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            <Footer/>
        </>
    );
};

export default Contact;