import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import MainContainer from './MainContainer';

const Homepage = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Homepage;