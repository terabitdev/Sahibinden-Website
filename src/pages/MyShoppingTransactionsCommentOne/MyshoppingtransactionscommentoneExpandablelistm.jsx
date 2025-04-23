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
  { mymoneyis18: "My Money is Safe" },
  { mymoneyis18: "Comment Management" },
  { mymoneyis18: "Brand New Transactions" },
  { mymoneyis18: "Safe E-Commerce" },
];
export default function MyshoppingtransactionscommentoneExpandablelistm() {
  return (
    <Accordion preExpanded={[0]} className="w-[20%] flex-col md:w-full md:px-5">
      {" "}
      {accordionData.map((d, i) => (
        <AccordionItem uuid={i} key={`expandablelistm${i}`}>
          {" "}
          <div className="flex flex-1 flex-col items-end">
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
                      <div className="flex w-[88%] flex-wrap items-end justify-between gap-5 border border-solid border-primary_colors-900 bg-primary_colors-900 px-5 py-2.5 md:w-full">
                        {" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="mt-1 text-[18.64px] font-normal !text-white"
                        >
                          {" "}
                          {d.mymoneyis18}{" "}
                        </Text>{" "}
                        {props?.expanded ? (
                          <Img
                            src="images/img_arrow_up.svg"
                            alt="Arrowup"
                            className="mb-1.5 h-[18px]"
                          />
                        ) : (
                          <Img
                            src="images/img_frame_primary_colors_900_18x18.svg"
                            alt="Image"
                            className="h-[18px] self-end"
                          />
                        )}{" "}
                      </div>{" "}
                    </>
                  )}{" "}
                </AccordionItemState>{" "}
              </AccordionItemButton>{" "}
            </AccordionItemHeading>{" "}
            <AccordionItemPanel>
              {" "}
              <div className="flex flex-col items-end self-stretch">
                {" "}
                <div className="flex h-[56px] w-[88%] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto md:w-full">
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
                      My Purchase Transactions{" "}
                    </Text>{" "}
                  </a>{" "}
                </div>
                <div className="flex h-[56px] w-[88%] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto md:w-full">
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
