import React, { useState, useEffect } from "react";
// import { treatYouWell } from '../../../jsondata/constantImages';
import { ourHospitals } from '../../../jsondata/JsonData';

const OurLocations = () => {
    // const [isClient, setIsClient] = useState(false)
    // useEffect(() => {
    //     setIsClient(true)
    //   }, [])

  return (
    <section className="container bg-zinc-500 mx-auto p-6">
      {/* <div className="container bg-zinc-500 mx-auto"> */}
        <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Our Locations</h2>
            <div className="flex flex-row justify-between items-center">
                <p className="mb-2 w-10/12">
                    Aster DM Healthcare is an emerging healthcare provider in India, with an inherent emphasis on clinical excellence. We provide primary, secondary, tertiary, and quaternary healthcare through our network of 14 hospitals across India.
                </p>
                <span className="flex justify-end">
                    <a href="#" className="text-blue-500  hover:text-green-600">View All  
                        <span className='font-semibold'>&#8594;</span>
                    </a>
                </span>
            </div>
        </div>

        <div className="flex flex-wrap justify-center">
            {ourHospitals.map((item, index) => (
                <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center"
                >
                  <div className="text-3xl bg-white font-thin">{item.place}</div>
                  <div className="text-lg font-semibold mt-2">{item.hospital}</div>
                  <div className="mt-2">{item.address}</div>
                  <div className="mt-2">{item.getDirection}</div>
                  <div className="mt-2">{item.contactNumber}</div>
                  <div className="mt-2">{item.bedsCount}</div>
                  <div className="mt-2">{item.doctorCount}</div>
                  <div className="mt-2">{item.specialization}</div>
                </div>
            ))}
        </div>

        <div className="md:col-span-1 bg-gray-400 mt-2">
            <button
                className="transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                // onClick={prevSlide}
            >
                {"<"}
            </button>

            <button
                className="transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                // onClick={nextSlide}
            >
                {">"}
            </button>
        </div>
      {/* </div> */}
    </section>
  );
};

export default OurLocations;
