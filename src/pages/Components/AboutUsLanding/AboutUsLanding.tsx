import React, { useState, useEffect } from "react";
import Image from "next/image";
import { treatYouWell } from '../../../jsondata/constantImages';
import { AboutAvisdata } from '../../../jsondata/JsonData';

const AboutUsLanding = () => {
    // const [isClient, setIsClient] = useState(false)
    // useEffect(() => {
    //     setIsClient(true)
    //   }, [])

  return (
    <section className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="md:col-span-2 lg:col-span-3">
            <p className="text-xl font-bold mb-4">
                We’ll Treat You Well
            </p>
            <p className="text-gray-700">
                At Avis, we give utmost importance to provide care, attention, and high-quality medical services to our patients. 
                This promise to patients, employees, and society at large is ingrained in the heart of each Asterian and is what 
                inspires us to serve, innovate, and grow.
            </p>
            <p className="my-6">
                <a href="#" className="text-blue-600 p-3 border-2 rounded border-indigo-600 hover:underline hover:bg-zinc-300 hover:text-white">KNOW MORE</a>
            </p>
        </div>
        <div className="md:col-span-1 bg-gray-400 mt-2">
          <img src={treatYouWell} alt="About Avis" className="w-full h-96" />
          {/* <Image
            src={treatYouWell}
            alt="About Avis"
            width={100}
            height={500}
            className="w-full h-96" 
          /> */}
        </div>

        <div className="flex flex-wrap justify-center">
            {AboutAvisdata.map((item, index) => (
                <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center"
                >
                  <div className="text-3xl font-bold">{item.count}</div>
                  <div className="text-lg font-semibold mt-2">{item.name}</div>
                  <div className="mt-2">{item.description}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsLanding;
