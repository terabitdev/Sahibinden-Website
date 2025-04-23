import { Text, Img } from "../../components";
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
  { mymoneyis4: "My Money is Safe" },
  {},
  { mymoneyis4: "Comment Management" },
  { mymoneyis4: "My delivery / billing addresses" },
  { mymoneyis4: "My bank Information" },
  { mymoneyis4: "My head office address" },
  { mymoneyis4: "Brand New Transactions" },
  { mymoneyis4: "Safe E-Commerce" },
];
export default function MyshoppingtransactionsmypurchaseExpandablelistm() {
  return (
    <Accordion preExpanded={[0]} className="w-[20%] flex-col md:w-full md:px-5">
      {" "}
      {accordionData.map((d, i) => (
        <AccordionItem uuid={i} key={`expandablelistm${i}`}>
          {" "}
          <div className="flex flex-1 items-start">
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
                      <div className="flex flex-1 items-center justify-between gap-5">
                        {" "}
                        {props?.expanded ? (
                          <Img
                            src="images/img_button_2.svg"
                            alt="Background"
                            className="h-[58px] w-[88%] object-contain"
                          />
                        ) : (
                          <Img
                            src="images/img_arrow_up.svg"
                            alt="Arrowup"
                            className="h-[16px]"
                          />
                        )}{" "}
                      </div>{" "}
                    </>
                  )}{" "}
                </AccordionItemState>{" "}
              </AccordionItemButton>{" "}
            </AccordionItemHeading>{" "}
            <AccordionItemPanel>
              <div className="relative ml-[-300px] mt-4 flex w-[46%] flex-col items-start gap-4 self-end">
                {" "}
                <Text
                  size="textlg"
                  as="p"
                  className="ml-5 text-[15px] font-normal capitalize !text-primary_colors-900 md:ml-0"
                >
                  {" "}
                  My Purchase Transactions{" "}
                </Text>{" "}
                <div className="flex h-[58px] items-center self-stretch bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                  {" "}
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    {" "}
                    <Text
                      size="textlg"
                      as="p"
                      className="text-[15px] font-normal capitalize"
                    >
                      {" "}
                      My sales transactions{" "}
                    </Text>{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </AccordionItemPanel>{" "}
          </div>{" "}
        </AccordionItem>
      ))}{" "}
    </Accordion>
  );
}
