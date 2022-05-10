import React from "react";

export const Input = ({ className, labelClassName, label, id, ...rest }) => {
  return (
    <>
      <label htnlFor={id} className={`${labelClassName} input-group mb-3`}>
        {label}

        <input {...rest} id={id} className={`${className} form-control`} />
      </label>
    </>
  );
};
