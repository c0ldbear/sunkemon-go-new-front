import React from "react";

type InputProps = {
  label: string;
  type?: string;
};

function Input({ label, type = "text" }: InputProps) {
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

export default Input;
