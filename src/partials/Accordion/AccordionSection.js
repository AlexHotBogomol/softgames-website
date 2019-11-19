import React, { Component } from "react";
import DropDownUp from "../../assets/icons/DropDownUp";
import DropDownDown from "../../assets/icons/DropDownDown";

class AccordionSection extends Component {
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const { onClick, props: { isOpen, label, children } } = this;

    return (
      <div className="accordionSection">
        <div onClick={onClick} className="accordionSection-panel">
          {label}
          <div className="accordionSection-icon">
            {!isOpen && <DropDownUp/>}
            {isOpen && <DropDownDown/>}
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
