import { Helmet } from "react-helmet";
import { Text, Button, SelectBox, Img, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import MyshoppingtransactionsmyproductColumn from "./MyshoppingtransactionsmyproductColumn";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import {
  AccordionItemPanel,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table3Data = [
  {
    rowproductno: "992170042",
    rowproducttitle: "House",
    row: "M.Umer",
    byDateOf: "By date of termination(Newest First)",
  },
  {
    rowproductno: "992170042",
    rowproducttitle: "House",
    row: "M.Umer",
    itemfour: "By price (Highest First)",
  },
  { rowproductno: "992170042", rowproducttitle: "House", row: "M.Umer" },
  { rowproductno: "992170042", rowproducttitle: "House", row: "M.Umer" },
  { rowproductno: "992170042", rowproducttitle: "House", row: "M.Umer" },
  { rowproductno: "992170042", rowproducttitle: "House", row: "M.Umer" },
  { rowproductno: "992170042", rowproducttitle: "House", row: "M.Umer" },
  { rowproductno: "992170042", rowproducttitle: "House", row: "M.Umer" },
  { rowproductno: "992170042", rowproducttitle: "House", row: "M.Umer" },
  { rowproductno: "992170042", rowproducttitle: "House", row: "M.Umer" },
];
export default function MyShoppingTransactionsMyProductPage() {
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("rowproductno", {
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
      table3ColumnHelper.accessor("rowproducttitle", {
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
      table3ColumnHelper.accessor("row", {
        cell: (info) => (
          <div className="flex-1">
            {" "}
            <div className="flex items-center justify-between gap-5 sm:flex-col">
              {" "}
              <Text
                as="p"
                className="text-[16px] font-normal !text-black-900_01"
              >
                {" "}
                {info.getValue()}{" "}
              </Text>{" "}
              <div className="relative h-[44px] w-[68%] content-center md:h-auto sm:w-full">
                {" "}
                <div className="ml-[68px] flex w-[56%] items-center justify-between gap-5 md:ml-0">
                  {" "}
                  <div className="h-[30px] w-px bg-white" />{" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal !text-black-900_01"
                  >
                    {" "}
                    M.Umer{" "}
                  </Text>{" "}
                </div>{" "}
                <Button
                  size="lg"
                  variant="fill"
                  shape="square"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto flex-1 px-4 font-montserrat !text-blue_gray-900_01"
                >
                  {" "}
                  {info.row.original.byDateOf}{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ),
        header: (info) => (
          <div className="flex-1">
            {" "}
            <div className="mt-2 flex items-start justify-between gap-5 sm:flex-col">
              {" "}
              <Text
                as="p"
                className="text-[16px] font-normal !text-black-900_01"
              >
                {" "}
                Sales Person{" "}
              </Text>{" "}
              <div className="relative h-[44px] w-[68%] self-center md:h-auto sm:w-full">
                {" "}
                <div className="flex w-[56%] items-center justify-between gap-5">
                  {" "}
                  <div className="h-[30px] w-px bg-white" />{" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal !text-black-900_01"
                  >
                    {" "}
                    Sales Person{" "}
                  </Text>{" "}
                </div>{" "}
                <Text
                  as="p"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max bg-white py-3 pl-4 pr-[26px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
                >
                  {" "}
                  By date of termination(Oldest First){" "}
                </Text>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ),
        meta: { width: "488px" },
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
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div>
              {" "}
              <div className="flex items-center gap-[30px] md:flex-col">
                {" "}
                <Accordion
                  preExpanded={[0]}
                  className="w-[22%] flex-col md:w-full"
                >
                  {" "}
                  {[...Array(16)].map((_, i) => (
                    <AccordionItem uuid={i} key={`expandablelistm${i}`}>
                      {" "}
                      <div className="flex-1 border border-solid border-primary_colors-900 bg-white px-5">
                        {" "}
                        <AccordionItemPanel>
                          {" "}
                          <div className="mt-4 flex flex-col items-start gap-8 self-end">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                            >
                              {" "}
                              My Product on Sale{" "}
                            </Text>{" "}
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
                                What i will ship{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                        </AccordionItemPanel>{" "}
                      </div>{" "}
                    </AccordionItem>
                  ))}{" "}
                </Accordion>
                <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
                  {" "}
                  <div className="flex flex-col items-start gap-5">
                    {" "}
                    <Heading
                      size="text7xl"
                      as="h1"
                      className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                    >
                      {" "}
                      My Products on Sale{" "}
                    </Heading>{" "}
                    <Input
                      size="4xl"
                      shape="round"
                      type="number"
                      name="grouptwentynine"
                      placeholder={`Enter product number or word`}
                      className="self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-3.5 capitalize !text-blue_gray-400"
                    />{" "}
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
                  <div className="relative h-[694px] content-center md:h-auto">
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
                          You do not have any products for sale.{" "}
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
                          name="groupthirty"
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
                        columns={table3Columns}
                        data={table3Data}
                      />{" "}
                    </div>{" "}
                    <Text
                      as="p"
                      className="absolute right-[11px] top-[9%] m-auto bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
                    >
                      {" "}
                      According to notification{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsmyproductColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
