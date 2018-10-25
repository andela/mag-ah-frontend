import React from "react";
import PropTypes from "prop-types";

const BaseModal = ({ modalId, modalTitle, modalContent }) => (
  <div
    className="modal fade"
    id={modalId}
    tabIndex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <div />
          <h5 className="modal-title">{modalTitle}</h5>
          <button
            id={`${modalId}CloseButton`}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="container">{modalContent}</div>
        </div>
      </div>
    </div>
  </div>
);

BaseModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.element.isRequired
};

export default BaseModal;
