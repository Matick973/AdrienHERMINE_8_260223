import React from 'react';
import {
      BrowserRouter as Router,
      Navigate,
      Route,
      Routes,
} from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Home from '../../pages/Home';
import About from '../../pages/About';
import ErrorPage from '../../pages/Error-page';


function Navigation() {
      return (
            <Router>
                  <Header/>
                  <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>} />,
                        <Route path="*" element={<Navigate replace to= {<ErrorPage/>} />} />
                  </Routes>
                  <Footer/>
            </Router>
      )
}

export default Navigation

//https://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom