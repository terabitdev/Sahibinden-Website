import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
const shapes = { round: "rounded-[10px]" };
const variants = {
  fill: {
    primary_colors_900: "bg-primary_colors-900 text-white",
    white: "bg-white text-black-900_01",
  },
};
const sizes = {
  "2xl": "h-[74px] px-[22px] text-[18px]",
  sm: "h-[48px] px-[18px] text-[16px]",
  md: "h-[56px] px-6 text-[17px]",
  xs: "h-[44px] px-[18px]",
  lg: "h-[60px] px-6",
  xl: "h-[60px] px-6 text-[15px]",
};
const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "xl",
      color = "white",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        {" "}
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${shape && shapes[shape]} ${
            size && sizes[size]
          } ${variant && variants[variant]?.[color]}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            indicatorsContainer: (provided) => ({
              ...provided,
              padding: undefined,
              flexShrink: undefined,
              width: "max-content",
              "& > div": { padding: 0 },
            }),
            container: (provided) => ({
              ...provided,
              zIndex: 0,
              alignItems: "center",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "none !important",
              minHeight: "auto",
              width: "100%",
              flexWrap: undefined,
              "&:hover": { border: "0 !important" },
            }),
            input: (provided) => ({ ...provided, color: "inherit" }),
            option: (provided, state) => ({
              ...provided,
              display: "flex",
              minWidth: "max-content",
              width: "100%",
              backgroundColor: state.isSelected ? "#1544ab" : "transparent",
              color: state.isSelected ? "#ffffff" : "inherit",
              "&:hover": { backgroundColor: "#1544ab", color: "#ffffff" },
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: undefined,
            }),
            placeholder: (provided) => ({ ...provided, margin: 0 }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            menu: (base) => ({
              ...base,
              minWidth: "max-content",
              width: "max-content",
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />{" "}
        {children}{" "}
      </>
    );
  }
);
SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["2xl", "sm", "md", "xs", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["primary_colors_900", "white"]),
};
export { SelectBox };
