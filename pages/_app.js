import React, { Fragment } from "react";
import App from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Modal from "../components/Modal/Modal";
import Form from "../components/Form/Form";
import ModalContext from "../components/ModalContext";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      isOpenFormModal: false,
      isOpenThankYouModal: false
    };
  }

  openModal = name => {
    this.setState({
      [`isOpen${name}`]: true
    });
  };

  closeModal = name => {
    this.setState({
      [`isOpen${name}`]: false
    });
  };

  render() {
    const { Component, pageProps } = this.props;
    const { isOpenFormModal, isOpenThankYouModal } = this.state;
    return (
      <Fragment>
        <DefaultSeo {...SEO} />
        <ModalContext.Provider
          value={{
            openModal: () => this.openModal("FormModal"),
            closeModal: () => this.closeModal("FormModal")
          }}
        >
          <Component {...pageProps} />
        </ModalContext.Provider>
        <Modal
          isOpen={isOpenFormModal}
          onClose={() => this.closeModal("FormModal")}
          bgColor="#EEEEEE"
        >
          <h3>Sign Up to the leading HTML 5 games network!</h3>
          <Form
            websiteInput
            categorySelect
            closeFormModal={() => this.closeModal("FormModal")}
            openThankYouModal={() => this.closeModal("ThankYouModal")}
          />
        </Modal>
        <Modal
          isOpen={isOpenThankYouModal}
          onClose={() => this.closeModal("ThankYouModal")}
          bgColor="#ffffff"
        >
          <h1>
            Thank You
            <br />
            for your registration!
          </h1>
        </Modal>
      </Fragment>
    );
  }
}

export default MyApp;
