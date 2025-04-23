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
  { whatsinthe1: "What&#39;s in the Real Estate Index?" },
  {
    whatsinthe1:
      "How are the index results presented in the Real Estate Index generated?",
  },
  {
    whatsinthe1:
      "Why are some districts and neighborhoods not included in the Real Estate Index?",
  },
  { whatsinthe1: "Are the data in the Real Estate Index up-to-date?" },
  { whatsinthe1: "How many locations can I compare in the Property Index?" },
  {
    whatsinthe1:
      "Can I create as many indices as I want in the Real Estate Index?",
  },
  { whatsinthe1: "What is the Amortization Period?" },
  { whatsinthe1: "How to prepare Demographic Information?" },
  { whatsinthe1: "How is the 6 Month Forecast data generated?" },
];
export default function RealestateindexwhenrentingColumnSix() {
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
                          <div className="flex items-center justify-between gap-5 sm:flex-col">
                            {" "}
                            <Heading
                              size="text3xl"
                              as="p"
                              className="text-[20px] font-medium"
                            >
                              {" "}
                              {d.whatsinthe1}{" "}
                            </Heading>{" "}
                            <Img
                              src="images/img_frame_black_900_01_24x24.svg"
                              alt="Image"
                              className="h-[24px] self-start sm:w-full"
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
