import React from "react";
const sizes = {
  texts: "text-[12px] font-normal",
  textmd: "text-[14px] font-normal",
  textlg: "text-[15px] font-normal",
  textxl: "text-[16px] font-normal",
  text2xl: "text-[18px] font-normal",
  text4xl: "text-[21px] font-normal",
  text12xl: "text-[61px] font-normal md:text-[48px]",
};
const Text = ({
  children,
  className = "",
  as,
  size = "textxl",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-black-0 font-poppins ${className} ${sizes[size]} `}
      {...restProps}
    >
      {" "}
      {children}{" "}
    </Component>
  );
};
export { Text };
