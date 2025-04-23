import { Helmet } from "react-helmet";
import { Button, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyaccountaccountcancellationColumnTwo from "./MyaccountaccountcancellationColumnTwo";
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
  { myaccountOne5: "My Account Information" },
  { myaccountOne5: "Security" },
  { myaccountOne5: "My Permissions" },
];
export default function MyAccountAccountCancellationPage() {
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
      <div className="w-full bg-white">
        {" "}
        <Header />{" "}
        <div className="mt-[86px] flex flex-col items-center gap-[142px] md:gap-[106px] sm:gap-[71px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <Accordion
                preExpanded={[0]}
                className="w-[22%] flex-col self-center md:w-full"
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
                                <div className="flex flex-wrap items-end justify-between gap-3.5 border border-solid border-primary_colors-900 bg-primary_colors-900 p-2.5">
                                  {" "}
                                  <Text
                                    size="text2xl"
                                    as="p"
                                    className="mt-1 text-[18.64px] font-normal !text-white"
                                  >
                                    {" "}
                                    {d.myaccountOne5}{" "}
                                  </Text>{" "}
                                  {props?.expanded ? (
                                    <Img
                                      src="images/img_arrow_up.svg"
                                      alt="Arrowup"
                                      className="mb-1.5 h-[18px]"
                                    />
                                  ) : (
                                    <Img
                                      src="images/img_frame_primary_colors_900_18x18.svg"
                                      alt="Image"
                                      className="h-[18px]"
                                    />
                                  )}{" "}
                                </div>
                              </>
                            )}{" "}
                          </AccordionItemState>{" "}
                        </AccordionItemButton>{" "}
                      </AccordionItemHeading>{" "}
                      <AccordionItemPanel>
                        {" "}
                        <div>
                          {" "}
                          <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                            {" "}
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[15px] font-normal capitalize"
                              >
                                {" "}
                                My Personal Information{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                            {" "}
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[15px] font-normal capitalize"
                              >
                                {" "}
                                Email{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                            {" "}
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[15px] font-normal capitalize"
                              >
                                {" "}
                                Mobile Phone{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                            {" "}
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[15px] font-normal capitalize"
                              >
                                {" "}
                                Password Change{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                            {" "}
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[15px] font-normal capitalize"
                              >
                                {" "}
                                Account Verification{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                          <div className="flex h-[56px] items-center bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="text-[15px] font-normal capitalize !text-primary_colors-900"
                            >
                              {" "}
                              Account Cancellation{" "}
                            </Text>{" "}
                          </div>{" "}
                        </div>{" "}
                      </AccordionItemPanel>
                    </div>{" "}
                  </AccordionItem>
                ))}{" "}
              </Accordion>{" "}
              <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Account Cancellation{" "}
                </Heading>{" "}
                <div className="flex flex-col items-start gap-5 self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="h2"
                    className="w-full text-[20px] font-normal leading-[54px]"
                  >
                    {" "}
                    <span>
                      {" "}
                      <>
                        {" "}
                        We are sorry that you want to cancel your sahibinden.com
                        account. <br /> If you cancel your account; <br /> Your
                        account cannot be reactivated. <br /> All your published
                        ads will be removed from publication and no refunds will
                        be made. <br /> If you have an ad in which you use
                        doping, no refunds will be made. <br /> You cannot use
                        your e-mail address in a new sahibinden.com account for
                        10 years. <br /> If you have any questions or concerns
                        about your account, you can contact us via&nbsp;{" "}
                      </>{" "}
                    </span>{" "}
                    <span>
                      {" "}
                      the Support Center before closing your account . If you
                      still want to cancel, please select the reason you want to
                      cancel your account in order to maintain our service
                      quality.{" "}
                    </span>{" "}
                  </Heading>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="mb-2 min-w-[200px] rounded-[24px] px-[26px] font-medium uppercase sm:px-5"
                  >
                    {" "}
                    Cancel account{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyaccountaccountcancellationColumnTwo />{" "}
        </div>
        <Footer className="mt-[142px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
