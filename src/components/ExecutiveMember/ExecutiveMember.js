import React from 'react';
import ExecutiveCard from "../Card/ExecutiveCard.js"
import image1 from "../../assets/example2.jpg"
import Header from "../header/Header"
function ExecutiveMember(props) {
    return (
        <>
        <Header active="aboutus"/>
        <div style={{display:"flex"  ,  flexWrap:"wrap" , margin:"2rem"}}>
                <ExecutiveCard image={image1} position="President" name="Arun Sharma"/>
                <ExecutiveCard image={image1}  position="Vice President" name="Arun Sharma"/>
                <ExecutiveCard  image={image1}  position="Vice President" name="Arun Sharma"/>
                <ExecutiveCard  image={image1}  position="Vice President" name="Arun Sharma"/>
                <ExecutiveCard  image={image1}  position="Vice President" name="Arun Sharma"/>
                <ExecutiveCard  image={image1}  position="Vice President" name="Arun Sharma"/>
        </div>
        </>
    );
}

export default ExecutiveMember;