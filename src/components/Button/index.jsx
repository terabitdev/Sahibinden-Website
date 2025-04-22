import React from "react";
import PropTypes from "prop-types";


const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[24px]",
  circle: "rounded-[50%]",
};

const variants = {
  fill: {
    green_A700_01: "bg-green-a700_01 text-white",
    red_A700: "bg-red-a700 text-white",
    deep_purple_A700_19: "bg-deep_purple-a700_19",
    white: "bg-white text-black-0",
    white_A700_66: "bg-color_white-a700_66 text-black-0",
    primary_colors_900: "bg-primary_colors-900 text-white",
  },
  outline: { white: "border-white border border-solid text-white" },
};

const sizes = {
  sm: "h-[30px] px-[18px] text-[12px]",
  "9xl": "h-[60px] px-[34px] text-[14px]",
  "10xl": "h-[74px]",
  "2xl": "h-[50px] px-[34px] text-[24px]",
  "7xl": "h-[60px] px-3.5",
  "6xl": "h-[60px] px-[34px] text-[25px]",
  "3xl": "h-[52px] px-3.5",
  "4xl": "h-[52px] px-[34px] text-[20px]",
  "8xl": "h-[60px] px-3.5 text-[18px]",
  lg: "h-[44px] px-[18px] text-[16px]",
  md: "h-[40px] px-2.5 text-[16px]",
  "5xl": "h-[54px] px-[34px] text-[16px]",
  xl: "h-[48px] px-[18px] text-[16px]",
  xs: "h-[28px] px-1.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "white",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {" "}
      {!!leftIcon && leftIcon} {children} {!!rightIcon && rightIcon}{" "}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf([
    "sm",
    "9xl",
    "10xl",
    "2xl",
    "7xl",
    "6xl",
    "3xl",
    "4xl",
    "8xl",
    "lg",
    "md",
    "5xl",
    "xl",
    "xs",
  ]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "green_A700_01",
    "red_A700",
    "deep_purple_A700_19",
    "white",
    "white_A700_66",
    "primary_colors_900",
  ]),
};
export { Button };