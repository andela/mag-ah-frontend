import React from "react";
import PropTypes from "prop-types";

const LoginBaseModal = ({ modalId, modalTitle, modalContent }) => (
  <div
    className="modal fade"
    id={modalId}
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title col-11 m-auto" id="exampleModalLabel">
            {modalTitle}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {modalContent}
      </div>
    </div>
  </div>
);

LoginBaseModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.shape({}).isRequired
};

export default LoginBaseModal;
