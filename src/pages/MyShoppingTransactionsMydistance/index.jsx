import { Helmet } from "react-helmet";
import { Text, Heading, Button, Input, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import MyshoppingtransactionsmydistanceColumnOne from "./MyshoppingtransactionsmydistanceColumnOne";
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
const accordionData = [
  { mymoneyis11: "My Money is Safe" },
  { mymoneyis11: "Brand New Transactions" },
  { mymoneyis11: "Safe E-Commerce" },
  { mymoneyis11: "Summary" },
  { mymoneyis11: "My Orders" },
  { mymoneyis11: "My Current Orders" },
  { mymoneyis11: "Return & Cancellation Procedures" },
  { mymoneyis11: "My Completed Orders" },
  { mymoneyis11: "My Sales Transaction" },
];
const table2Data = [
  {
    rowproductno: "992170042",
    rowproducttitle: "House",
    rowsalesperson: "M.Umer",
    rowsellby: "M.Umer",
  },
  {
    rowproductno: "992170042",
    rowproducttitle: "House",
    rowsalesperson: "M.Umer",
    rowsellby: "M.Umer",
  },
  {
    rowproductno: "992170042",
    rowproducttitle: "House",
    rowsalesperson: "M.Umer",
    rowsellby: "M.Umer",
  },
  {
    rowproductno: "992170042",
    rowproducttitle: "House",
    rowsalesperson: "M.Umer",
    rowsellby: "M.Umer",
  },
  {
    rowproductno: "992170042",
    rowproducttitle: "House",
    rowsalesperson: "M.Umer",
    rowsellby: "M.Umer",
  },
];
export default function MyShoppingTransactionsMydistancePage() {
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("rowproductno", {
        cell: (info) => (
          <div className="flex px-1.5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              {info.getValue()}{" "}
            </Text>{" "}
          </div>
        ),
        header: (info) => (
          <div className="flex px-1.5 py-3">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              Product No{" "}
            </Text>{" "}
          </div>
        ),
        meta: { width: "102px" },
      }),
      table2ColumnHelper.accessor("rowproducttitle", {
        cell: (info) => (
          <div className="ml-[162px] flex items-center justify-between gap-5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              {info.getValue()}{" "}
            </Text>{" "}
            <div className="mr-[84px] h-[30px] w-px bg-white" />{" "}
          </div>
        ),
        header: (info) => (
          <div className="ml-[162px] flex items-center py-2.5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              Product Title{" "}
            </Text>{" "}
            <div className="mr-[84px] h-[30px] w-px bg-white" />{" "}
          </div>
        ),
        meta: { width: "268px" },
      }),
      table2ColumnHelper.accessor("rowsalesperson", {
        cell: (info) => (
          <div className="flex flex-1 items-center justify-between gap-5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              {info.getValue()}{" "}
            </Text>{" "}
            <div className="mr-[84px] h-[30px] w-px bg-white" />{" "}
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 items-center justify-between gap-5 py-2.5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              Sales Person{" "}
            </Text>{" "}
            <div className="mr-[84px] h-[30px] w-px bg-white" />{" "}
          </div>
        ),
        meta: { width: "306px" },
      }),
      table2ColumnHelper.accessor("rowsellby", {
        cell: (info) => (
          <div className="flex">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              {info.getValue()}{" "}
            </Text>{" "}
          </div>
        ),
        header: (info) => (
          <div className="flex py-3">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              Sell By{" "}
            </Text>{" "}
          </div>
        ),
        meta: { width: "180px" },
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
              <div className="w-[22%] md:w-full">
                {" "}
                <Accordion preExpanded={[0]} className="flex-col">
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
                                      {d.mymoneyis11}{" "}
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
                        </AccordionItemHeading>
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
                                            {d.mymoneyis11}{" "}
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
                                            {d.mymoneyis11}{" "}
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
                                            className="w-[86%] text-[15px] font-normal capitalize leading-[22px]"
                                          >
                                            {" "}
                                            {d.mymoneyis11}{" "}
                                          </Text>{" "}
                                        </a>{" "}
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
                                className="w-[64%] text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                              >
                                {" "}
                                My distance Contracts{" "}
                              </Text>{" "}
                            </div>{" "}
                          </div>{" "}
                        </AccordionItemPanel>{" "}
                      </div>{" "}
                    </AccordionItem>
                  ))}{" "}
                </Accordion>
                <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                  {" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="w-[86%] text-[15px] font-normal capitalize leading-[22px]"
                  >
                    {" "}
                    My delivery / billing addresses{" "}
                  </Text>{" "}
                </div>{" "}
                <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                  {" "}
                  <Text
                    size="textlg"
                    as="p"
                    className="w-[70%] text-[15px] font-normal capitalize leading-[22px]"
                  >
                    {" "}
                    Comment Management{" "}
                  </Text>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex flex-1 flex-col items-start md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  My Distance Contracts{" "}
                </Heading>{" "}
                <Input
                  size="4xl"
                  shape="round"
                  name="grouptwentysix"
                  placeholder={`In my sales with ad no.`}
                  className="mt-5 self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-3.5 capitalize !text-blue_gray-400"
                />{" "}
                <Button
                  color="primary_colors_900"
                  size="xl"
                  variant="fill"
                  shape="round"
                  className="mt-5 min-w-[124px] rounded-[24px] px-[30px] font-medium uppercase sm:px-5"
                >
                  {" "}
                  Search{" "}
                </Button>{" "}
                <Heading
                  size="text3xl"
                  as="h2"
                  className="mt-4 text-[20px] font-normal"
                >
                  {" "}
                  You can review your distance contracts on this page.{" "}
                </Heading>
                <ReactTable
                  size="xs"
                  variant="simple"
                  bodyProps={{
                    className:
                      "before:content-['-'] before:opacity-0 before:leading-[50px]",
                  }}
                  headerCellProps={{ className: "bg-blue_gray-100_7f" }}
                  rowDataProps={{ className: "bg-blue_gray-100_7f" }}
                  className="mt-[30px] self-stretch sm:block sm:overflow-x-auto sm:whitespace-nowrap"
                  columns={table2Columns}
                  data={table2Data}
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsmydistanceColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
