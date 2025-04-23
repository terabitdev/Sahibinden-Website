import { Helmet } from "react-helmet";
import { Text, SelectBox, Img, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import MyshoppingtransactionsmysuccessfulColumnOne from "./MyshoppingtransactionsmysuccessfulColumnOne";
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
  { mymoneyis13: "My Money is Safe" },
  { mymoneyis13: "Brand New Transactions" },
  { mymoneyis13: "Safe E-Commerce" },
  { mymoneyis13: "Summary" },
  { mymoneyis13: "My Orders" },
  { mymoneyis13: "My Sales Transaction" },
  { mymoneyis13: "My Product on Sale" },
  { mymoneyis13: "What i will ship" },
  { mymoneyis13: "approval from the buyer" },
  { mymoneyis13: "Returns & Cancellation" },
  { mymoneyis13: "My Products that are not on sale" },
  { mymoneyis13: "My Bank information" },
  { mymoneyis13: "My Head office address" },
  { mymoneyis13: "My Distance Contracts" },
  { mymoneyis13: "My delivery / billing addresses" },
  { mymoneyis13: "Comment Management" },
];
const table6Data = [
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
  {
    productno: "992170042",
    producttitle: "House",
    salesperson: "M.Umer",
    shipmentdate: "3/20/2025",
  },
];
export default function MyShoppingTransactionsMySuccessfulPage() {
  const table6Columns = React.useMemo(() => {
    const table6ColumnHelper = createColumnHelper();
    return [
      table6ColumnHelper.accessor("productno", {
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
            Product No{" "}
          </Text>
        ),
        meta: { width: "272px" },
      }),
      table6ColumnHelper.accessor("producttitle", {
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
      table6ColumnHelper.accessor("salesperson", {
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
      table6ColumnHelper.accessor("shipmentdate", {
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
            Shipment Date{" "}
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
            <div className="flex items-center gap-7 md:flex-col">
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
                                    {d.mymoneyis13}{" "}
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
                                          {d.mymoneyis13}{" "}
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
                                          {d.mymoneyis13}{" "}
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
                                          {d.mymoneyis13}{" "}
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
                              className="w-[56%] text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                            >
                              {" "}
                              My Successful Sales{" "}
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
                                          className="w-[86%] text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis13}{" "}
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
                                          {d.mymoneyis13}{" "}
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
                                          {d.mymoneyis13}{" "}
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
                                          {d.mymoneyis13}{" "}
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
                                          {d.mymoneyis13}{" "}
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
                                          {d.mymoneyis13}{" "}
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
                                          {d.mymoneyis13}{" "}
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
                    My Successful Sales{" "}
                  </Heading>{" "}
                  <div className="flex self-stretch rounded-[10px] border border-solid border-primary_colors-900 bg-white px-3.5 py-[18px]">
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="mt-1 text-[18.64px] font-normal capitalize !text-blue_gray-400"
                    >
                      {" "}
                      among the ones i expect approval from the buyer, the
                      advertisement number is.{" "}
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
                <div className="flex flex-col gap-5">
                  {" "}
                  <div className="flex items-center justify-between gap-5 rounded-[10px] border border-solid border-primary_colors-900 bg-white px-2.5 py-3.5 md:flex-col">
                    {" "}
                    <Text
                      size="text2xl"
                      as="p"
                      className="mb-1 ml-3.5 self-end text-[18.64px] font-normal capitalize md:ml-0"
                    >
                      {" "}
                      Check your successful sales approved by the buyer on this
                      page.{" "}
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
                      name="grouptwentyfour"
                      options={dropDownOptions}
                      className="w-[32%] gap-2 rounded-[10px] border border-solid border-primary_colors-900 px-[18px] md:w-full md:px-5"
                    />{" "}
                  </div>
                  <ReactTable
                    size="sm"
                    bodyProps={{ className: "" }}
                    headerCellProps={{ className: "bg-blue_gray-100_7f" }}
                    className="sm:block sm:overflow-x-auto sm:whitespace-nowrap"
                    columns={table6Columns}
                    data={table6Data}
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsmysuccessfulColumnOne />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
