import React from 'react';
import AppartementsList from '../components/Product/Appartements-list'
import Banner from '../components/Header/Banner'
import '../style/Home.scss';

function Home() {

  return (
    <div className="App">

      <Banner/>
      <AppartementsList/>

    </div>
  );
}

export default Home;