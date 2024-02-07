import { useState } from "react";
import RegistrationModal from "./RegistrationModal";
import Input from "./Input";

function LoginInputs() {
  const [showModal, setShowModal] = useState(false);

  const handleRegisterClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-100 ">
      <form>
        <div className="row justify-content-center">
          <div className="">
            <Input label="Email" />
            <Input label="Password" type="password" />
            <div className="d-grid gap-2">
              {/* Bootstrap class to handle button spacing and width */}
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleRegisterClick}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </form>
      <RegistrationModal show={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default LoginInputs;
