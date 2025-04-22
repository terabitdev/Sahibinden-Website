import { Img } from "./..";
import React from "react";
export default function UserProfileImage({
  userImage = "images/img_audi_seeklogo_1.png",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full p-[42px] md:p-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <Img
        src={userImage}
        alt="Audiseeklogoone"
        className="h-[92px] w-[86%] object-contain"
      />{" "}
    </div>
  );
}
