import React from "react";

function Error() {
  return (
    <div>
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
        style={{ width: "100%" }}
      >
        <strong>enter something</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default Error;
