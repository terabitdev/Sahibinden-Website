import { Img, Heading } from "../../components";
import CreditColumnwhatisa from "../../components/CreditColumnwhatisa";
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
  { whatisa2: "What is a housing loan?" },
  { whatisa2: "What is a Consumer Loan?" },
  { whatisa2: "Who provides the Credit Offers?" },
  {
    whatisa2:
      "I applied for a loan through sahibinden.com. Who can I get support from for my questions about the loan?",
  },
  { whatisa2: "How are loan rates calculated?" },
  { whatisa2: "Why are my mobile phone and email details required?" },
  { whatisa2: "Is my personal data safe?" },
];
export default function CredittwoColumnTwo() {
  return (
    <div className="mt-[54px] flex flex-col items-center">
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
          <CreditColumnwhatisa
            whatisa="What is a housing loan?"
            consumerloans={
              <>
                {" "}
                A housing loan is a type of loan given by banks on the condition
                that <br /> the house to be purchased is collateralized.{" "}
              </>
            }
          />{" "}
          <CreditColumnwhatisa
            whatisa="What is a Consumer Loan?"
            consumerloans="Consumer loans are a type of loan used to meet our short-term and low-amount cash needs. "
          />{" "}
        </div>
        <Heading
          size="text7xl"
          as="h3"
          className="mt-[30px] text-[25px] font-medium md:text-[23px] sm:text-[21px]"
        >
          {" "}
          Frequently Asked Questions{" "}
        </Heading>{" "}
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
                          <div className="flex items-center justify-between gap-5">
                            {" "}
                            <Heading
                              size="text3xl"
                              as="h4"
                              className="text-[20px] font-medium"
                            >
                              {" "}
                              {d.whatisa2}{" "}
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
