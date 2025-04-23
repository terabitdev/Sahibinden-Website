import { Helmet } from "react-helmet";
import { Button, Switch, Heading, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyaccountmypermissionsnotificationColumnEight from "./MyaccountmypermissionsnotificationColumnEight";
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
  { myaccountOne10: "My Account Information" },
  { myaccountOne10: "Security" },
  { myaccountOne10: "My Permissions" },
];
export default function MyAccountMyPermissionsNotificationPage() {
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
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <Accordion
                preExpanded={[0]}
                className="w-[22%] flex-col md:w-full"
              >
                {" "}
                {accordionData.map((d, i) => (
                  <AccordionItem uuid={i} key={`buttons${i}`}>
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
                                <div className="flex flex-wrap items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-2.5">
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
                                      {d.myaccountOne10}{" "}
                                    </Text>{" "}
                                  </a>{" "}
                                  {props?.expanded ? (
                                    <Img
                                      src="images/img_frame_primary_colors_900_18x18.svg"
                                      alt="Image"
                                      className="h-[18px]"
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
                      </AccordionItemHeading>{" "}
                      <AccordionItemPanel>
                        {" "}
                        <div className="flex flex-col items-center">
                          {" "}
                          <Text
                            size="text2xl"
                            as="p"
                            className="border border-solid border-primary_colors-900 bg-white pb-2 pl-5 pr-[34px] pt-3.5 text-[18.64px] font-normal sm:pr-5"
                          >
                            {" "}
                            My Saved Cards{" "}
                          </Text>{" "}
                          <a
                            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                            target="_blank"
                          >
                            {" "}
                            <Text
                              size="text2xl"
                              as="p"
                              className="border border-solid border-primary_colors-900 bg-white pb-2.5 pl-5 pr-[34px] pt-3.5 text-[18.64px] font-normal sm:pr-5"
                            >
                              {" "}
                              My Account Activities{" "}
                            </Text>{" "}
                          </a>{" "}
                          <Text
                            size="text2xl"
                            as="p"
                            className="border border-solid border-primary_colors-900 bg-white py-3 pl-5 pr-[34px] text-[18.64px] font-normal sm:pr-5"
                          >
                            {" "}
                            Account Holders / Blocked{" "}
                          </Text>{" "}
                        </div>{" "}
                      </AccordionItemPanel>{" "}
                    </div>{" "}
                  </AccordionItem>
                ))}{" "}
              </Accordion>{" "}
              <div className="flex flex-1 flex-col items-start gap-2.5 self-center md:self-stretch">
                {" "}
                <Heading
                  size="text7xl"
                  as="h1"
                  className="text-[25px] font-normal !text-black-0 md:text-[23px] sm:text-[21px]"
                >
                  {" "}
                  Notification Preferences{" "}
                </Heading>
                <div className="flex flex-col items-end gap-[30px] self-stretch">
                  {" "}
                  <div className="self-stretch bg-white px-5 py-6 shadow-xs sm:py-5">
                    {" "}
                    <div className="flex flex-col gap-6">
                      {" "}
                      <div className="flex justify-center">
                        {" "}
                        <Heading
                          size="headingmd"
                          as="h2"
                          className="text-[20px] font-semibold !text-black-0"
                        >
                          {" "}
                          Advert{" "}
                        </Heading>{" "}
                        <div className="flex flex-1 flex-wrap justify-end gap-[100px] md:gap-5">
                          {" "}
                          <Heading
                            size="headingmd"
                            as="h3"
                            className="text-[20px] font-semibold"
                          >
                            {" "}
                            Insite{" "}
                          </Heading>{" "}
                          <Heading
                            size="headingmd"
                            as="h4"
                            className="text-[20px] font-semibold"
                          >
                            {" "}
                            Email{" "}
                          </Heading>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="flex items-center justify-center gap-2.5 md:flex-col">
                        {" "}
                        <Heading
                          size="text3xl"
                          as="h5"
                          className="text-[20px] font-normal leading-[50px] !text-black-0"
                        >
                          {" "}
                          <>
                            {" "}
                            Notify me while the ad is awaiting approval. <br />{" "}
                            Notify me when the ad date is updated. <br /> Notify
                            me when the ad is published. <br /> Notify me when
                            ad is rejected. <br /> Let me know 3 days before my
                            ad expires. <br /> Notify me when the ad publication
                            period ends. <br /> Notify me when I remove the ad
                            from publication. <br /> Notify me when doping is
                            applied to the ad. <br /> Notify me when the doping
                            period of the ad expires. <br /> Notify me 7 days
                            after my ad&#39;s publication period ends. <br />{" "}
                            Notify me when I receive a message from another user
                            regarding my ad. <br /> If I have an ad that is left
                            unfinished, let me know. <br /> Notify me when a
                            buyer asks a question about my listing. <br />{" "}
                            Notify me when a question I asked about an ad is
                            answered.{" "}
                          </>{" "}
                        </Heading>
                        <div className="flex w-[22%] flex-col gap-[18px] md:w-full">
                          {" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="flex justify-center">
                        {" "}
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="text-[20px] font-semibold !text-black-0"
                        >
                          {" "}
                          User{" "}
                        </Heading>{" "}
                        <div className="flex flex-1 flex-wrap justify-end gap-[100px] md:gap-5">
                          {" "}
                          <Heading
                            size="headingmd"
                            as="h5"
                            className="text-[20px] font-semibold"
                          >
                            {" "}
                            Insite{" "}
                          </Heading>{" "}
                          <Heading
                            size="headingmd"
                            as="h5"
                            className="text-[20px] font-semibold"
                          >
                            {" "}
                            Email{" "}
                          </Heading>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="flex items-center justify-center md:flex-col">
                        {" "}
                        <Heading
                          size="text3xl"
                          as="p"
                          className="text-[20px] font-normal leading-[50px] !text-black-0"
                        >
                          {" "}
                          <>
                            {" "}
                            Notify me about my last call. <br /> Notify me about
                            my pending Real Estate Consultant reviews.{" "}
                          </>{" "}
                        </Heading>{" "}
                        <div className="flex w-[36%] flex-col gap-[18px] md:w-full">
                          {" "}
                          <div className="flex justify-end gap-[92px]">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-end gap-[92px]">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="flex justify-center">
                        {" "}
                        <Heading
                          size="headingmd"
                          as="h5"
                          className="text-[20px] font-semibold !text-black-0"
                        >
                          {" "}
                          Get{" "}
                        </Heading>{" "}
                        <div className="flex flex-1 flex-wrap justify-end gap-[100px] md:gap-5">
                          {" "}
                          <Heading
                            size="headingmd"
                            as="h5"
                            className="text-[20px] font-semibold"
                          >
                            {" "}
                            Insite{" "}
                          </Heading>{" "}
                          <Heading
                            size="headingmd"
                            as="h5"
                            className="text-[20px] font-semibold"
                          >
                            {" "}
                            Email{" "}
                          </Heading>{" "}
                        </div>{" "}
                      </div>
                      <div className="flex items-center gap-2.5 md:flex-col">
                        {" "}
                        <Heading
                          size="text3xl"
                          as="p"
                          className="w-[76%] text-[20px] font-normal leading-[50px] !text-black-0 md:w-full"
                        >
                          {" "}
                          <>
                            {" "}
                            Notify me when my item is sold. <br /> Notify me
                            when the distance sales contract is sent. <br /> Let
                            me know if the product I sell is not approved.{" "}
                            <br /> Notify me when the shipping information entry
                            period for the product I sell has passed. <br />{" "}
                            Notify me when the sale of the product I am selling
                            is completed. <br /> If shipping approval is not
                            given for my product within the specified time,
                            please notify me. <br /> Notify me when I cancel the
                            GET transaction of the product I am selling. <br />{" "}
                            Notify me when my payment for the product I
                            purchased is confirmed. <br /> Notify me when my
                            payment for the product I purchased is refunded.{" "}
                            <br /> Notify me when the seller&#39;s shipping
                            period ends for the product I purchased. <br />{" "}
                            Notify me when the seller is given an additional 24
                            hours to enter shipping information for the product
                            I purchased. <br /> Notify me when the seller
                            cancels the sale for the item I purchased. <br />{" "}
                            Notify me when the shipping approval period for the
                            product I purchased has expired. <br /> Notify me
                            when the product I purchased is shipped to my
                            address. <br /> Notify me when I pause the
                            transaction for my purchase. <br /> Notify me when I
                            initiate the return process for the product I
                            purchased. <br /> Notify me when I receive the
                            product I purchased from the contracted cargo
                            company. <br /> Notify me when the product I sell is
                            delivered to the buyer via contracted cargo.{" "}
                          </>{" "}
                        </Heading>
                        <div className="flex w-[22%] flex-col gap-[38px] md:w-full">
                          {" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                          <div className="flex justify-between gap-5">
                            {" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                            <Switch
                              value={true}
                              className="border border-solid border-blue-a100"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <div className="flex flex-col gap-5">
                          {" "}
                          <div className="flex justify-center">
                            {" "}
                            <Heading
                              size="headingmd"
                              as="h5"
                              className="text-[20px] font-semibold !text-black-0"
                            >
                              {" "}
                              Favorites{" "}
                            </Heading>{" "}
                            <div className="flex flex-1 flex-wrap justify-end gap-[100px] md:gap-5">
                              {" "}
                              <Heading
                                size="headingmd"
                                as="h5"
                                className="text-[20px] font-semibold"
                              >
                                {" "}
                                Insite{" "}
                              </Heading>{" "}
                              <Heading
                                size="headingmd"
                                as="h5"
                                className="text-[20px] font-semibold"
                              >
                                {" "}
                                Email{" "}
                              </Heading>{" "}
                            </div>{" "}
                          </div>
                          <div className="flex items-center justify-center md:flex-col">
                            {" "}
                            <Heading
                              size="text3xl"
                              as="p"
                              className="text-[20px] font-normal leading-[50px] !text-black-0"
                            >
                              {" "}
                              <>
                                {" "}
                                Notify me when the price of my favorite listing
                                drops. <br /> Notify me when my favorite listing
                                drops below the price I set. <br /> Notify me
                                about my favorite search results. <br /> Notify
                                me of my favorite seller results.{" "}
                              </>{" "}
                            </Heading>{" "}
                            <div className="flex w-[34%] flex-col gap-[18px] md:w-full">
                              {" "}
                              <div className="flex justify-end gap-[92px]">
                                {" "}
                                <Switch
                                  value={true}
                                  className="border border-solid border-blue-a100"
                                />{" "}
                                <Switch
                                  value={true}
                                  className="border border-solid border-blue-a100"
                                />{" "}
                              </div>{" "}
                              <div className="flex justify-end gap-[92px]">
                                {" "}
                                <Switch
                                  value={true}
                                  className="border border-solid border-blue-a100"
                                />{" "}
                                <Switch
                                  value={true}
                                  className="border border-solid border-blue-a100"
                                />{" "}
                              </div>{" "}
                              <div className="flex justify-end gap-[92px]">
                                {" "}
                                <Switch
                                  value={true}
                                  className="border border-solid border-blue-a100"
                                />{" "}
                                <Switch
                                  value={true}
                                  className="border border-solid border-blue-a100"
                                />{" "}
                              </div>{" "}
                              <div className="flex justify-end gap-[92px]">
                                {" "}
                                <Switch
                                  value={true}
                                  className="border border-solid border-blue-a100"
                                />{" "}
                                <Switch
                                  value={true}
                                  className="border border-solid border-blue-a100"
                                />{" "}
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[100px] rounded-[24px] px-7 font-medium uppercase sm:px-5"
                  >
                    {" "}
                    SAVE{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyaccountmypermissionsnotificationColumnEight />{" "}
        </div>{" "}
        <Footer className="flex-col bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
