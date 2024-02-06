function LoginInputs() {
  return (
    <div className="container my-5">
      <form>
        <div className="row justify-content-center">
          <div className="col-6">
            <LoginFormInput label="Email" />
            <LoginFormInput label="Password" type="password" />
            <div className="d-grid gap-2">
              {" "}
              {/* Bootstrap class to handle button spacing and width */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  /* Handle registration click */
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

type LoginFormInputProps = {
  label: string;
  type?: string;
};

function LoginFormInput({ label, type = "text" }: LoginFormInputProps) {
  let icon = type === "text" ? "at" : "key";

  return (
    <div className="mb-3">
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          <i className={`bi bi-${icon}`} />
        </span>
        <input
          type={type}
          className="form-control"
          placeholder={label}
          aria-label={label}
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
  );
}

export default LoginInputs;
