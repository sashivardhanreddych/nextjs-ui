import React from 'react';
import MiniHeader from '../MiniHeader/MiniHeader';
import MainHeader from '../MainHeader/MainHeader';
import LandingCarousel from '../Carousel/Carousel';
import AboutUsLanding from '../AboutUsLanding/AboutUsLanding';
import OurLocations from '../OurLocations/OurLocations';
import CenterOfExcellence from '../CenterOfExcellence/CenterOfExcellence';
import PatienceFeedback from '../PatienceFeedback/PatienceFeedback';
import FilterSection from '../FilterSection/FilterSection';
import Footer from '../Footer/Footer';

const LandingPage = () =>{
    return(
        <div style={{height: "100%", background: "#cd0"}}>
          <MiniHeader />
          <MainHeader />
          <FilterSection />
          {/* <LandingCarousel />
          <AboutUsLanding />
          <OurLocations />
          <CenterOfExcellence />
          <PatienceFeedback /> */}
          <Footer />
        </div>
    );
}

export default LandingPage;