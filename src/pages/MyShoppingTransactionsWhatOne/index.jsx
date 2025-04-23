import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyshoppingtransactionswhatoneColumn from "./MyshoppingtransactionswhatoneColumn";
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
  { mymoneyis7: "My Money is Safe" },
  { mymoneyis7: "Brand New Transactions" },
  { mymoneyis7: "What I bought with vepy" },
  { mymoneyis7: "Safe E-Commerce" },
];
export default function MyShoppingTransactionsWhatOnePage() {
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>Sahibinden</title>{" "}
        <meta
          name="description"
          content="Web site created using create-react-app"
        />{" "}
      </Helmet>{" "}
      <div className="flex w-full flex-col gap-[92px] bg-white md:gap-[69px] sm:gap-[46px]">
        {" "}
        <Header />{" "}
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <Accordion
                preExpanded={[0]}
                className="w-[22%] flex-col md:w-full"
              >
                {" "}
                {accordionData.map((d, i) => (
                  <AccordionItem uuid={i} key={`buttons${i}`}>
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
                                <div className="flex flex-wrap items-center justify-between gap-3.5 border border-solid border-primary_colors-900 bg-primary_colors-900 p-3">
                                  {" "}
                                  <Text
                                    size="text2xl"
                                    as="p"
                                    className="text-[18.64px] font-normal !text-white"
                                  >
                                    {" "}
                                    {d.mymoneyis7}{" "}
                                  </Text>{" "}
                                  {props?.expanded ? (
                                    <Img
                                      src="images/img_arrow_up.svg"
                                      alt="Arrowup"
                                      className="h-[18px] self-end"
                                    />
                                  ) : (
                                    <Img
                                      src="images/img_frame_primary_colors_900_18x18.svg"
                                      alt="Image"
                                      className="mb-1.5 h-[18px]"
                                    />
                                  )}{" "}
                                </div>{" "}
                              </>
                            )}
                          </AccordionItemState>{" "}
                        </AccordionItemButton>{" "}
                      </AccordionItemHeading>{" "}
                      <AccordionItemPanel>
                        {" "}
                        <div>
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
                                    <div className="flex justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-4">
                                      {" "}
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="w-[70%] text-[15px] font-normal leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis7}{" "}
                                      </Text>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>{" "}
                          <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="w-[78%] text-[15px] font-normal leading-[22px] !text-primary_colors-900"
                            >
                              {" "}
                              What I sold with brand new{" "}
                            </Text>{" "}
                          </div>{" "}
                        </div>{" "}
                      </AccordionItemPanel>{" "}
                    </div>{" "}
                  </AccordionItem>
                ))}{" "}
              </Accordion>
              <div className="flex flex-1 flex-col items-start gap-5 self-center md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  What I Sold with Yepy{" "}
                </Heading>{" "}
                <div className="flex flex-col items-center justify-center gap-5 self-stretch rounded-[10px] bg-white px-[18px] py-[126px] shadow-xs md:py-5">
                  {" "}
                  <Img
                    src="images/img_frame_gray_900_01.svg"
                    alt="Image"
                    className="h-[200px] w-[20%] object-contain"
                  />{" "}
                  <Heading
                    size="text3xl"
                    as="h2"
                    className="text-center text-[20px] font-medium capitalize leading-[30px]"
                  >
                    {" "}
                    <span className="text-black-900_01">
                      {" "}
                      <>
                        {" "}
                        You don&#39;t have any requests yet <br />{" "}
                      </>{" "}
                    </span>{" "}
                    <span className="text-blue_gray-400_03">
                      {" "}
                      Sell ​​your unused electronic devices immediately to Yepy
                      Business Partners with renewal licenses.{" "}
                    </span>{" "}
                  </Heading>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[200px] rounded-[24px] px-[22px] font-medium uppercase sm:px-5"
                  >
                    {" "}
                    Get AN OFFER NOW{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionswhatoneColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
