import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoIntro from "./Components/VideoIntro/VideoIntro";

const App = () => {
  const [videoFinished, setVideoFinished] = useState(false);

  return (
    <>
      {!videoFinished ? (
        <VideoIntro onVideoEnd={() => setVideoFinished(true)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <MyWork />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
