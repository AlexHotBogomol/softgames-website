import React from 'react';
import {CSSTransition, TransitionGroup}  from "react-transition-group";
import './Modal.scss';

const Modal = ({isOpen, onClose, children, bgColor}) => {
  return(
    <TransitionGroup>
    {isOpen && (
      <CSSTransition
        classNames="fade"
        timeout={200}
      >
        <div className="modal">
          <div className="modal-overlay" onClick={onClose} />
          <div className="modal-window" style={{
            backgroundColor: bgColor,
          }}>
            <button className="modal-closeBtn" onClick={onClose}>&times;</button>
            {children}
          </div>
        </div>
      </CSSTransition>
    )}
    </TransitionGroup>
  )
};

export default Modal