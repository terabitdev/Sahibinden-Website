import { Helmet } from "react-helmet";
import { Text, SelectBox, Img, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyShoppingTransactionsReturnDropdownlist from "../../components/MyShoppingTransactionsReturnDropdownlist";
import { ReactTable } from "../../components/ReactTable";
import MyshoppingtransactionsmycompletedColumnOne from "./MyshoppingtransactionsmycompletedColumnOne";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const accordionData = [
  { mymoneyis10: "My Money is Safe" },
  { mymoneyis10: "Brand New Transactions" },
  { mymoneyis10: "Safe E-Commerce" },
  { mymoneyis10: "Summary" },
  { mymoneyis10: "My Orders" },
  { mymoneyis10: "My Current Orders" },
  { mymoneyis10: "Return & Cancellation Procedures" },
  { mymoneyis10: "My distance Contracts" },
  { mymoneyis10: "My Sales Transaction" },
  { mymoneyis10: "My delivery / billing addresses" },
  { mymoneyis10: "Comment Management" },
];
const table1Data = [
  {
    rowadno: "12109",
    rowpropertytype: "Building",
    rowannouncement: "3/20/2025",
  },
  {
    rowadno: "12109",
    rowpropertytype: "Building",
    rowannouncement: "3/20/2025",
  },
  {
    rowadno: "12109",
    rowpropertytype: "Building",
    rowannouncement: "3/20/2025",
  },
  {
    rowadno: "12109",
    rowpropertytype: "Building",
    rowannouncement: "3/20/2025",
  },
  {
    rowadno: "12109",
    rowpropertytype: "Building",
    rowannouncement: "3/20/2025",
  },
];
export default function MyShoppingTransactionsMyCompletedPage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowadno", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              {info.getValue()}{" "}
            </Text>{" "}
            <div className="mr-[84px] h-[30px] w-px bg-white" />{" "}
          </div>
        ),
        header: (info) => (
          <div className="flex items-center py-2.5 pl-3.5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              Ad No{" "}
            </Text>{" "}
            <div className="mr-[84px] h-[30px] w-px bg-white" />{" "}
          </div>
        ),
        meta: { width: "218px" },
      }),
      table1ColumnHelper.accessor("rowpropertytype", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              {info.getValue()}{" "}
            </Text>{" "}
            <div className="mr-[84px] h-[30px] w-px bg-white" />{" "}
          </div>
        ),
        header: (info) => (
          <div className="flex items-center py-2.5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              Property Type{" "}
            </Text>{" "}
            <div className="mr-[84px] h-[30px] w-px bg-white" />{" "}
          </div>
        ),
        meta: { width: "280px" },
      }),
      table1ColumnHelper.accessor("rowannouncement", {
        cell: (info) => (
          <div className="flex items-center sm:flex-col">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              {info.getValue()}{" "}
            </Text>{" "}
            <div className="ml-[168px] h-[30px] w-px bg-white sm:ml-0 sm:h-px sm:w-[30px]" />{" "}
            <Text
              as="p"
              className="ml-[84px] text-[16px] font-normal !text-black-900_01 sm:ml-0"
            >
              {" "}
              TL333{" "}
            </Text>{" "}
          </div>
        ),
        header: (info) => (
          <div className="flex items-center py-2.5 pr-3.5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              Announcement Date{" "}
            </Text>{" "}
            <div className="h-[30px] w-px bg-white" />{" "}
            <Text
              as="p"
              className="mr-1 text-[16px] font-normal !text-black-900_01"
            >
              {" "}
              Price{" "}
            </Text>{" "}
          </div>
        ),
        meta: { width: "380px" },
      }),
    ];
  }, []);
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
        <div className="flex flex-col items-center gap-[84px] md:gap-[63px] sm:gap-[42px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-center gap-[30px] md:flex-col">
              {" "}
              <Accordion
                preExpanded={[0]}
                className="w-[22%] flex-col md:w-full"
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
                                    {d.mymoneyis10}{" "}
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
                                      <a
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                        target="_blank"
                                      >
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="w-[52%] text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis10}{" "}
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
                                          {d.mymoneyis10}{" "}
                                        </Text>{" "}
                                      </a>{" "}
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
                              className="w-[86%] text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                            >
                              {" "}
                              My Completed Orders{" "}
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
                                          {d.mymoneyis10}{" "}
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
              <div className="flex-1 md:self-stretch">
                {" "}
                <div className="flex flex-col gap-[30px]">
                  {" "}
                  <div className="flex flex-col items-start gap-5">
                    {" "}
                    <Heading
                      size="text7xl"
                      as="h1"
                      className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                    >
                      {" "}
                      My Completed Orders{" "}
                    </Heading>{" "}
                    <div className="flex flex-col items-start gap-5 self-stretch">
                      {" "}
                      <div className="flex self-stretch rounded-[10px] border border-solid border-primary_colors-900 bg-white px-3.5 py-[18px]">
                        {" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="mt-1 text-[18.64px] font-normal capitalize !text-blue_gray-400"
                        >
                          {" "}
                          Among the products i purchased, there are
                          advertisement no.{" "}
                        </Text>{" "}
                      </div>{" "}
                      <Button
                        color="primary_colors_900"
                        size="xl"
                        variant="fill"
                        shape="round"
                        className="min-w-[124px] rounded-[24px] px-[30px] font-medium uppercase sm:px-5"
                      >
                        {" "}
                        Search{" "}
                      </Button>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="relative h-[444px] content-center md:h-auto">
                    {" "}
                    <div className="flex flex-1 flex-col gap-5">
                      {" "}
                      <div className="flex items-center justify-between gap-5 rounded-[10px] border border-solid border-primary_colors-900 bg-white px-2.5 py-3.5 md:flex-col">
                        {" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="mb-1 ml-3.5 self-end text-[18.64px] font-normal capitalize md:ml-0"
                        >
                          {" "}
                          You do not have any completed Orders.{" "}
                        </Text>{" "}
                        <SelectBox
                          size="xs"
                          shape="round"
                          indicator={
                            <Img
                              src="images/img_frame_2.svg"
                              alt="Frame"
                              className="h-[24px] w-[24px]"
                            />
                          }
                          name="grouptwentyeigh"
                          options={dropDownOptions}
                          className="w-[32%] gap-2 rounded-[10px] border border-solid border-primary_colors-900 px-[18px] md:w-full md:px-5"
                        />{" "}
                      </div>
                      <ReactTable
                        size="xs"
                        variant="simple"
                        bodyProps={{ className: "" }}
                        headerCellProps={{ className: "bg-blue_gray-100_7f" }}
                        rowDataProps={{ className: "bg-blue_gray-100_7f" }}
                        className="sm:block sm:overflow-x-auto sm:whitespace-nowrap"
                        columns={table1Columns}
                        data={table1Data}
                      />{" "}
                    </div>{" "}
                    <MyShoppingTransactionsReturnDropdownlist className="right-[11px] top-[13%]" />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsmycompletedColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
