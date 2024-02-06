import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>SunkemonGo</h1>

        <p>Login</p>
        <div className="login-form-group">
          <form className="login-form">
            <input
              className="input-container"
              type="text"
              id="email"
              placeholder="Email"
              name="email"
            />

            <input
              className="input-container"
              type="text"
              id="password"
              placeholder="Password"
              name="password"
            />
          </form>
        </div>
        <p>Sign up</p>
      </div>
    </>
  );
}

export default App;
