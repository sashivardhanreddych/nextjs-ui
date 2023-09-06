import React from 'react';
import MiniHeader from '../MiniHeader/MiniHeader';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
const LandingPage = () =>{
    return(
        <div style={{height: "100%", background: "#cd0"}}>
         <MiniHeader />
         <MainHeader />
         <Footer />
        </div>
    );
}

export default LandingPage;