import { Heading } from "../../components";
import UserProfileImage from "../../components/UserProfileImage";
import React, { Suspense } from "react";
const data = [
  { userImage: "images/img_audi_seeklogo_1.png" },
  { userImage: "images/img_bmw_seeklogo_1.png" },
  { userImage: "images/img_audi_seeklogo_1.png" },
  { userImage: "images/img_bmw_seeklogo_1.png" },
  { userImage: "images/img_audi_seeklogo_1.png" },
  { userImage: "images/img_bmw_seeklogo_1.png" },
  { userImage: "images/img_audi_seeklogo_1.png" },
  { userImage: "images/img_bmw_seeklogo_1.png" },
  { userImage: "images/img_audi_seeklogo_1.png" },
  { userImage: "images/img_bmw_seeklogo_1.png" },
  { userImage: "images/img_audi_seeklogo_1.png" },
  { userImage: "images/img_bmw_seeklogo_1.png" },
  { userImage: "images/img_audi_seeklogo_1.png" },
  { userImage: "images/img_bmw_seeklogo_1.png" },
  { userImage: "images/img_audi_seeklogo_1.png" },
];
export default function ZerovehicleworldColumnTwo() {
  return (
    <div className="mt-[74px] flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-5 md:px-5">
        {" "}
        <Heading
          size="text10xl"
          as="h6"
          className="text-[35px] font-medium md:text-[33px] sm:text-[31px]"
        >
          {" "}
          Popular Brands{" "}
        </Heading>{" "}
        <div className="grid grid-cols-5 gap-3.5 self-stretch md:grid-cols-3 sm:grid-cols-1">
          {" "}
          <Suspense fallback={<div>Loading feed...</div>}>
            {" "}
            {data.map((d, index) => (
              <UserProfileImage {...d} key={"gridaudiseeklog" + index} />
            ))}{" "}
          </Suspense>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
