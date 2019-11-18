import React from 'react';

const AboutUsBlock = ({heading, image, content, withButton}) => {
  return (
    <section className="simpleBlock aboutUsBlock">
      <div className="container">
        {heading ? (
          <div className="row">
            <div className="col-12">
              <h2 className="simpleBlock-title aboutUsBlock-title"
                  dangerouslySetInnerHTML={{__html: heading}}
              />
            </div>
          </div>
        ) : null}
        <div className="row">
          <div className="col-lg-6">
            {image.url ? (
              <div className="aboutUsBlock-img withGrid">
                <img src={image.url} alt={image.alt}/>
              </div>
            ) : null}
          </div>
          <div className="col-lg-6">
            {content ? (
              <p className="simpleBlock-description aboutUsBlock-description"
                 dangerouslySetInnerHTML={{__html: content}}
              />
            ) : null}
            {withButton ? (
              <button className="btn btn--primary contactUsBtn">Contact Us</button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutUsBlock