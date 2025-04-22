import { Text, Heading, Img } from "../../components";
import React from "react";
export default function AddetailsRowSeven() {
  return (
    <div className="mt-[50px] flex justify-center">
      {" "}
      <div className="container-sm flex justify-center px-10 md:px-5">
        {" "}
        <div className="flex w-full flex-col items-center gap-6">
          {" "}
          <div className="relative h-[42px] content-center self-stretch md:h-auto">
            {" "}
            <Img
              src="images/img_frame_white.svg"
              alt="Image"
              className="ml-9 h-[14px] md:ml-0"
            />{" "}
            <Heading
              size="heading3xl"
              as="h3"
              className="absolute bottom-0 left-0 top-0 my-auto h-max text-[28px] font-bold capitalize !text-text md:text-[26px] sm:text-[24px]"
            >
              {" "}
              Description{" "}
            </Heading>{" "}
          </div>{" "}
          <Text
            size="text2xl"
            as="p"
            className="w-[96%] text-[18px] font-normal capitalize leading-[38px] !text-text md:w-full"
          >
            {" "}
            Enchanting three bedroom, three bath home with spacious one bedroom,
            one bath cabana, in-laws quarters. Charming living area features
            fireplace and fabulous art deco details. Formal dining room.
            Remodeled kitchen with granite countertops, white cabinetry and
            stainless appliances. Lovely master bedroom has updated bath,
            beautiful view of the pool. Guest bedrooms have walk-in, cedar
            closets. Delightful backyard; majestic oaks surround the free form
            pool and expansive patio, wet bar and grill.{" "}
          </Text>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
