import { Helmet } from "react-helmet";
import { Button, CheckBox, Heading, Input, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyshoppingtransactionsmybanktwoColumn from "./MyshoppingtransactionsmybanktwoColumn";
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
  { mymoneyis15: "My Money is Safe" },
  { mymoneyis15: "Brand New Transactions" },
  { mymoneyis15: "Safe E-Commerce" },
  { mymoneyis15: "Summary" },
  { mymoneyis15: "My Orders" },
  { mymoneyis15: "My Sales Transaction" },
  { mymoneyis15: "My Product on Sale" },
  { mymoneyis15: "What i will ship" },
  { mymoneyis15: "approval from the buyer" },
  { mymoneyis15: "My Successful Sales" },
  { mymoneyis15: "Returns & Cancellation" },
  { mymoneyis15: "My Products that are not on sale" },
  { mymoneyis15: "My Head office address" },
  { mymoneyis15: "My Distance Contracts" },
  { mymoneyis15: "My delivery / billing addresses" },
  { mymoneyis15: "Comment Management" },
];
export default function MyShoppingTransactionsMyBankTwoPage() {
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
      <div className="flex w-full flex-col gap-[100px] bg-white md:gap-[75px] sm:gap-[50px]">
        {" "}
        <div className="flex flex-col items-center gap-[86px] md:gap-16 sm:gap-[43px]">
          {" "}
          <Header className="self-stretch" />{" "}
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
                                    {d.mymoneyis15}{" "}
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
                                          {d.mymoneyis15}{" "}
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
                                          {d.mymoneyis15}{" "}
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
                                          {d.mymoneyis15}{" "}
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
                                          {d.mymoneyis15}{" "}
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
                                          {d.mymoneyis15}{" "}
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
                                          {d.mymoneyis15}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>
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
                                className="text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                              >
                                {" "}
                                My Bank information{" "}
                              </Text>{" "}
                            </a>{" "}
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
                                          {d.mymoneyis15}{" "}
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
                                          {d.mymoneyis15}{" "}
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
                                          {d.mymoneyis15}{" "}
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
                                          {d.mymoneyis15}{" "}
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
                <div className="flex flex-col gap-3.5">
                  {" "}
                  <div className="flex items-center justify-between gap-5">
                    {" "}
                    <Heading
                      size="text7xl"
                      as="h1"
                      className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                    >
                      {" "}
                      Add New Bank Account{" "}
                    </Heading>{" "}
                    <Button
                      color="primary_colors_900"
                      size="xl"
                      variant="fill"
                      shape="round"
                      className="min-w-[182px] rounded-[24px] px-[30px] font-medium uppercase sm:px-5"
                    >
                      {" "}
                      Add new bank{" "}
                    </Button>{" "}
                  </div>{" "}
                  <div className="flex flex-col gap-5 rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                    {" "}
                    <div className="ml-1.5 flex items-center justify-between gap-5 md:ml-0 md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h2"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        TR ID Number{" "}
                      </Heading>{" "}
                      <Input
                        size="xl"
                        shape="round"
                        name="edittext"
                        className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
                      />{" "}
                    </div>{" "}
                    <div className="ml-1.5 flex items-center justify-between gap-5 md:ml-0 md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h3"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        IBAN{" "}
                      </Heading>{" "}
                      <Input
                        size="xl"
                        shape="round"
                        name="edittext_one"
                        className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
                      />{" "}
                    </div>{" "}
                    <div className="ml-1.5 flex items-center justify-center gap-[30px] md:ml-0 md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h4"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        name Surname{" "}
                      </Heading>{" "}
                      <Input
                        size="xl"
                        shape="round"
                        name="edittext_two"
                        className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5"
                      />{" "}
                    </div>
                    <div className="ml-1.5 flex items-center justify-center gap-[42px] md:ml-0 md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h5"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        Office Address{" "}
                      </Heading>{" "}
                      <Input
                        size="xl"
                        shape="round"
                        name="edittext_three"
                        className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5"
                      />{" "}
                    </div>{" "}
                    <div className="ml-1.5 flex items-center justify-center gap-[38px] md:ml-0 md:flex-col">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h6"
                        className="text-[20px] font-normal capitalize"
                      >
                        {" "}
                        Account Name{" "}
                      </Heading>{" "}
                      <Input
                        size="xl"
                        shape="round"
                        name="edittext_four"
                        className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5"
                      />{" "}
                    </div>{" "}
                    <div className="ml-1.5 flex flex-col items-end gap-5 md:ml-0">
                      {" "}
                      <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                        {" "}
                        <Heading
                          size="text3xl"
                          as="p"
                          className="text-[20px] font-normal capitalize"
                        >
                          {" "}
                          Current Account{" "}
                        </Heading>{" "}
                        <CheckBox
                          size="md"
                          name="checkbox_base"
                          label="Save as my current Account"
                          id="checkboxbase"
                          className="gap-2.5 text-left text-[15px] capitalize leading-[22px] text-black-900_01"
                        />{" "}
                      </div>{" "}
                      <Button
                        color="primary_colors_900"
                        size="5xl"
                        variant="fill"
                        className="min-w-[148px] rounded px-[34px] font-opensans font-bold sm:px-5"
                      >
                        {" "}
                        Save{" "}
                      </Button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <MyshoppingtransactionsmybanktwoColumn />{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
