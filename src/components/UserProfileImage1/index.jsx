import { Img } from "./..";
import React from "react";
export default function UserProfileImage1({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full p-6 sm:p-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Img
        src="images/img_360526306_11452734.png"
        alt="Image"
        className="h-[126px] w-full object-cover"
      />{" "}
    </div>
  );
}
