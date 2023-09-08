import React from 'react';
import MiniHeader from '../MiniHeader/MiniHeader';
import MainHeader from '../MainHeader/MainHeader';
import LandingCarousel from '../Carousel/Carousel';
import AboutUsLanding from '../AboutUsLanding/AboutUsLanding';
import OurLocations from '../OurLocations/OurLocations'
import Footer from '../Footer/Footer';
const LandingPage = () =>{
    return(
        <div style={{height: "100%", background: "#cd0"}}>
          <MiniHeader />
          <MainHeader />
         {/* <div className="flex flex-col items-center justify-center min-h-screen"> */}
            {/* <h1 className="text-3xl font-bold mb-4">Image Carousel</h1> */}
          <LandingCarousel />
          <AboutUsLanding />
          <OurLocations />
         {/* </div> */}
          <Footer />
        </div>
    );
}

export default LandingPage;