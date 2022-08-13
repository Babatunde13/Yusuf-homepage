import React from "react";
import Navbar from "./component/Navbar";
import SectionOne from "./component/Section0ne";
import SectionTwo from "./component/SectionTwo";
import SectionThree from "./component/SectionThree";
import SectionFour from "./component/SectionFour";
import SectionFive  from "./component/SectionFive";
import SectionSix from "./component/SectionSix";
import Attribution from "./component/Attribution";




export default function App(){
    return (
        <div>
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <Attribution/>
        </div>
    )
}
