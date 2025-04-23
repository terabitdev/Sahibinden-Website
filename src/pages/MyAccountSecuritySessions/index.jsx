import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SoftwareIconsList from "../../components/SoftwareIconsList";
import MyaccountsecuritysessionsColumnTwo from "./MyaccountsecuritysessionsColumnTwo";
import React from "react";
import {
  AccordionItemPanel,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
export default function MyAccountSecuritySessionsPage() {
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
        <div className="flex flex-col items-center gap-[104px] md:gap-[78px] sm:gap-[52px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <Accordion
                preExpanded={[0]}
                className="w-[22%] flex-col md:w-full"
              >
                {" "}
                {[...Array(5)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelistm${i}`}>
                    {" "}
                    <div className="flex-1">
                      {" "}
                      <AccordionItemPanel>
                        {" "}
                        <div>
                          {" "}
                          <div className="flex flex-col items-start gap-4">
                            {" "}
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="ml-5 text-[15px] font-normal capitalize md:ml-0"
                              >
                                {" "}
                                2 Step Verification{" "}
                              </Text>{" "}
                            </a>{" "}
                            <div className="flex flex-col items-start self-stretch">
                              {" "}
                              <div className="flex h-[56px] items-center self-stretch bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
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
                                    Recovery Email{" "}
                                  </Text>{" "}
                                </a>{" "}
                              </div>{" "}
                              <div className="flex h-[56px] items-center self-stretch bg-[url(/public/images/img_button_2.svg)] bg-cover bg-no-repeat px-5 py-4 md:h-auto">
                                {" "}
                                <Text
                                  size="textlg"
                                  as="p"
                                  className="text-[15px] font-normal capitalize !text-primary_colors-900"
                                >
                                  {" "}
                                  Sessions & Devices{" "}
                                </Text>{" "}
                              </div>
                              <a
                                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                target="_blank"
                              >
                                {" "}
                                <Text
                                  size="text2xl"
                                  as="p"
                                  className="ml-5 mt-3.5 text-[18.64px] font-normal md:ml-0"
                                >
                                  {" "}
                                  My Saved Cards{" "}
                                </Text>{" "}
                              </a>{" "}
                              <a
                                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                target="_blank"
                              >
                                {" "}
                                <Text
                                  size="text2xl"
                                  as="p"
                                  className="ml-5 mt-[22px] text-[18.64px] font-normal md:ml-0"
                                >
                                  {" "}
                                  My Account Activities{" "}
                                </Text>{" "}
                              </a>{" "}
                              <a
                                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                target="_blank"
                              >
                                {" "}
                                <Text
                                  size="text2xl"
                                  as="p"
                                  className="ml-5 mt-5 text-[18.64px] font-normal md:ml-0"
                                >
                                  {" "}
                                  Account Holders / Blocked{" "}
                                </Text>{" "}
                              </a>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </AccordionItemPanel>{" "}
                    </div>{" "}
                  </AccordionItem>
                ))}{" "}
              </Accordion>
              <div className="flex-1 self-center md:self-stretch">
                {" "}
                <div className="flex flex-col items-start gap-6">
                  {" "}
                  <Heading
                    size="text7xl"
                    as="h1"
                    className="text-[25px] font-normal md:text-[23px] sm:text-[21px]"
                  >
                    {" "}
                    Active Sessions and Trusted Devices{" "}
                  </Heading>{" "}
                  <div className="flex flex-col gap-5 self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                    {" "}
                    <div className="flex flex-col items-start gap-5">
                      {" "}
                      <Heading
                        size="text3xl"
                        as="h2"
                        className="w-full text-[20px] font-normal capitalize leading-[30px]"
                      >
                        {" "}
                        All sessions you have opened with mhagdp1542@gmail.com
                        are listed below. For your security, we recommend that
                        you close open sessions on devices you are not currently
                        using.{" "}
                      </Heading>{" "}
                      <Heading
                        size="text7xl"
                        as="h3"
                        className="text-[25px] font-medium capitalize md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        My Active Device{" "}
                      </Heading>{" "}
                    </div>{" "}
                    <div className="mb-7 flex flex-col items-start gap-5">
                      {" "}
                      <div className="flex items-center self-stretch rounded-[10px] bg-white p-6 shadow-xs sm:flex-col sm:p-5">
                        {" "}
                        <div className="flex items-center gap-5">
                          {" "}
                          <Img
                            src="images/img_frame_gray_700_02.svg"
                            alt="Image"
                            className="h-[50px]"
                          />{" "}
                          <Heading
                            size="text3xl"
                            as="h4"
                            className="text-[20px] font-medium capitalize"
                          >
                            {" "}
                            Windows{" "}
                          </Heading>{" "}
                        </div>{" "}
                        <div className="flex items-center gap-5 pl-[74px] pr-14 md:px-5">
                          {" "}
                          <Img
                            src="images/img_floating_icon_green_500_01.svg"
                            alt="Floatingicon"
                            className="h-[50px]"
                          />{" "}
                          <Heading
                            size="text3xl"
                            as="h5"
                            className="text-[20px] font-medium capitalize"
                          >
                            {" "}
                            Google Chrome{" "}
                          </Heading>{" "}
                        </div>{" "}
                        <Heading
                          size="text3xl"
                          as="h6"
                          className="text-[20px] font-medium capitalize"
                        >
                          {" "}
                          Islamabad{" "}
                        </Heading>{" "}
                      </div>{" "}
                      <Heading
                        size="text7xl"
                        as="p"
                        className="text-[25px] font-medium capitalize md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        My Other Devices{" "}
                      </Heading>
                      <div className="flex flex-col gap-5 self-stretch">
                        {" "}
                        <SoftwareIconsList />{" "}
                        <SoftwareIconsList
                          windowsText="Windows"
                          chromeText="Google Chrome"
                          regionText="Punjab"
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex justify-end gap-[21px] self-stretch">
                    {" "}
                    <Button
                      size="xl"
                      variant="fill"
                      shape="round"
                      className="min-w-[124px] rounded-[24px] border border-solid border-primary_colors-900 px-[27px] font-medium uppercase !text-primary_colors-900 sm:px-5"
                    >
                      {" "}
                      LOg Out{" "}
                    </Button>{" "}
                    <Button
                      color="primary_colors_900"
                      size="xl"
                      variant="fill"
                      shape="round"
                      className="min-w-[150px] rounded-[24px] px-2.5 font-medium uppercase"
                    >
                      {" "}
                      Forget Devices{" "}
                    </Button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyaccountsecuritysessionsColumnTwo />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
