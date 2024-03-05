type InputProps = {
  label: "Email" | "Password" | "Name";
  type?: string;
  placeholder?: string;
};

function Input({ label, type = "text", placeholder = "" }: InputProps) {
  const icon = (() => {
    switch (label.toLowerCase()) {
      case "email":
        return "at";
      case "password":
        return "key";
      case "name":
        return "person-arms-up";
      default:
        return "";
    }
  })();

  return (
    <div className="mb-3 w-100">
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          <i className={`bi bi-${icon}`} />
        </span>
        <input
          type={type}
          className="form-control"
          placeholder={placeholder === "" ? label : placeholder}
          aria-label={label}
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
  );
}

export default Input;
