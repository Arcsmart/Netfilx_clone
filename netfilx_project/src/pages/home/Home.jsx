import React from 'react'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import Banner from '../../Commponent/banner/Banner'
import RowList from '../../Commponent/Rows/RowList/RowList'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList/>
      <Footer/>
    </>
  );
}

export default Home