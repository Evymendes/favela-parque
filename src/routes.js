import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Program from "./pages/Program";
import Notice from "./pages/Notice";

const RoutesScreens = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Routes>
            <Route path="/" element={<Home/>} exact />
          <Route path="/site-favela" element={<Home/>} exact />
            <Route path="/o-programa" element={<Program />} />
            <Route path="/edital" element={<Notice />} />
           {/* <Route path="/as-comunidades" element={<TheCommunities />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/realizadores" element={<Directors />} />
            <Route path="/vocenoparque" element={<YouInThePark />} />
            <Route path="/equipe" element={<Team />} /> */}
            <Route path="/*" element={<Home/>} exact />
         </Routes>
        </BrowserRouter>
    )
 }

 export default RoutesScreens;
