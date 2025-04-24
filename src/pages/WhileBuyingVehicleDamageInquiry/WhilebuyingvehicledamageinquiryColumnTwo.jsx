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
  {
    whoprovides: "Who provides the Damage and Vehicle Detail Inquiry service?",
  },
  {
    whoprovides:
      "Who can benefit from Damage and Vehicle Detail Inquiry Services?",
  },
  { whoprovides: "Why Should I Learn?" },
  { whoprovides: "Why are my email, first and last name required?" },
  {
    whoprovides:
      "There is an error in the damage information, what should I do?",
  },
  {
    whoprovides:
      "What does the phrase &quot;Towing Certificate&quot; or &quot;Scrap Certificate&quot; in the damage reason mean?",
  },
  { whoprovides: "What does KTT mean in the damage cause?" },
  {
    whoprovides: "Why is the damage amount not visible in the Damage Inquiry?",
  },
  { whoprovides: "Where can I get detailed information about the damage?" },
  {
    whoprovides:
      "What does the phrase &quot;Car Insurance (Yes/No)&quot; in the Vehicle Details query mean?",
  },
  {
    whoprovides:
      "What does the Total Duration with/without Insurance written in the Vehicle Detail query mean?",
  },
  { whoprovides: "What does Last Ownership in the Vehicle Detail query mean?" },
];
export default function WhilebuyingvehicledamageinquiryColumnTwo() {
  return (
    <div className="mt-[110px] flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-3 md:px-5">
        {" "}
        <Heading
          size="text10xl"
          as="h3"
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
                          <div className="flex items-center justify-between gap-5 md:flex-col">
                            {" "}
                            <Heading
                              size="text3xl"
                              as="h4"
                              className="text-[20px] font-medium"
                            >
                              {" "}
                              {d.whoprovides}{" "}
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
