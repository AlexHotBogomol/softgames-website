import React from 'react';

const SeoBlock = ({heading, image, content, withButton}) => {
  return (
    <section className="simpleBlock seo">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {heading ? (
              <h2 className="simpleBlock-title seo-title withGrid"
                  dangerouslySetInnerHTML={{__html: heading}}
              />
            ) : null}
            {content ? (
              <p className="simpleBlock-description seo-description"
                 dangerouslySetInnerHTML={{__html: content}}
              />
            ) : null}
            {withButton ? (
              <button className="btn btn--primary contactUsBtn">Contact Us</button>
            ) : null}
          </div>
          <div className="col-lg-6">
            {image.url ? (
              <div className="seo-img withGrid">
                <img src={image.url} alt={image.alt} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
};

export default SeoBlock