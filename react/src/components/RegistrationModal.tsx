import Input from "./Input";

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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register for Sunkemon Trainer</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              {/* Registration form or content goes here */}
              <p>Registration form</p>
              <Input label="Name" />
              <Input label="Email" />
              <Input label="Password" type="password" />
              <Input
                label="Password"
                type="password"
                placeholder="Confirm password"
              />
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
