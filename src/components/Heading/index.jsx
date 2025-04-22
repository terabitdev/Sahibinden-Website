import React from "react";
const sizes = {
  textxs: "text-[10px] font-medium",
  text3xl: "text-[20px] font-medium",
  text5xl: "text-[22px] font-medium",
  text6xl: "text-[24px] font-medium md:text-[22px]",
  text7xl: "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  text8xl: "text-[26px] font-medium md:text-[24px] sm:text-[22px]",
  text9xl: "text-[30px] font-medium md:text-[28px] sm:text-[26px]",
  text10xl: "text-[35px] font-medium md:text-[33px] sm:text-[31px]",
  text11xl: "text-[60px] font-medium md:text-[52px] sm:text-[46px]",
  headingxs: "text-[15px] font-semibold",
  headings: "text-[16px] font-bold",
  headingmd: "text-[20px] font-semibold",
  headinglg: "text-[24px] font-bold md:text-[22px]",
  headingxl: "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
  heading2xl: "text-[26px] font-bold md:text-[24px] sm:text-[22px]",
  heading3xl: "text-[28px] font-bold md:text-[26px] sm:text-[24px]",
  heading4xl: "text-[30px] font-semibold md:text-[28px] sm:text-[26px]",
  heading5xl: "text-[35px] font-semibold md:text-[33px] sm:text-[31px]",
  heading6xl: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
  heading7xl: "text-[50px] font-semibold md:text-[46px] sm:text-[40px]",
  heading8xl: "text-[64px] font-black md:text-[48px]",
};
const Heading = ({
  children,
  className = "",
  size = "text5xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-black-900_01 font-poppins ${className} ${sizes[size]}`}
      {...restProps}
    >
      {" "}
      {children}{" "}
    </Component>
  );
};
export { Heading };
