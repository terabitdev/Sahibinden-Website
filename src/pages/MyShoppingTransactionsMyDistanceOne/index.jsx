import { Helmet } from "react-helmet";
import { Text, Heading, Button, Input, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CloseSVG } from "../../components/Input/close";
import { ReactTable } from "../../components/ReactTable";
import MyshoppingtransactionsmydistanceoneColumnOne from "./MyshoppingtransactionsmydistanceoneColumnOne";
import { createColumnHelper } from "@tanstack/react-table";
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
  { mymoneyis16: "My Money is Safe" },
  { mymoneyis16: "Brand New Transactions" },
  { mymoneyis16: "Safe E-Commerce" },
  { mymoneyis16: "Summary" },
  { mymoneyis16: "My Orders" },
  { mymoneyis16: "My Sales Transaction" },
  { mymoneyis16: "Returns & Cancellation" },
  { mymoneyis16: "My Products that are not on sale" },
  { mymoneyis16: "My Bank information" },
  { mymoneyis16: "My Head office address" },
  { mymoneyis16: "My delivery / billing addresses" },
  { mymoneyis16: "Comment Management" },
];
const table9Data = [
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
  {
    adno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    sellby: "M.Umer",
  },
];
export default function MyShoppingTransactionsMyDistanceOnePage() {
  const [searchBarValue78, setSearchBarValue78] = React.useState("");
  const table9Columns = React.useMemo(() => {
    const table9ColumnHelper = createColumnHelper();
    return [
      table9ColumnHelper.accessor("adno", {
        cell: (info) => (
          <div className="flex px-3.5">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              {info.getValue()}{" "}
            </Text>{" "}
          </div>
        ),
        header: (info) => (
          <Text
            as="p"
            className="py-3 pl-3.5 text-left text-[16px] font-normal !text-black-900_01"
          >
            {" "}
            Ad No{" "}
          </Text>
        ),
        meta: { width: "272px" },
      }),
      table9ColumnHelper.accessor("producttitle", {
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
          <Text
            as="p"
            className="py-3 text-left text-[16px] font-normal !text-black-900_01"
          >
            {" "}
            Product Title{" "}
          </Text>
        ),
        meta: { width: "268px" },
      }),
      table9ColumnHelper.accessor("salesperson", {
        cell: (info) => (
          <div className="flex flex-1">
            {" "}
            <Text as="p" className="text-[16px] font-normal !text-black-900_01">
              {" "}
              {info.getValue()}{" "}
            </Text>{" "}
          </div>
        ),
        header: (info) => (
          <Text
            as="p"
            className="py-3 text-left text-[16px] font-normal !text-black-900_01"
          >
            {" "}
            Sales Person{" "}
          </Text>
        ),
        meta: { width: "306px" },
      }),
      table9ColumnHelper.accessor("sellby", {
        cell: (info) => (
          <Text as="p" className="text-[16px] font-normal !text-black-900_01">
            {" "}
            {info.getValue()}{" "}
          </Text>
        ),
        header: (info) => (
          <Text
            as="p"
            className="py-3 text-left text-[16px] font-normal !text-black-900_01"
          >
            {" "}
            Sell By{" "}
          </Text>
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
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div>
              {" "}
              <div className="flex items-center gap-[30px] md:flex-col">
                {" "}
                <div className="relative h-[936px] w-[22%] content-end md:h-auto md:w-full">
                  {" "}
                  <div className="mx-auto mb-[110px] flex-1">
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
                          className="w-[56%] text-[15px] font-normal capitalize leading-[22px]"
                        >
                          {" "}
                          My Product on Sale{" "}
                        </Text>{" "}
                      </a>{" "}
                    </div>{" "}
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
                          className="w-[44%] text-[15px] font-normal capitalize leading-[22px]"
                        >
                          {" "}
                          What i will ship{" "}
                        </Text>{" "}
                      </a>{" "}
                    </div>{" "}
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
                          className="w-[72%] text-[15px] font-normal capitalize leading-[22px]"
                        >
                          {" "}
                          approval from the buyer{" "}
                        </Text>{" "}
                      </a>{" "}
                    </div>
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
                          className="w-[56%] text-[15px] font-normal capitalize leading-[22px]"
                        >
                          {" "}
                          My Successful Sales{" "}
                        </Text>{" "}
                      </a>{" "}
                    </div>{" "}
                    <div className="mt-[218px] border border-solid border-primary_colors-900 bg-white p-4">
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                      >
                        {" "}
                        My Distance Contracts{" "}
                      </Text>{" "}
                    </div>{" "}
                  </div>
                  <Accordion className="absolute bottom-0 left-0 right-0 top-0 m-auto flex-1 flex-col">
                    {" "}
                    {accordionData.map((d, i) => (
                      <AccordionItem uuid={i} key={`expandablelistm${i}`}>
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
                                  <div className="flex flex-1 items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-2.5">
                                    {" "}
                                    <a
                                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                      target="_blank"
                                    >
                                      {" "}
                                      <Text
                                        size="text2xl"
                                        as="p"
                                        className="mt-1 self-end text-[18.64px] font-normal"
                                      >
                                        {" "}
                                        {d.mymoneyis16}{" "}
                                      </Text>{" "}
                                    </a>{" "}
                                    <Img
                                      src="images/img_frame_primary_colors_900_18x18.svg"
                                      alt="Image"
                                      className="h-[18px]"
                                    />{" "}
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
                </div>
                <div className="flex flex-1 flex-col gap-4 md:self-stretch">
                  {" "}
                  <div className="flex flex-col items-start gap-5">
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
                      name="search"
                      placeholder={`In my sales with ad no.`}
                      value={searchBarValue78}
                      onChange={(e) => setSearchBarValue78(e.target.value)}
                      suffix={
                        searchBarValue78?.length > 0 ? (
                          <CloseSVG onClick={() => setSearchBarValue78("")} />
                        ) : null
                      }
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
                  <div className="flex flex-col items-start gap-5">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h2"
                      className="text-[20px] font-normal"
                    >
                      {" "}
                      You can review your distance contracts on this page.{" "}
                    </Heading>{" "}
                    <ReactTable
                      size="sm"
                      bodyProps={{ className: "" }}
                      headerCellProps={{ className: "bg-blue_gray-100_7f" }}
                      className="self-stretch sm:block sm:overflow-x-auto sm:whitespace-nowrap"
                      columns={table9Columns}
                      data={table9Data}
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <MyshoppingtransactionsmydistanceoneColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
