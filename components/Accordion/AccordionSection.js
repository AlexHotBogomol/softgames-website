import React, { Component } from "react";
import DropDownUp from "../../assets/icons/DropDownUp";
import DropDownDown from "../../assets/icons/DropDownDown";

class AccordionSection extends Component {
  onClick = (event) => {
    this.props.onClick(this.props.label);
    const section = event.target;
    setTimeout(() => {
      section.scrollIntoView({block: "center", behavior: "smooth"});
    }, 300);
  };

  render() {
    const { onClick, props: { isOpen, label, children } } = this;

    return (
      <div className="accordionSection">
        <div onClick={onClick} className="accordionSection-panel">
          {label}
          <div className="accordionSection-icon">
            {!isOpen && <DropDownDown/>}
            {isOpen && <DropDownUp/>}
          </div>
        </div>
        {isOpen && (
          <div className="accordionSection-content" >
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
