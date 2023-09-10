import React, { useRef, useState, useEffect } from "react";
// import { treatYouWell } from '../../../jsondata/constantImages';
import { ourHospitals } from '../../../jsondata/JsonData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import styles from "../OurLocations/OurLocations.module.css";
import styles from "./CenterOfExcellence.module.css";

const CenterOfExcellence = () => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

    function renderCard(item: any) {
        return (
            <div
                key={item.place}
                className={`${styles["card-con"]} p-3 hover:py-4 text-left justify-center text-white rounded-lg hover:bg-teal-600 `}
                >

                {/* <div className="content-card bg-zinc-800 "> */}
                    <div><span className="relative z-2 font-thin">{item.place}</span></div>
                    <div className="relative z-2 text-lg font-semibold mt-2">{item.hospital}</div>
                    <div className="relative z-2 mt-2">{item.address}</div>
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
            <h2 className="text-3xl font-bold mb-2">Avis Center of Excellence</h2>
            <div className="flex flex-row justify-between items-center">
                <p className="mb-2 w-10/12">
                    Aster’s world-class, Centres of Excellence (COE) are an amalgamation of experienced doctors, 
                    state of the art technology, and the highest level of patient care and treatment. 
                    Our COE’s ensure that every aspect of your care is seamless and the team of experts work together to provide the care you need.
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

export default CenterOfExcellence;
