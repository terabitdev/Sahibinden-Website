import { Helmet } from "react-helmet";
import { Input, Text, SelectBox, Img, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import MyshoppingtransactionsmyproductsColumnOne from "./MyshoppingtransactionsmyproductsColumnOne";
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
const table8Data = [
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
    itemthree: "By release date(Newest First)",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
    itemthree: "By posting date (Oldest First)",
    itemfive: "By ad date (Newest First)",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
    itemthree: "By price (Highest First)",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
    itemthree: "By price (Lowest First)",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    stackshipmentda: "3/20/2025",
  },
];

export default function MyShoppingTransactionsMyProductsPage() {
  const table8Columns = React.useMemo(() => {
    const table8ColumnHelper = createColumnHelper();
    return [
      table8ColumnHelper.accessor("rowproductno", {
        cell: (info) => (
          <div className="flex flex-1 items-center gap-[84px] px-3.5">
            {" "}
            <div className="flex">
              {" "}
              <Text
                as="p"
                className="text-[16px] font-normal !text-black-900_01"
              >
                {" "}
                {info.getValue()}{" "}
              </Text>{" "}
            </div>{" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              House{" "}
            </Text>{" "}
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 justify-between gap-5 self-start">
            {" "}
            <div className="relative h-[30px] w-[38%] content-center md:h-auto">
              {" "}
              <Text
                as="p"
                className="text-[16px] font-normal !text-black-900_01"
              >
                {" "}
                Product No{" "}
              </Text>{" "}
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1">
                {" "}
                <Text
                  as="p"
                  className="text-[16px] font-normal !text-black-900_01"
                >
                  {" "}
                  Product No{" "}
                </Text>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative h-[30px] w-[42%] content-center md:h-auto">
              {" "}
              <Text
                as="p"
                className="text-[16px] font-normal !text-black-900_01"
              >
                {" "}
                Product Title{" "}
              </Text>{" "}
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1">
                {" "}
                <Text
                  as="p"
                  className="text-[16px] font-normal !text-black-900_01"
                >
                  {" "}
                  Product Title{" "}
                </Text>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ),
        meta: { width: "442px" },
      }),

      table8ColumnHelper.accessor("salesperson", {
        cell: (info) => (
          <Text as="p" className="text-[16px] font-normal !text-black-900_01">
            {" "}
            {info.getValue()}{" "}
          </Text>
        ),
        header: (info) => (
          <Text
            as="p"
            className="ml-[84px] pb-4 pt-1 text-left text-[16px] font-normal !text-black-900_01"
          >
            {" "}
            Sales Person{" "}
          </Text>
        ),
        meta: { width: "152px" },
      }),
      table8ColumnHelper.accessor("stackshipmentda", {
        cell: (info) => (
          <div className="relative h-[50px] content-center md:h-auto">
            {" "}
            <Text
              as="p"
              className="ml-auto mr-[98px] text-[16px] font-normal !text-black-900_01 md:mr-0"
            >
              {" "}
              {info.getValue()}{" "}
            </Text>{" "}
            <Text
              as="p"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal !text-blue_gray-900_01 sm:pr-5"
            >
              {" "}
              {info.row.original.itemthree}{" "}
            </Text>{" "}
          </div>
        ),
        header: (info) => (
          <div className="relative h-[44px] md:h-auto">
            {" "}
            <Text
              as="p"
              className="mr-[60px] text-[16px] font-normal !text-black-900_01 md:mr-0"
            >
              {" "}
              Shipment Date{" "}
            </Text>{" "}
            <Text
              as="p"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max bg-white py-3 pl-4 !font-montserrat text-[16px] font-normal !text-blue_gray-900_01"
            >
              {" "}
              By date of discontinuation(Oldest First){" "}
            </Text>{" "}
          </div>
        ),
        meta: { width: "336px" },
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
                          <div className="mb-4 flex flex-col items-start gap-[252px] md:gap-[189px] sm:gap-[126px]">
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
                                My Product on Sale{" "}
                              </Text>{" "}
                            </a>{" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                            >
                              {" "}
                              My Products that are not on sale{" "}
                            </Text>{" "}
                          </div>{" "}
                        </AccordionItemPanel>{" "}
                      </div>{" "}
                    </AccordionItem>
                  ))}{" "}
                </Accordion>{" "}
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
                      My Products That Are Not On Sale{" "}
                    </Heading>{" "}
                    <Input
                      size="4xl"
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Enter product name or word`}
                      className="self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-3.5 capitalize !text-blue_gray-400"
                    />
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
                    <div className="flex flex-1 flex-col gap-7">
                      {" "}
                      <div className="flex items-center justify-between gap-5 rounded-[10px] border border-solid border-primary_colors-900 bg-white px-2.5 py-3.5 md:flex-col">
                        {" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="mb-1 ml-3.5 self-end text-[18.64px] font-normal capitalize md:ml-0"
                        >
                          {" "}
                          You do not have any products that are not on sale.{" "}
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
                          name="groupthirtyseve"
                          options={dropDownOptions}
                          className="w-[32%] gap-2 rounded-[10px] border border-solid border-primary_colors-900 px-[18px] md:w-full md:px-5"
                        />{" "}
                      </div>{" "}
                      <ReactTable
                        size="sm"
                        bodyProps={{ className: "" }}
                        headerCellProps={{ className: "bg-white" }}
                        className="sm:block sm:overflow-x-auto sm:whitespace-nowrap"
                        columns={table8Columns}
                        data={table8Data}
                      />{" "}
                    </div>{" "}
                    <Input
                      size="xs"
                      shape="square"
                      name="itemone_one"
                      placeholder={`According to notification`}
                      className="absolute right-3 top-[9%] m-auto w-[32%] px-3.5 font-montserrat !text-blue_gray-900_01"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <MyshoppingtransactionsmyproductsColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
