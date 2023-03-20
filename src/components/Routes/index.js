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
import ProductPage from '../../pages/Product-page';
import About from '../../pages/About';
import ErrorPage from '../../pages/Error-page';


function Navigation() {
      return (
            <Router>
                  <Header/>
                  <Routes>
                        <Route path="/" element={<Navigate replace to="/home" />} />
                        <Route path="/home" element={<Home/>} />
                        <Route path="/appartement/:id/" element={<ProductPage/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="*" element={ <ErrorPage/> } />
                  </Routes>
                  <Footer/>
            </Router>
      )
}

export default Navigation

//https://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom