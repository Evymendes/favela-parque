// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home";
import Program from "./pages/Program";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/o-programa" element={<Program />} />

        {/* <UnauthenticatedRoute exact path='/' component={Home} />
				<UnauthenticatedRoute exact path='/cadastro-da-organizacao' component={OngFormScreen} /> */}
        {/* <PrivateRoute exact path='/config/precisa-de-ajuda' component={NeedHelp} /> */}
      </Routes>
    </Router>
  )
};

export default AppRoutes;
