import React from "react";
import PropTypes from "prop-types";
const shapes = { round: "rounded-[10px]" };
const variants = { tarWhite: "bg-white" };
const sizes = { xs: "h-[282px] p-[34px] text-[16px]" };
const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarWhite",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };
    return (
      <textarea
        ref={ref}
        className={`${className} ${shape && shapes[shape]} ${
          size && sizes[size]
        } ${variant && variants[variant]}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarWhite"]),
};
export { TextArea };
