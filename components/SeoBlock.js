import React, { useContext } from "react";
import ModalContext from "./ModalContext";
import ReactHtmlParser from "react-html-parser";

const SeoBlock = ({ heading, image, content, withButton }) => {
  const { openModal } = useContext(ModalContext);

  return (
    <section className="simpleBlock seo withIllustration">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {heading ? (
              <h2 className="simpleBlock-title seo-title withGrid">
                {ReactHtmlParser(heading)}
              </h2>
            ) : null}
            {content ? (
              <div className="simpleBlock-description seo-description">
                {ReactHtmlParser(content)}
              </div>
            ) : null}
            {withButton ? (
              <button
                className="btn btn--primary contactUsBtn"
                onClick={openModal}
              >
                Contact Us
              </button>
            ) : null}
          </div>
          <div className="col-lg-6">
            {image ? (
              <div className="seo-img withGrid">
                <img src={image} alt="Softgames" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoBlock;
