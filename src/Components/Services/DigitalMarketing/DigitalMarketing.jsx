import React from 'react';  // Add this at the top
import './DigitalMarketing.css';
import Header from '../../header/Header.jsx';
import '../../../index.css'
import DigitalMarketingImg from '../../../assets/Images/DigitalMarketing.png';
const DigitalMarketing = () => {
    return (
        <div className="DigitalMarketing max-width-[2000px]">
            <Header />

                <h1 className="heading pt-[4rem] pl-[0.8rem]" style={{ textAlign: 'left', fontWeight: 'bold' , fontSize:"2.3rem" }}>  Digital Marketing</h1>
                    <p className="paragraph1 leading-8 pl-[0.7rem]" style={{ textAlign: 'left'}}>Digital marketing encompasses a dynamic array of strategies designed to connect businesses with their audiences in the digital realm.</p>
            <p className="paragraph1 leading-8 pl-[0.7rem] pt-[0.9rem]" style={{ textAlign: 'left'}}>Beyond promotion, digital marketing fosters authentic relationships by emphasizing storytelling and value creation, turning passive viewers into loyal advocates through personalized experiences and interactive content.</p>
            <div className="ImageSection ">
                <img src={DigitalMarketingImg} className="DigitalMarketingImg max-width[70%]" alt="Digital Marketing" />
            </div>
        </div>
    );
};

export default DigitalMarketing;