import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import LoginForm from "./components/LoginInputs";

function App() {
  return (
    <>
      <div className="container justify-content-center">
        <h1>SunkemonGo</h1>

        <div className="mb-5 mt-3">
          <h4>Welcome Sunkemon Trainer!</h4>
        </div>
        <LoginForm />
      </div>
    </>
  );
}

export default App;
