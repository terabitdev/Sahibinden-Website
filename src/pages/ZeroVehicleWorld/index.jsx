import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button } from "../../components";
import ZerovehicleworldColumn from "./ZerovehicleworldColumn";
import ZerovehicleworldColumnOne from "./ZerovehicleworldColumnOne";
import ZerovehicleworldColumnThree from "./ZerovehicleworldColumnThree";
import ZerovehicleworldColumnTwo from "./ZerovehicleworldColumnTwo";
import ZerovehicleworldRow from "./ZerovehicleworldRow";
import React from "react";
export default function ZeroVehicleWorldPage() {
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
        <header className="mr-10 flex flex-col items-center gap-[30px] md:mr-0">
          {" "}
          <ZerovehicleworldRow />{" "}
          <div className="container-sm flex flex-col items-center px-14 md:px-5">
            {" "}
            <ul className="flex flex-wrap gap-[30px]">
              {" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    While Buying{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    When Selling{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    Maintenance & Repair{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                  target="_blank"
                >
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal hover:text-primary_colors-900"
                  >
                    {" "}
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal !text-primary_colors-900"
                  >
                    {" "}
                    Zero Vehicle World{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col items-center gap-16 sm:gap-8">
          {" "}
          <div className="container-sm flex flex-col items-end pl-14 pr-[190px] md:px-5">
            {" "}
            <div className="flex w-[26%] flex-col items-center rounded-lg md:w-full">
              {" "}
              <div className="flex self-stretch bg-white px-4 py-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal !text-primary_colors-900"
                >
                  {" "}
                  Search for new Vehicle{" "}
                </Text>{" "}
              </div>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal sm:pr-5"
              >
                {" "}
                Compare new vehicle{" "}
              </Text>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-8 !font-montserrat text-[16px] font-normal sm:pr-5"
              >
                {" "}
                Zero Vehicle Launch Schedule{" "}
              </Text>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal sm:pr-5"
              >
                {" "}
                Campaign Vehicles{" "}
              </Text>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal sm:pr-5"
              >
                {" "}
                Find an Authorized Dealer{" "}
              </Text>{" "}
              <div className="flex justify-center self-stretch bg-white px-2.5 py-3">
                {" "}
                <Text
                  as="p"
                  className="!font-montserrat text-[16px] font-normal"
                >
                  {" "}
                  Electric Vehicle Charging Station{" "}
                </Text>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="self-stretch">
            {" "}
            <ZerovehicleworldColumn /> <ZerovehicleworldColumnOne />{" "}
            <ZerovehicleworldColumnTwo /> <ZerovehicleworldColumnThree />{" "}
          </div>{" "}
        </div>
        <footer className="mt-[100px] flex items-center justify-center bg-black-0 py-[18px]">
          {" "}
          <div className="container-sm mt-5 flex justify-center px-14 md:px-5">
            {" "}
            <div className="flex w-[90%] flex-col items-start md:w-full">
              {" "}
              <div className="flex items-center justify-between gap-5 self-stretch">
                {" "}
                <Img
                  src="images/img_footer_logo.svg"
                  alt="Footerlogo"
                  className="h-[44px] w-[52px] object-contain"
                />{" "}
                <div className="flex items-center gap-5">
                  {" "}
                  <Button
                    shape="circle"
                    className="w-[28px] rounded-[14px] !border px-1.5"
                  >
                    {" "}
                    <Img src="images/img_facebook.svg" />{" "}
                  </Button>{" "}
                  <Button
                    shape="circle"
                    className="w-[28px] rounded-[14px] !border px-1.5"
                  >
                    {" "}
                    <Img src="images/img_trash.svg" />{" "}
                  </Button>{" "}
                  <Button
                    shape="circle"
                    className="w-[28px] rounded-[14px] !border px-1.5"
                  >
                    {" "}
                    <Img src="images/img_link.svg" />{" "}
                  </Button>{" "}
                  <Button
                    shape="circle"
                    className="w-[28px] rounded-[14px] !border px-1.5"
                  >
                    {" "}
                    <Img src="images/img_vector.svg" />{" "}
                  </Button>{" "}
                  <Img
                    src="images/img_link_white.svg"
                    alt="Link"
                    className="h-[30px] w-[20%] rounded-[50%]"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <div className="mt-[94px] flex items-start justify-between gap-5 self-stretch md:flex-col">
                {" "}
                <div className="flex w-[30%] items-start justify-between gap-5 self-center md:w-full">
                  {" "}
                  <div className="flex w-[66%] flex-col items-start gap-5">
                    {" "}
                    <Heading
                      size="headings"
                      as="h6"
                      className="text-[16px] font-bold !text-white"
                    >
                      {" "}
                      Instruction & Guide{" "}
                    </Heading>{" "}
                    <ul className="flex flex-col items-start gap-5">
                      {" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Buyers Guide{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Buying & Living{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Industry Profiles{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>
                  <div className="flex flex-col items-start gap-5 self-center">
                    {" "}
                    <Heading
                      size="headings"
                      as="h6"
                      className="text-[16px] font-bold !text-white"
                    >
                      {" "}
                      Quick links{" "}
                    </Heading>{" "}
                    <ul className="flex flex-col items-start gap-5">
                      {" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            About us{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Advertise with us{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Privacy Policy{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Terms of use{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <Text
                            size="textmd"
                            as="p"
                            className="text-[14px] font-normal !text-white"
                          >
                            {" "}
                            Sitemap{" "}
                          </Text>{" "}
                        </a>{" "}
                      </li>{" "}
                    </ul>{" "}
                  </div>{" "}
                </div>
                <div className="flex w-[38%] flex-col items-start md:w-full">
                  {" "}
                  <Heading
                    size="text3xl"
                    as="p"
                    className="w-full text-[20px] font-medium leading-[30px] !text-white"
                  >
                    {" "}
                    Sign up for new development alerts and Receive every new
                    listing in your inbox.{" "}
                  </Heading>{" "}
                  <Input
                    size="sm"
                    type="email"
                    name="email"
                    placeholder={`Email address`}
                    suffix={
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-black-0">
                        {" "}
                        <Img
                          src="images/img_arrowleft_white.svg"
                          alt="Arrow Left"
                          className="h-[18px] w-[18px] rounded-[50%] object-contain p-2.5"
                        />{" "}
                      </div>
                    }
                    className="mt-5 gap-4 self-stretch rounded-[24px] px-[18px] !text-blue_gray-400"
                  />{" "}
                  <Text
                    size="texts"
                    as="p"
                    className="mt-2 text-[12px] font-normal !text-white"
                  >
                    {" "}
                    Donn’t worry! We don’t send spam.{" "}
                  </Text>{" "}
                </div>{" "}
              </div>{" "}
              <Text
                size="texts"
                as="p"
                className="mt-[58px] text-[12px] font-normal !text-white"
              >
                {" "}
                © 2024 Lar Ltd. All rights reserved.{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </footer>{" "}
      </div>{" "}
    </>
  );
}
