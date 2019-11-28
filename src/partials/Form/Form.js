import React from "react";
import "./Form.scss";

const Form = ({className}) => {
  const formClasses = ["form", className];
  return (
    <form className={formClasses.join(" ")} action="/" method="POST">
      <div className="row">
        <div className="col-md-6">
          <label>
            <span className="caption">First Name*</span>
            <input
              type="text"
              placeholder="Your First Name*"
              name="firstName"
              required
            />
          </label>
          <label>
            <span className="caption">Last Name*</span>
            <input
              type="text"
              placeholder="Your Last Name*"
              name="lastName"
              required
            />
          </label>
          <label>
            <span className="caption">E-mail*</span>
            <input
              type="email"
              placeholder="Your E-mail*"
              name="email"
              required
            />
          </label>
          <label>
            <span className="caption">Telephone (optional)</span>
            <input type="tel" placeholder="Your telephone" name="telephone" />
          </label>
          <button type="submit" className="btn btn--primary d-none d-md-block">SEND</button>
        </div>
        <div className="col-md-6">
          <label>
            <span className="caption">Additional Background Information*</span>
            <textarea
              name="text"
              placeholder="Additional Background Information*"
            />
          </label>
          <label className="check">
            <input className="check-input" type="checkbox" name="agreement"/>
            <span className="check-box"/>
            I agree to the use of my data in accordance with the data
            protection provisions but do not agree to third party sharing.
          </label>
          <button type="submit" className="btn btn--primary d-md-none">SEND</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
