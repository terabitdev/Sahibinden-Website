import { Img, Heading } from "../../components";
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
  { whatisvehicle3: "What is Vehicle Valuation?" },
  { whatisvehicle3: "In which categories is it available?" },
  { whatisvehicle3: "Who can use it?" },
  { whatisvehicle3: "Can I also use Vehicle Valuation via the mobile app?" },
  { whatisvehicle3: "How is the value of the vehicle calculated?" },
  { whatisvehicle3: "Can I use this service when posting an ad?" },
  {
    whatisvehicle3:
      "I inquired about my vehicle but I could not find out its value. Why?",
  },
];
export default function WhilesellingvehiclevaluationoneColumn() {
  return (
    <div className="mt-[100px] flex flex-col items-center self-stretch">
      {" "}
      <div className="container-sm flex flex-col items-start gap-3 md:px-5">
        {" "}
        <Heading
          size="text10xl"
          as="p"
          className="text-[35px] font-medium md:text-[33px] sm:text-[31px]"
        >
          {" "}
          Frequently Asked Questions{" "}
        </Heading>{" "}
        <Accordion className="flex flex-col gap-5 self-stretch">
          {" "}
          {accordionData.map((d, i) => (
            <AccordionItem uuid={i} key={`expandablelistw${i}`}>
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
                        <div className="flex-1 rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                          {" "}
                          <div className="flex items-center justify-between gap-5">
                            {" "}
                            <Heading
                              size="text3xl"
                              as="p"
                              className="text-[20px] font-medium"
                            >
                              {" "}
                              {d.whatisvehicle3}{" "}
                            </Heading>{" "}
                            <Img
                              src="images/img_frame_black_900_01_24x24.svg"
                              alt="Image"
                              className="h-[24px] self-start"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                      </>
                    )}{" "}
                  </AccordionItemState>{" "}
                </AccordionItemButton>{" "}
              </AccordionItemHeading>
              <AccordionItemPanel>
                {" "}
                <div>Dummy Content</div>{" "}
              </AccordionItemPanel>{" "}
            </AccordionItem>
          ))}{" "}
        </Accordion>{" "}
      </div>{" "}
    </div>
  );
}
