import React from 'react';
import Header from "../header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import jobData from "../../assets/JsonData/JobData.js";
import "./Career.css"

const Career = () => {

    const [hoverindex, setindex] = React.useState(0);

    const updateContent = (id) => {
        setindex(id);
    }

    return (
        <>
            <Header/>
            <div className={"tp-career-main h-max flex flex-col  items-center bg-[#fefdf7] pb-8 gap-10"}>
                <div className={"tp-career0 w-[70%] text-center flex flex-col h-max gap-5 pt-20 items-center"}>
                    <span>------Career Page-------</span>
                    <span className={"text-5xl font-semibold text-[#130059]"}>Let's build something together for the upcoming future</span>
                </div>
                <div className={"tp-career1 w-[90%] p-2 flex flex-col gap-6 items-start"}>
                    <span>
                        Join our team---------
                    </span>
                    <span className={"text-5xl text-[#130059]"}>
                        We are actively hiring for
                    </span>
                </div>
                <div className={"tp-career2 w-[90%] flex h-full justify-evenly flex-col"}>
                    <div className={"w-[100%] h-max flex justify-start flex-wrap gap-4 items-center"}>
                        {
                            jobData.map((item, index) => {
                                return (
                                    <button key={index}
                                            className={`p-3 ${hoverindex===index? "bg-[#000231] text-[#ffffff]" : "bg-[#cbcbcb] text-[#091e42] "} w-max rounded-3xl cursor-pointer hover:scale-105 transition border-[.2] text-lg`}
                                            onClick={() => updateContent(index)}>{item.title}</button>
                                )
                            })
                        }
                    </div>
                    <div className={"w-[100%] transition h-max"}>
                        {/* Job Title */}
                        <h1 className="text-4xl pt-8 font-bold text-[#091e42] mb-4">{jobData[hoverindex].title}</h1>

                        {/* Loop through sections */}
                        {jobData[hoverindex].sections.map((section, secIndex) => (
                            <div key={secIndex} className="mb-6 p-3">
                                <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>

                                {/*(subHeadings) */}
                                {section.items &&
                                    section.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="mb-3 pt-1">
                                            <h3 className="text-xl font-medium mt-2">{item.subHeading}</h3>
                                            <ul className="list-disc list-inside pl-4">
                                                {item.points.map((point, pointIndex) => (
                                                    <li key={pointIndex}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                {/*points*/}
                                {section.points && (
                                    <ul className="list-disc list-inside pl-4">
                                        {section.points.map((point, pointIndex) => (
                                            <li key={pointIndex}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={"p-2 flex items-center justify-start"}>
                        <a href={jobData[hoverindex].url}  className={"border-1 p-2 hover:bg-[#091e42] hover:text-white border-[.1%]"}>Apply Now</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Career;