import { Button, Img, Text, Heading } from "./..";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const accordionData = [
  { brand: "Brand" },
  { brand: "Model" },
  { brand: "Gear" },
];
export default function ZeroVehicleWorldNewVehicleColumn({ ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] md:w-full gap-5 p-6 sm:p-5 bg-white shadow-xs rounded-[10px]`}
    >
      {" "}
      <div className="ml-[76px] mr-[62px] flex flex-col items-start gap-5 self-stretch">
        {" "}
        <Heading size="text9xl" as="p" className="text-[30px] font-medium">
          {" "}
          Add Vehicle{" "}
        </Heading>{" "}
        <Img
          src="images/img_frame_black_900_01_200x200.svg"
          alt="Add Vehicle"
          className="mr-3 h-[200px] w-full"
        />{" "}
      </div>{" "}
      <div className="mb-[54px] flex flex-col gap-5 self-stretch">
        {" "}
        <Accordion className="flex flex-col gap-5">
          {" "}
          {accordionData.map((d, i) => (
            <AccordionItem uuid={i} key={`expandablelistb${i}`}>
              {" "}
              <AccordionItemHeading className="w-full">
                {" "}
                <AccordionItemButton>
                  {" "}
                  <AccordionItemState>
                    {" "}
                    {(props) => (
                      <>
                        {" "}
                        <div className="flex flex-1 items-center justify-between gap-5 rounded-[10px] border border-solid border-primary_colors-900 bg-white px-[26px] py-[18px] sm:px-5">
                          {" "}
                          <Text
                            size="textlg"
                            as="p"
                            className="text-[15px] font-normal capitalize !text-black-900_01"
                          >
                            {" "}
                            {d.brand}{" "}
                          </Text>{" "}
                          <Img
                            src="images/img_frame_primary_colors_900_18x18.svg"
                            alt="Brand"
                            className="mr-1 h-[20px]"
                          />{" "}
                        </div>{" "}
                      </>
                    )}{" "}
                  </AccordionItemState>{" "}
                </AccordionItemButton>{" "}
              </AccordionItemHeading>{" "}
              <AccordionItemPanel>
                {" "}
                <div>Dummy Content</div>{" "}
              </AccordionItemPanel>{" "}
            </AccordionItem>
          ))}{" "}
        </Accordion>
        <Button
          color="primary_colors_900"
          size="4xl"
          variant="fill"
          className="self-stretch rounded px-[34px] font-semibold !text-indigo-50_02 sm:px-5"
        >
          {" "}
          Add{" "}
        </Button>{" "}
      </div>{" "}
    </div>
  );
}
