import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, form } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="ahRegisterModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="ahRegisterModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title m-auto"
                  id="ahRegisterModalLongTitle"
                >
                  {title}
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
              <div className="modal-body">
                <div className="container">
                  <div className="row">{form}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  form: PropTypes.element.isRequired
};

export default Modal;
