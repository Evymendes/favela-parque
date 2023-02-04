import React from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from "./pages/Home";
// import Notice from "./pages/Notice"
import Program from "./pages/Program";
// import Notice from './pages/Notice';
// import TheCommunities from "./pages/TheCommunities";
// import Gallery from "./pages/Gallery";
// import Directors from "./pages/Directors";
// import YouInThePark from "./pages/YouInThePark";
import Team from "./pages/Team";

const RoutesScreens = () => {
   return(
      <Router>
        <Routes>
           {/* <Route path="/" element={<Home/>} exact /> */}
           {/* <Route path="/" element={<Notice />} /> */}
           <Route path="/o-programa" element={<Program />} />
           <Route path="/equipe" element={<Team />} />
           {/* <Route path="/edital" element={<Notice />} />
           <Route path="/as-comunidades" element={<TheCommunities />} />
           <Route path="/galeria" element={<Gallery />} />
           <Route path="/realizadores" element={<Directors />} />
           <Route path="/vocenoparque" element={<YouInThePark />} />
           <Route path="/*" element={<Home/>} exact />  */}
        </Routes>
      </Router>
   )
}

export default RoutesScreens;
