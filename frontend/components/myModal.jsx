import React from 'react';

const checkClickOutside = (closeModal) => {
  return (e) => {
    if (e.target.className === "modal-backdrop") {
      closeModal();
    }
  };
};


export default function myModal({ modal, component: Component, closeModal }) {

  let content;
  if (modal) {
    content = (
      <div className="modal-backdrop" onClick={checkClickOutside(closeModal)}>
        <Component modal={modal} closeModal={closeModal} />
      </div>
    );
  } else {
    content = null;
  }
  return content;
}
