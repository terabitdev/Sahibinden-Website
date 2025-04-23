import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyshoppingtransactionsmybankColumn from "./MyshoppingtransactionsmybankColumn";
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
  { mymoneyis1: "My Money is Safe" },
  { mymoneyis1: "Brand New Transactions" },
  { mymoneyis1: "Safe E-Commerce" },
  { mymoneyis1: "Summary" },
  { mymoneyis1: "My Orders" },
  { mymoneyis1: "My Sales Transaction" },
  { mymoneyis1: "My Product on Sale" },
  { mymoneyis1: "What i will ship" },
  { mymoneyis1: "approval from the buyer" },
  { mymoneyis1: "My Successful Sales" },
  { mymoneyis1: "Returns & Cancellation" },
  { mymoneyis1: "My Products that are not on sale" },
  { mymoneyis1: "My Head office address" },
  { mymoneyis1: "My Distance Contracts" },
  { mymoneyis1: "My delivery / billing addresses" },
  { mymoneyis1: "Comment Management" },
];
export default function MyShoppingTransactionsMyBankPage() {
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
      <div className="flex w-full flex-col gap-[86px] bg-white md:gap-16 sm:gap-[43px]">
        {" "}
        <Header className="mr-10 md:mr-0" />{" "}
        <div className="flex flex-col items-center gap-24 md:gap-[72px] sm:gap-12">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <Accordion
                preExpanded={[0]}
                className="mt-1 w-[22%] flex-col self-center md:w-full"
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
                                    className="w-[60%] text-[15px] font-normal leading-[22px] !text-primary_colors-900"
                                  >
                                    {" "}
                                    {d.mymoneyis1}{" "}
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
                        </AccordionItemButton>{" "}
                      </AccordionItemHeading>{" "}
                      <AccordionItemPanel>
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
                                        className="w-[56%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis1}{" "}
                                      </Text>{" "}
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
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="w-[44%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis1}{" "}
                                      </Text>{" "}
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
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="w-[72%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis1}{" "}
                                      </Text>{" "}
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
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="w-[56%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis1}{" "}
                                      </Text>{" "}
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
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="w-[66%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis1}{" "}
                                      </Text>{" "}
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
                                    <div className="border border-solid border-primary_colors-900 bg-white p-4">
                                      {" "}
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis1}{" "}
                                      </Text>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>
                          <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="w-[58%] text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                            >
                              {" "}
                              My Bank information{" "}
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
                                    <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                                      {" "}
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="w-[68%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis1}{" "}
                                      </Text>{" "}
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
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="w-[64%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis1}{" "}
                                      </Text>{" "}
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
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="w-[86%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis1}{" "}
                                      </Text>{" "}
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
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="w-[70%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis1}{" "}
                                      </Text>{" "}
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
              <div className="flex flex-1 flex-col gap-3.5 md:self-stretch">
                {" "}
                <div className="flex items-center justify-between gap-5">
                  {" "}
                  <Heading
                    size="text7xl"
                    as="h1"
                    className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                  >
                    {" "}
                    My Bank Information{" "}
                  </Heading>{" "}
                  <a
                    href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                    target="_blank"
                  >
                    {" "}
                    <Button
                      color="primary_colors_900"
                      size="xl"
                      variant="fill"
                      shape="round"
                      className="min-w-[182px] rounded-[24px] px-[30px] font-medium uppercase sm:px-5"
                    >
                      {" "}
                      Add new Bank{" "}
                    </Button>{" "}
                  </a>{" "}
                </div>{" "}
                <div className="flex flex-col items-center justify-center gap-5 rounded-[10px] bg-white px-14 py-[140px] shadow-xs md:p-5">
                  {" "}
                  <Img
                    src="images/img_frame_gray_900_01.svg"
                    alt="Image"
                    className="h-[200px] w-[22%] object-contain"
                  />{" "}
                  <Heading
                    size="text3xl"
                    as="h2"
                    className="text-[20px] font-medium capitalize"
                  >
                    {" "}
                    You do not have a registered account. Click to create a new
                    account .{" "}
                  </Heading>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[214px] rounded-[24px] px-[34px] font-medium uppercase sm:px-5"
                  >
                    {" "}
                    Create NEW bank{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsmybankColumn />{" "}
          <Footer className="self-stretch bg-black-0" />{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
