import { Helmet } from "react-helmet";
import {
  Button,
  Heading,
  Img,
  Text,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbItem,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyshoppingtransactionsmydeliverytwoColumn from "./MyshoppingtransactionsmydeliverytwoColumn";
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
  { mymoneyis3: "My Money is Safe" },
  { mymoneyis3: "Brand New Transactions" },
  { mymoneyis3: "Safe E-Commerce" },
  { mymoneyis3: "Summary" },
  { mymoneyis3: "My Orders" },
  { mymoneyis3: "My Sales Transaction" },
  { mymoneyis3: "My Product on Sale" },
  { mymoneyis3: "What i will ship" },
  { mymoneyis3: "approval from the buyer" },
  { mymoneyis3: "My Successful Sales" },
  { mymoneyis3: "Returns & Cancellation" },
  { mymoneyis3: "My Products that are not on sale" },
  { mymoneyis3: "My Bank information" },
  { mymoneyis3: "My Head office address" },
  { mymoneyis3: "My Distance Contracts" },
  { mymoneyis3: "Comment Management" },
];
export default function MyShoppingTransactionsMydeliveryTwoPage() {
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
        <div className="flex flex-col items-center gap-[94px] md:gap-[70px] sm:gap-[47px]">
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
                                    {d.mymoneyis3}{" "}
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
                                      <Text
                                        size="textlg"
                                        as="p"
                                        className="w-[56%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis3}{" "}
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
                                        {d.mymoneyis3}{" "}
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
                                        {d.mymoneyis3}{" "}
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
                                        {d.mymoneyis3}{" "}
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
                                        {d.mymoneyis3}{" "}
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
                                        {d.mymoneyis3}{" "}
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
                                        className="w-[58%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis3}{" "}
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
                                        className="w-[68%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis3}{" "}
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
                                        className="w-[64%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis3}{" "}
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
                              className="w-[86%] text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                            >
                              {" "}
                              My delivery / billing addresses{" "}
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
                                        className="w-[70%] text-[15px] font-normal capitalize leading-[22px]"
                                      >
                                        {" "}
                                        {d.mymoneyis3}{" "}
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
                ))}
              </Accordion>{" "}
              <div className="flex flex-1 flex-col gap-20 md:gap-[60px] md:self-stretch sm:gap-10">
                {" "}
                <div className="flex items-center justify-center md:flex-col">
                  {" "}
                  <Breadcrumb
                    separator={
                      <Text className="h-[38px] w-[12.35px] text-[25px] font-normal !text-colors md:text-[23px] sm:text-[21px]">
                        {" "}
                        /{" "}
                      </Text>
                    }
                    className="flex flex-1 flex-wrap justify-between gap-[100px] md:gap-5 md:self-stretch"
                  >
                    {" "}
                    <BreadcrumbItem>
                      {" "}
                      <BreadcrumbLink
                        href="#"
                        className="md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        <Heading
                          size="text7xl"
                          as="h1"
                          className="text-[25px] font-normal"
                        >
                          {" "}
                          My Delivery{" "}
                        </Heading>{" "}
                      </BreadcrumbLink>{" "}
                    </BreadcrumbItem>{" "}
                    <BreadcrumbItem isCurrentPage>
                      {" "}
                      <BreadcrumbLink
                        href="#"
                        className="mr-[274px] md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        <Heading
                          size="text7xl"
                          as="h2"
                          className="text-[25px] font-normal"
                        >
                          {" "}
                          Billing Addresses{" "}
                        </Heading>{" "}
                      </BreadcrumbLink>{" "}
                    </BreadcrumbItem>{" "}
                  </Breadcrumb>{" "}
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
                      className="min-w-[182px] rounded-[24px] px-3.5 font-medium uppercase"
                    >
                      {" "}
                      Add new address{" "}
                    </Button>{" "}
                  </a>{" "}
                </div>
                <div className="flex flex-col items-center justify-center gap-5 rounded-[10px] bg-white px-14 py-[140px] shadow-xs md:p-5">
                  {" "}
                  <Img
                    src="images/img_frame_gray_900_01.svg"
                    alt="Image"
                    className="h-[200px] w-[22%] object-contain"
                  />{" "}
                  <Heading
                    size="text3xl"
                    as="h3"
                    className="text-[20px] font-medium capitalize"
                  >
                    {" "}
                    You do not have a registered address. Click to create a new
                    address .{" "}
                  </Heading>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[214px] rounded-[24px] px-[18px] font-medium uppercase"
                  >
                    {" "}
                    Create NEW address{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsmydeliverytwoColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
