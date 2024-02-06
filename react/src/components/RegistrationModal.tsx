import React from "react";

type RegistrationModalProps = {
  show: boolean;
  onClose: () => void;
};

const RegistrationModal = ({ show, onClose }: RegistrationModalProps) => {
  if (!show) return null;

  return (
    <>
      <div
        className={`custom-overlay ${show ? "d-block" : "d-none"}`}
        style={{ display: "block" }}
      ></div>
      <div
        className={`modal show ${show ? "d-block" : "d-none"}`}
        style={{ display: "block" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              {/* Registration form or content goes here */}
              <p>Registration form</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegistrationModal;
