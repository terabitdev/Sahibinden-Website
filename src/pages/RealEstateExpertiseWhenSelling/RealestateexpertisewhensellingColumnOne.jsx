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
  { whocanbenefit1: "Who can benefit from the Real Estate Appraisal service?" },
  { whocanbenefit1: "Who provides Real Estate Appraisal services?" },
  { whocanbenefit1: "What is a Real Estate Appraisal Report?" },
  { whocanbenefit1: "How can I submit a request for a Real Estate Appraisal?" },
  {
    whocanbenefit1:
      "What are the documents required for Real Estate Appraisal service?",
  },
  { whocanbenefit1: "What is a Valuation Service Agreement?" },
  {
    whocanbenefit1:
      "For which cities is the Real Estate Expertise service valid?",
  },
  { whocanbenefit1: "Where can I use the Real Estate Appraisal Report?" },
  {
    whocanbenefit1:
      "How is the price of the Real Estate Appraisal service determined?",
  },
];
export default function RealestateexpertisewhensellingColumnOne() {
  return (
    <div className="mt-16 flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-5 md:px-5">
        {" "}
        <Heading
          size="text7xl"
          as="h2"
          className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
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
                          <div className="flex items-center justify-between gap-5 md:flex-col">
                            {" "}
                            <Heading
                              size="text3xl"
                              as="h3"
                              className="text-[20px] font-medium"
                            >
                              {" "}
                              {d.whocanbenefit1}{" "}
                            </Heading>{" "}
                            <Img
                              src="images/img_frame_black_900_01_24x24.svg"
                              alt="Image"
                              className="h-[24px] self-start md:w-full"
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
