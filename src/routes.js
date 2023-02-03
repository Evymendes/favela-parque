import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Program from "./pages/Program";
// import Notice from "../Pages/Notice";
// import TheCommunities from "../Pages/TheCommunities";
// import Gallery from "../Pages/Gallery";
// import Directors from "../Pages/Directors";
// import YouInThePark from "../Pages/YouInThePark";
// import Team from "../Pages/Team";

const RoutesScreens = () => {
   return(
       <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
           <Route path="/" element={<Home/>} exact />
           <Route path="/o-programa" element={<Program />} />
           {/*<Route path="/edital" element={<Notice />} />
           <Route path="/as-comunidades" element={<TheCommunities />} />
           <Route path="/galeria" element={<Gallery />} />
           <Route path="/realizadores" element={<Directors />} />
           <Route path="/vocenoparque" element={<YouInThePark />} />
           <Route path="/equipe" element={<Team />} /> */}
           {/* <Route path="/*" element={<Home/>} exact /> */}
        </Routes>
       </BrowserRouter>
   )
}

export default RoutesScreens;