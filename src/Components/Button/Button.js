import React from "react";
import PropTypes from "prop-types";

const buttonOutline = {
    primary: "btn-outline-primary",
    secondary: "btn-outline-secondary",
    success: "btn-outline-success",
    danger: "btn-outline-danger",
    info: "btn-outline-info",
    warning: "btn-outline-warning",
};

const buttonFilled = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    success: "btn-success",
    danger: "btn-danger",
    info: "btn-info",
    warning: "btn-warning",
};
const buttonSize = {
    lg: "btn-lg",
    sm: "btn-sm",
};

export const Button = ({
    className,
    children,
    type,
    size,
    button,
    buttonType,
    ...rest
}) => {
    let classes = [];

    const btnOutline = [buttonOutline[button]];
    const btnFilled = [buttonFilled[button]];
    const btnSize = [buttonSize[size]];

    if (size === "sm") {
        classes.push(...btnSize);
    } else if (size === "lg") {
        classes.push(...btnSize);
    }

    if (buttonType === "outline") {
        classes.push(...btnOutline);
    } else if (buttonType === "filled") {
        classes.push(...btnFilled);
    } else {
        classes.push(...btnFilled);
    }

    classes = classes.join(" ");
    return (
        <div className="col">
            <button
                {...rest}
                type={type}
                className={`btn ${classes} ${className}`}
            >
                {children}
            </button>
        </div>
    );
};

Button.defaultProps = {
    type: "button",
    button: "primary",
    buttonType: "filled",
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    button: PropTypes.string.isRequired,
    buttonType: PropTypes.string.isRequired,
    size: PropTypes.string,
};
