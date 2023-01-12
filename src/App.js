import React from "react";


import {
  Blog,
  Categories,
  CTA,
  Features,
  Footer,
  Header,
  Navbar,
  Offer,
  Possibility,
} from "./containers/export.js";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="app__container">
        <Navbar/>
        <Header/>
        <Categories/>
        <Possibility/>
        <CTA/>
        <Offer/>
        <Features/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
