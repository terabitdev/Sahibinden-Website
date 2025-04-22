import { Button, Img, Heading } from "./..";
import React from "react";
export default function MaintenanceRepairColumn({
  carcareand = "Car Care and Maintenance",
  description = "Benefit from a variety of services such as detailed interior and exterior cleaning, ceramic coating, rim and engine cleaning; hood, wax polish and paint protection, window film coating.",
  detailed = "Detailed Information",
  ceramiccoating = "&lt;&gt;Ceramic Coating at Auto King is&lt;br /&gt;only 9,900 TL&lt;/&gt;",
  joinThe = "Join the campaign",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col self-stretch p-6 sm:p-5 bg-white shadow-xs flex-1 rounded-[10px] container-sm`}
    >
      <div className="mb-[50px] flex flex-col gap-5 self-stretch">
        {" "}
        <div className="flex flex-col items-start gap-5">
          {" "}
          <Heading
            size="heading4xl"
            as="h3"
            className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
          >
            {" "}
            {carcareand}{" "}
          </Heading>{" "}
          <Heading
            size="text7xl"
            as="p"
            className="w-full text-[25px] font-normal leading-[37px] md:text-[23px] sm:text-[21px]"
          >
            {" "}
            {description}{" "}
          </Heading>{" "}
          <Heading
            size="text3xl"
            as="p"
            className="text-[20px] font-medium !text-primary_colors-900"
          >
            {" "}
            {detailed}{" "}
          </Heading>{" "}
        </div>{" "}
        <div className="flex items-center gap-[11px] md:flex-col">
          {" "}
          <Img
            src="images/img_360526306_11452734.png"
            alt="Image"
            className="h-[288px] w-[30%] object-contain md:w-full"
          />{" "}
          <Heading
            size="text3xl"
            as="p"
            className="w-[24%] text-[20px] font-medium leading-[165.5%] md:w-full"
          >
            {" "}
            {ceramiccoating}{" "}
          </Heading>{" "}
          <Button
            color="primary_colors_900"
            size="xl"
            variant="fill"
            shape="round"
            rightIcon={
              <Img
                src="images/img_arrowleft.svg"
                alt="Arrow Left"
                className="my-0.5 h-[20px] w-[20px] object-contain"
              />
            }
            className="min-w-[222px] gap-2 rounded-[24px] px-[18px] font-medium capitalize"
          >
            {" "}
            {joinThe}{" "}
          </Button>{" "}
        </div>
      </div>{" "}
    </div>
  );
}
