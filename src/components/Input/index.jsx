import React from "react";
import PropTypes from "prop-types";
const shapes = { square: "rounded-[0px]", round: "rounded-[12px]" };

const variants = {
  fill: {
    primary_colors_900: "bg-primary_colors-900 text-white",
    white: "bg-white text-gray-400_04",
  },
};
const sizes = {
  "5xl": "h-[74px] px-3.5",
  sm: "h-[50px] px-[18px] text-[14px]",
  "4xl": "h-[74px] px-3.5 text-[18px]",
  "2xl": "h-[60px] px-2.5 text-[18px]",
  lg: "h-[60px] px-2.5 text-[15px]",
  xs: "h-[44px] px-3.5 text-[16px]",
  xl: "h-[60px] px-2.5",
  "6xl": "h-[80px] px-8 text-[18px]",
  md: "h-[56px] px-2.5 text-[17px]",
  "3xl": "h-[66px] px-3 text-[18px]",
};
const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "3xl",
      color = "white",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text  ${
          shape && shapes[shape]
        } ${variant && (variants[variant]?.[color] || variants[variant])} ${
          size && sizes[size]
        }`}
      >
        {" "}
        {!!label && label} {!!prefix && prefix}{" "}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />{" "}
        {!!suffix && suffix}{" "}
      </label>
    );
  }
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf([
    "5xl",
    "sm",
    "4xl",
    "2xl",
    "lg",
    "xs",
    "xl",
    "6xl",
    "md",
    "3xl",
  ]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["primary_colors_900", "white"]),
};
export { Input };
