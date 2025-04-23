import { Helmet } from "react-helmet";
import { Text, SelectBox, Img, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyShoppingTransactionsReturnDropdownlist from "../../components/MyShoppingTransactionsReturnDropdownlist";
import { ReactTable } from "../../components/ReactTable";
import MyshoppingtransactionsreturnoneColumnOne from "./MyshoppingtransactionsreturnoneColumnOne";
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
  { mymoneyis14: "My Money is Safe" },
  { mymoneyis14: "Brand New Transactions" },
  { mymoneyis14: "Safe E-Commerce" },
  { mymoneyis14: "Summary" },
  { mymoneyis14: "My Orders" },
  { mymoneyis14: "My Sales Transaction" },
  { mymoneyis14: "My Product on Sale" },
  { mymoneyis14: "What i will ship" },
  { mymoneyis14: "approval from the buyer" },
  { mymoneyis14: "My Successful Sales" },
  { mymoneyis14: "My Products that are not on sale" },
  { mymoneyis14: "My Bank information" },
  { mymoneyis14: "My Head office address" },
  { mymoneyis14: "My Distance Contracts" },
  { mymoneyis14: "My delivery / billing addresses" },
  { mymoneyis14: "Comment Management" },
];
const table7Data = [
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    rowproductno: "992170042",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
];
export default function MyShoppingTransactionsReturnOnePage() {
  const table7Columns = React.useMemo(() => {
    const table7ColumnHelper = createColumnHelper();
    return [
      table7ColumnHelper.accessor("rowproductno", {
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
          <div className="flex flex-1 justify-between gap-5">
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
      table7ColumnHelper.accessor("salesperson", {
        cell: (info) => (
          <Text as="p" className="text-[16px] font-normal !text-black-900_01">
            {" "}
            {info.getValue()}{" "}
          </Text>
        ),
        header: (info) => (
          <Text
            as="p"
            className="ml-[84px] py-3 text-left text-[16px] font-normal !text-black-900_01"
          >
            {" "}
            Sales Person{" "}
          </Text>
        ),
        meta: { width: "222px" },
      }),
      table7ColumnHelper.accessor("shipmentdate", {
        cell: (info) => (
          <Text
            as="p"
            className="px-[34px] text-[16px] font-normal !text-black-900_01 sm:px-5"
          >
            {" "}
            {info.getValue()}{" "}
          </Text>
        ),
        header: (info) => (
          <Text
            as="p"
            className="py-3 pl-[34px] text-left text-[16px] font-normal !text-black-900_01 sm:pl-5"
          >
            {" "}
            Shipment Date{" "}
          </Text>
        ),
        meta: { width: "266px" },
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
                                      {d.mymoneyis14}{" "}
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
                                            className="w-[56%] text-[15px] font-normal capitalize leading-[22px]"
                                          >
                                            {" "}
                                            {d.mymoneyis14}{" "}
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
                                            className="w-[44%] text-[15px] font-normal capitalize leading-[22px]"
                                          >
                                            {" "}
                                            {d.mymoneyis14}{" "}
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
                                            className="w-[72%] text-[15px] font-normal capitalize leading-[22px]"
                                          >
                                            {" "}
                                            {d.mymoneyis14}{" "}
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
                                            className="w-[56%] text-[15px] font-normal capitalize leading-[22px]"
                                          >
                                            {" "}
                                            {d.mymoneyis14}{" "}
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
                                Returns & Cancellation{" "}
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
                                            {d.mymoneyis14}{" "}
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
                                            {d.mymoneyis14}{" "}
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
                                            {d.mymoneyis14}{" "}
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
                                            {d.mymoneyis14}{" "}
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
                                            {d.mymoneyis14}{" "}
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
                                            className="w-[70%] text-[15px] font-normal capitalize leading-[22px]"
                                          >
                                            {" "}
                                            {d.mymoneyis14}{" "}
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
                      Returns and Cancellations{" "}
                    </Heading>{" "}
                    <div className="flex self-stretch rounded-[10px] border border-solid border-primary_colors-900 bg-white px-3.5 py-[18px]">
                      {" "}
                      <Text
                        size="text2xl"
                        as="p"
                        className="mt-1 text-[18.64px] font-normal capitalize !text-blue_gray-400"
                      >
                        {" "}
                        among the returned items, the advertisement number is.{" "}
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
                  <div className="relative h-[694px] content-center md:h-auto">
                    {" "}
                    <div className="flex flex-1 flex-col gap-5">
                      {" "}
                      <div className="flex items-center justify-between gap-5 rounded-[10px] border border-solid border-primary_colors-900 bg-white px-2.5 py-3.5 md:flex-col">
                        {" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="ml-3.5 text-[18.64px] font-normal capitalize md:ml-0"
                        >
                          {" "}
                          You do not have a returned product.{" "}
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
                          name="grouptwentyfive"
                          options={dropDownOptions}
                          className="w-[32%] gap-2 rounded-[10px] border border-solid border-primary_colors-900 px-[18px] md:w-full md:px-5"
                        />{" "}
                      </div>{" "}
                      <ReactTable
                        size="sm"
                        bodyProps={{ className: "" }}
                        headerCellProps={{ className: "bg-blue_gray-100_7f" }}
                        className="sm:block sm:overflow-x-auto sm:whitespace-nowrap"
                        columns={table7Columns}
                        data={table7Data}
                      />{" "}
                    </div>{" "}
                    <MyShoppingTransactionsReturnDropdownlist className="right-3 top-[9%]" />{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsreturnoneColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
