import React from "react";
import SwitchProvider from "@dhiwise/react-switch";
import PropTypes from "prop-types";
const variants = {
  swtOutlineBlueA100: {
    offColor: "#3183ff",
    onColor: "#3183ff",
    offHandleColor: "#ffffff",
    onHandleColor: "#ffffff",
  },
};
const sizes = { xs: { width: 64, height: 32 } };
const Switch = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtOutlineBlueA100",
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      {" "}
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />{" "}
    </div>
  );
};
Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["swtOutlineBlueA100"]),
};
export { Switch };
