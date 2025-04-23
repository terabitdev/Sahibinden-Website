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
import MyshoppingtransactionsmydeliveryColumn from "./MyshoppingtransactionsmydeliveryColumn";
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
  { mymoneyis: "My Money is Safe" },
  { mymoneyis: "Comment Management" },
];
export default function MyShoppingTransactionsMydeliveryPage() {
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
                                <div className="flex items-end justify-between gap-5 border border-solid border-primary_colors-900 bg-primary_colors-900 px-5 py-2.5">
                                  {" "}
                                  <Text
                                    size="text2xl"
                                    as="p"
                                    className="mt-1 text-[18.64px] font-normal !text-white"
                                  >
                                    {" "}
                                    {d.mymoneyis}{" "}
                                  </Text>{" "}
                                  <Img
                                    src="images/img_arrow_up.svg"
                                    alt="Arrowup"
                                    className="mb-1.5 h-[18px]"
                                  />{" "}
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
                          <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="text-[15px] font-normal capitalize"
                            >
                              {" "}
                              My Purchase Transactions{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="text-[15px] font-normal capitalize"
                            >
                              {" "}
                              My sales transactions{" "}
                            </Text>{" "}
                          </div>{" "}
                        </div>{" "}
                      </AccordionItemPanel>{" "}
                    </div>{" "}
                  </AccordionItem>
                ))}{" "}
              </Accordion>{" "}
              <div className="flex flex-1 flex-col gap-6 md:self-stretch">
                {" "}
                <div className="flex items-center justify-center md:flex-col">
                  {" "}
                  <Breadcrumb
                    separator={
                      <Text className="h-[38px] w-[12.13px] text-[25px] font-normal !text-colors md:text-[23px] sm:text-[21px]">
                        {" "}
                        /{" "}
                      </Text>
                    }
                    className="flex flex-1 flex-wrap justify-between gap-[98px] md:gap-5 md:self-stretch"
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
                        className="mr-[284px] md:text-[23px] sm:text-[21px]"
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
                  </Breadcrumb>
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
          <MyshoppingtransactionsmydeliveryColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
