import React, { useRef, useState, useEffect } from "react";
// import { treatYouWell } from '../../../jsondata/constantImages';
import { ourHospitals } from '../../../jsondata/JsonData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../OurLocations/OurLocations.module.css";
// import styles from "./PatienceFeedback.module.css";

const PatienceFeedback = () => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

    function renderCard(item: any) {
        return (
            <div
                key={item.place}
                className={`${styles["card-con"]} p-3 hover:py-4 text-left justify-center text-white rounded-lg bg-zinc-800 hover:bg-teal-600 `}
                // style={{
                //     width: "95%",
                //     display: "inline-block",
                //     backgroundImage: `url(${item.imageUrl})`,
                //     backgroundSize: 'cover',
                //     backgroundRepeat: 'no-repeat',
                //     backgroundPosition: 'center center',
                //     height: '400px',
                // }}
                >
                <div className="bgimage-card" style={{
                    width: "100%",
                    display: "inline-block",
                    // backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    height: '360px',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    opacity: "0.5",
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    // zIndex: 1,
                    // background: "#000",
                }}></div>
                {/* <div className="content-card bg-zinc-800 "> */}
                    <div><span className="relative z-2 text-thin bg-teal-500 font-thin">{item.place}</span></div>
                    <div className="relative z-2 text-lg font-semibold mt-2">{item.hospital}</div>
                    <div className="relative z-2 mt-2">{item.address}</div>
                    <div className="relative z-2 mt-2">
                        <a href={item.getDirection} className="font-thin text-xs">GET DIRECTIONS</a>
                    </div>
                    <div className="relative z-2 mt-2">
                        <p className="font-light text-gray-300">Emergency contact</p>
                        <p className="font-medium">{item.contactNumber}</p>
                    </div>
                    <div className={`relative z-2 ${styles["count-section"]}`}>
                        <div className={`${styles["count-card"]}`}>
                            <span className={`${styles["icon-card"]}`}>
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path>
                                </svg>
                            </span>
                            <span>
                                <p className="font-semibold">{item.bedsCount}</p>
                                <p className="font-thin">Beds</p>
                            </span>
                        </div>
                        <div className={`${styles["count-card"]}`}>
                            <span className={`${styles["icon-card"]}`}>
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path>
                                </svg>
                            </span>
                            <span>
                                <p className="font-semibold">{item.doctorCount}</p>
                                <p className="font-thin">Doctors</p>
                            </span>
                        </div>
                        <div className={`${styles["count-card"]}`}>
                            <span className={`${styles["icon-card"]}`}>
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path>
                                </svg>
                            </span>
                            <span>
                                <p className="font-semibold">{item.specialization}</p>
                                <p className="font-thin">Specializations</p>
                            </span>
                        </div>
                    </div>
                    <div>
                        <button className={`relative z-2 ${styles["know-btn"]} border-2 p-2`}>Know More &rarr;</button>
                    </div>
                {/* </div> */}
            </div>
        );
    }
      

  return (
    <section className={`${styles["container"]} text-white mx-auto p-6`}>
        <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Our Locations</h2>
            <div className="flex flex-row justify-between items-center">
                <p className="mb-2 w-10/12">
                    Aster DM Healthcare is an emerging healthcare provider in India, with an inherent emphasis on clinical excellence. We provide primary, secondary, tertiary, and quaternary healthcare through our network of 14 hospitals across India.
                </p>
                <span className="flex justify-end">
                    <a href="#" className="text-white-500  hover:text-green-600">View All  
                        <span className='font-semibold'>&#8594;</span>
                    </a>
                </span>
            </div>
        </div>
        <div className={styles["carousel-slider"]}>
            <Slider ref={sliderRef} {...settings}>
                {ourHospitals.map((item: any) => renderCard(item))}
            </Slider>
        </div>

        <div className={`mt-4 ${styles["buttons-con"]}`}>
            <button
                className={`${styles["left-button"]} translate-x-0.5 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 mx-3`}
                onClick={() => sliderRef.current?.slickPrev()}
            >
                &larr;
            </button>
            <button
                className={`${styles["right-button"]} translate-x-0.5 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 mx-3`}
                onClick={() => sliderRef.current?.slickNext()}
            >
                &rarr;
            </button>
        </div>
    </section>
  );
};

export default PatienceFeedback;
