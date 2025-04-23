import { Text, Img } from "../../components";
import React from "react";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const accordionData = [
  { mymoneyis8: "My Money is Safe" },
  { mymoneyis8: "Brand New Transactions" },
  { mymoneyis8: "Safe E-Commerce" },
  { mymoneyis8: "Summary" },
  { mymoneyis8: "My Orders" },
  { mymoneyis8: "Return & Cancellation Procedures" },
  { mymoneyis8: "My Completed Orders" },
  { mymoneyis8: "My distance Contracts" },
  { mymoneyis8: "My Sales Transaction" },
  { mymoneyis8: "Comment Management" },
];
export default function MyshoppingtransactionsmycurrentExpandablelistm() {
  return (
    <Accordion
      preExpanded={[0]}
      className="absolute bottom-0 left-0 right-0 top-0 m-auto flex-1 flex-col"
    >
      {" "}
      {accordionData.map((d, i) => (
        <AccordionItem uuid={i} key={`expandablelistm${i}`}>
          {" "}
          <div className="flex-1">
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
                      <div className="relative z-[1] flex flex-wrap items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-4">
                        {" "}
                        <Text
                          size="textlg"
                          as="p"
                          className="w-[28%] text-[15px] font-normal leading-[22px] !text-primary_colors-900"
                        >
                          {" "}
                          {d.mymoneyis8}{" "}
                        </Text>{" "}
                        {props?.expanded ? (
                          <Img
                            src="images/img_arrow_up_primary_colors_900.svg"
                            alt="Arrowup"
                            className="h-[18px] self-end"
                          />
                        ) : (
                          <Img
                            src="images/img_frame_primary_colors_900_18x18.svg"
                            alt="Image"
                            className="h-[18px]"
                          />
                        )}{" "}
                      </div>{" "}
                    </>
                  )}{" "}
                </AccordionItemState>{" "}
              </AccordionItemButton>
            </AccordionItemHeading>{" "}
            <AccordionItemPanel>
              {" "}
              <div>
                {" "}
                <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                  {" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="w-[52%] text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                  >
                    {" "}
                    My Current Orders{" "}
                  </Text>{" "}
                </div>{" "}
                <AccordionItemHeading className="w-full">
                  {" "}
                  <AccordionItemButton>
                    {" "}
                    <AccordionItemState>
                      {" "}
                      {(props) => (
                        <>
                          {" "}
                          <div className="border border-solid border-primary_colors-900 bg-white p-4">
                            {" "}
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[15px] font-normal capitalize leading-[22px]"
                              >
                                {" "}
                                {d.mymoneyis8}{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                        </>
                      )}{" "}
                    </AccordionItemState>{" "}
                  </AccordionItemButton>{" "}
                </AccordionItemHeading>{" "}
                <AccordionItemHeading className="w-full">
                  {" "}
                  <AccordionItemButton>
                    {" "}
                    <AccordionItemState>
                      {" "}
                      {(props) => (
                        <>
                          {" "}
                          <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                            {" "}
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="w-[86%] text-[15px] font-normal capitalize leading-[22px]"
                              >
                                {" "}
                                {d.mymoneyis8}{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                        </>
                      )}{" "}
                    </AccordionItemState>{" "}
                  </AccordionItemButton>{" "}
                </AccordionItemHeading>
                <AccordionItemHeading className="w-full">
                  {" "}
                  <AccordionItemButton>
                    {" "}
                    <AccordionItemState>
                      {" "}
                      {(props) => (
                        <>
                          {" "}
                          <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                            {" "}
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="w-[64%] text-[15px] font-normal capitalize leading-[22px]"
                              >
                                {" "}
                                {d.mymoneyis8}{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                        </>
                      )}{" "}
                    </AccordionItemState>{" "}
                  </AccordionItemButton>{" "}
                </AccordionItemHeading>{" "}
              </div>{" "}
            </AccordionItemPanel>{" "}
          </div>{" "}
        </AccordionItem>
      ))}{" "}
    </Accordion>
  );
}
