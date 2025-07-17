import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import Collection from "./Collection";
const Home = ()=>{

    return(

        <div className="flex flex-col min-h-screen ">
        <Navbar/>
        <main className="flex-grow">
        <Banner/>
        </main>
        <Collection></Collection>
        <Footer/>
        </div>
        
        
    )
}

export default Home