import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({children}) => {

  return (
    <div className="app">
      <Header/>
      <main id="content">
        {children}
      </main>
      <Footer/>
    </div>
  )
};
export default Layout