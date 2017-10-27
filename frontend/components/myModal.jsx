import React from 'react';

export default function myModal({ modal, component: Component, closeModal }) {

  let content;
  if (modal) {
    content = (
      <div className="modal-backdrop">
        <Component modal={modal}/>
      </div>
    );
  } else {
    content = null;
  }
  return content;
}
