// import logo from './logo.svg';
import "./App.css";
import "./components/style.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Typed from 'typed.js';
import React from "react";


function App() {
  
  React.useEffect(() => {
    
    const typed = new Typed(".multi", {
      strings: ['Frontend Developer', 'Backend Developer'],
      typeSpeed: 100,
      backSpeed:100,
      backDelay:1000,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
