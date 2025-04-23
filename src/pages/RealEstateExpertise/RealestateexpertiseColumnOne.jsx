import { Img, Heading } from "../../components";
import RealEstateAppraisalInfo from "../../components/RealEstateAppraisalInfo";
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
  { whocanbenefit: "Who can benefit from the Real Estate Appraisal service?" },
  { whocanbenefit: "Who provides Real Estate Appraisal services?" },
  { whocanbenefit: "What is a Real Estate Appraisal Report?" },
  { whocanbenefit: "How can I submit a request for a Real Estate Appraisal?" },
  {
    whocanbenefit:
      "What are the documents required for Real Estate Appraisal service?",
  },
  { whocanbenefit: "What is a Valuation Service Agreement?" },
  {
    whocanbenefit:
      "For which cities is the Real Estate Expertise service valid?",
  },
  { whocanbenefit: "Where can I use the Real Estate Appraisal Report?" },
  {
    whocanbenefit:
      "How is the price of the Real Estate Appraisal service determined?",
  },
];
export default function RealestateexpertiseColumnOne() {
  return (
    <div className="mt-[100px] flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start md:px-5">
        {" "}
        <Heading
          size="text7xl"
          as="h2"
          className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
        >
          {" "}
          Detailed Information{" "}
        </Heading>{" "}
        <div className="mt-5 flex gap-[30px] self-stretch md:flex-col">
          {" "}
          <RealEstateAppraisalInfo />{" "}
          <RealEstateAppraisalInfo
            titleText="What Information is Included in the Expert Report?"
            descriptionText="The appraisal report includes the title deed encumbrance report (mortgage, annotation or lien information regarding the real estate), current zoning status, official documents examined by the municipality, factors affecting the value of the real estate, comparables and a price valuation table."
          />{" "}
        </div>{" "}
        <Heading
          size="text7xl"
          as="h3"
          className="mt-[30px] text-[25px] font-medium md:text-[23px] sm:text-[21px]"
        >
          {" "}
          Frequently Asked Questions{" "}
        </Heading>
        <Accordion className="mt-5 flex flex-col gap-5 self-stretch">
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
                              as="h4"
                              className="text-[20px] font-medium"
                            >
                              {" "}
                              {d.whocanbenefit}{" "}
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
              </AccordionItemHeading>{" "}
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
