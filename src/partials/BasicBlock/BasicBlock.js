import React from 'react';
import './BasicBlock.scss';

const BasicBlock = ({title, image, imageAlt, description, btn, category, className}) => {
  const classes = [
    'basicBlock',
    className
  ];
  return (
    <section className={classes.join(' ')}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="basicBlock-img withGrid">
              <img src={image} alt={imageAlt} />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-between align-items-start">
            {category ? (
              <span className="basicBlock-category">
                {category}
              </span>
            ) : null}
            {title}
            {description}
            {btn}
          </div>
        </div>
      </div>
    </section>
  )
};

export default BasicBlock