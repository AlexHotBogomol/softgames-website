import React, { Fragment } from "react";
import App from "next/app";
import Head from "next/head";
import Link from 'next/link';
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Modal from "../components/Modal/Modal";
import Form from "../components/Form/Form";
import ModalContext from "../components/ModalContext";
import { Tina, TinaCMS } from 'tinacms';
import { GitClient } from '@tinacms/git-client'

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      isOpenFormModal: false,
      isOpenThankYouModal: false
    };
    this.cms = new TinaCMS();
    const client = new GitClient('http://localhost:5000/___tina');
    this.cms.registerApi('git', client)
  }

  options = {
    sidebar: {
      hidden: process.env.NODE_ENV === "production",
      position: "displace",
    }
  };

  openModal = name => {
    document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    this.setState({
      [`isOpen${name}`]: true
    });
  };

  closeModal = name => {
    document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    this.setState({
      [`isOpen${name}`]: false
    });
  };

  render() {
    const { Component, pageProps } = this.props;
    const { isOpenFormModal, isOpenThankYouModal } = this.state;
    return (
      <Tina cms={this.cms} {...this.options.sidebar}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <DefaultSeo {...SEO} />
        <ModalContext.Provider
          value={{
            openModal: () => this.openModal("FormModal"),
            closeModal: () => this.closeModal("FormModal"),
            openThankYouModal: () => this.openModal("ThankYouModal"),
          }}
        >
          <Component {...pageProps} />
        </ModalContext.Provider>
        <Modal
          isOpen={isOpenFormModal}
          onClose={() => this.closeModal("FormModal")}
          bgColor="#EEEEEE"
        >
          <div className="formModal-content">
            <h3 className="formModal-heading">Sign Up to the leading HTML 5 games network!</h3>
            <Form
              websiteInput
              categorySelect
              closeFormModal={() => this.closeModal("FormModal")}
              openThankYouModal={() => this.openModal("ThankYouModal")}
            />
          </div>
        </Modal>
        <Modal
          isOpen={isOpenThankYouModal}
          onClose={() => this.closeModal("ThankYouModal")}
          bgColor="#ffffff"
        >
          <div className="thankYou-content withIllustration">
            <h1 className="thankYou-heading">
              Thanks for your message,<br/>
              we will answer it as soon as posible
            </h1>
            <Link href="/">
              <button className="btn btn--primary" onClick={() => this.closeModal("ThankYouModal")}>
                To home page
              </button>
            </Link>
          </div>
        </Modal>
      </Tina>
    );
  }
}

export default MyApp;
