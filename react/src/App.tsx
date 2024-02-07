import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import LoginForm from "./components/LoginInputs";

function App() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="card"
          style={{
            width: "500px",
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1>SunkemonGo</h1>

          <div className="mb-1 mt-3">
            <h4>Welcome Sunkemon Trainer!</h4>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default App;
