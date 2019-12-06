import React, { useContext } from "react";
import ModalContext from "./ModalContext";
import ReactHtmlParser from "react-html-parser";

const AboutUsBlock = ({
  heading,
  image,
  content,
  withButton,
  className,
  id
}) => {
  const classes = [
    "simpleBlock",
    "aboutUsBlock",
    "withIllustration",
    className
  ];
  const { openModal } = useContext(ModalContext);

  return (
    <section className={classes.join(" ")} id={id}>
      <div className="container">
        {heading ? (
          <div className="row">
            <div className="col-12">
              <h2 className="simpleBlock-title aboutUsBlock-title">
                {ReactHtmlParser(heading)}
              </h2>
            </div>
          </div>
        ) : null}
        <div className="row">
          <div className="col-lg-6">
            {image ? (
              <div className="aboutUsBlock-img withGrid">
                <img src={image} alt="Softgames" />
              </div>
            ) : null}
          </div>
          <div className="col-lg-6">
            {content ? (
              <div className="simpleBlock-description aboutUsBlock-description">
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
        </div>
      </div>
    </section>
  );
};

export default AboutUsBlock;
