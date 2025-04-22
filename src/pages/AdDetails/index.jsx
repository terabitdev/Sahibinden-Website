import { Helmet } from "react-helmet";
import {
  Img,
  Text,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Heading,
  Input,
} from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import AddetailsColumnThree from "./AddetailsColumnThree";
import AddetailsColumnTwo from "./AddetailsColumnTwo";
import AddetailsRowSeven from "./AddetailsRowSeven";
import AddetailsRowSix from "./AddetailsRowSix";
import React from "react";
export default function AdDetailsPage() {
  const [searchBarValue37, setSearchBarValue37] = React.useState("");
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
        <header className="flex flex-col items-center gap-[30px]">
          {" "}
          <div className="flex items-center justify-center gap-[50px] self-stretch md:flex-col">
            {" "}
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              {" "}
              <Img
                src="images/img_untitled_design.png"
                alt="Untitleddesign"
                className="h-[80px] w-[10%] object-contain md:w-full"
              />{" "}
            </a>{" "}
            <div className="flex w-[86%] justify-center md:w-full md:px-5">
              {" "}
              <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                {" "}
                <Input
                  size="md"
                  name="search"
                  placeholder={`Type the content you want to search`}
                  value={searchBarValue37}
                  onChange={(e) => setSearchBarValue37(e.target.value)}
                  suffix={
                    searchBarValue37?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue37("")} />
                    ) : null
                  }
                  className="w-[38%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
                />{" "}
                <div className="relative h-[48px] w-[40%] content-center self-end md:h-auto md:w-full">
                  {" "}
                  <div className="flex flex-1 items-center justify-center sm:flex-col">
                    {" "}
                    <a href="#">
                      {" "}
                      <Img
                        src="images/img_frame_primary_colors_900.svg"
                        alt="Image"
                        className="h-[24px] sm:w-full"
                      />{" "}
                    </a>{" "}
                    <div className="relative ml-[-6px] flex flex-1 items-start justify-center sm:ml-0 sm:flex-col sm:self-stretch">
                      {" "}
                      <Heading
                        size="textxs"
                        as="p"
                        className="flex h-[14px] w-[14px] items-center justify-center rounded-md bg-primary_colors-900 text-center text-[10px] font-medium !text-white"
                      >
                        {" "}
                        1{" "}
                      </Heading>
                      <Heading
                        size="textxs"
                        as="p"
                        className="ml-[46px] mt-1 flex h-[14px] w-[14px] items-center justify-center rounded-md bg-primary_colors-900 text-center text-[10px] font-medium !text-white sm:ml-0"
                      >
                        {" "}
                        1{" "}
                      </Heading>{" "}
                      <Heading
                        size="textxs"
                        as="p"
                        className="ml-12 mt-1 flex h-[14px] w-[14px] items-center justify-center rounded-md bg-primary_colors-900 text-center text-[10px] font-medium !text-white sm:ml-0"
                      >
                        {" "}
                        1{" "}
                      </Heading>{" "}
                      <a href="#">
                        {" "}
                        <Img
                          src="images/img_frame_24x24.svg"
                          alt="Image"
                          className="ml-[34px] h-[24px] self-center sm:ml-0 sm:w-full"
                        />{" "}
                      </a>{" "}
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
                          rightIcon={
                            <Img
                              src="images/img_arrowleft.svg"
                              alt="Arrow Left"
                              className="my-0.5 h-[20px] w-[20px] object-contain"
                            />
                          }
                          className="ml-10 min-w-[232px] gap-2 self-center rounded-[24px] px-[18px] font-medium uppercase sm:ml-0"
                        >
                          {" "}
                          post an ad for free{" "}
                        </Button>{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>
                  <div className="absolute bottom-0 left-[13%] top-0 my-auto flex h-max w-[20%] justify-between gap-5">
                    {" "}
                    <a href="#">
                      {" "}
                      <Img
                        src="images/img_lock.svg"
                        alt="Lock"
                        className="h-[24px]"
                      />{" "}
                    </a>{" "}
                    <a href="#">
                      {" "}
                      <Img
                        src="images/img_frame_primary_colors_900_24x24.svg"
                        alt="Image"
                        className="h-[24px]"
                      />{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="container-sm flex flex-col items-center px-14 md:px-5">
            {" "}
            <div className="flex">
              {" "}
              <ul className="flex flex-wrap gap-[30px]">
                {" "}
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <Text
                      as="p"
                      className="text-[16px] font-medium !text-primary_colors-900"
                    >
                      {" "}
                      Home{" "}
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
                      className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                    >
                      {" "}
                      Ad Management{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#" className="cursor-pointer">
                    {" "}
                    <Text
                      as="p"
                      className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                    >
                      {" "}
                      My Shopping Transactions{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#" className="cursor-pointer">
                    {" "}
                    <Text
                      as="p"
                      className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                    >
                      {" "}
                      Favorites{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#" className="cursor-pointer">
                    {" "}
                    <Text
                      as="p"
                      className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                    >
                      {" "}
                      Message and Notifications{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#" className="cursor-pointer">
                    {" "}
                    <Text
                      as="p"
                      className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                    >
                      {" "}
                      Services{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#" className="cursor-pointer">
                    {" "}
                    <Text
                      as="p"
                      className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                    >
                      {" "}
                      My Account{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </header>{" "}
        <div className="mt-14 flex flex-col items-center gap-[26px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <Breadcrumb
              separator={
                <Img
                  src="images/img_group_7353.svg"
                  alt="Arrow Right"
                  className="h-[15px] w-[15px] sm:w-full"
                />
              }
              className="flex items-center justify-center gap-1.5 sm:flex-col"
            >
              {" "}
              <BreadcrumbItem>
                {" "}
                <BreadcrumbLink href="#">
                  {" "}
                  <Text as="p" className="text-[16px] font-medium">
                    {" "}
                    Vehicle{" "}
                  </Text>{" "}
                </BreadcrumbLink>{" "}
              </BreadcrumbItem>{" "}
              <BreadcrumbItem>
                {" "}
                <BreadcrumbLink href="#">
                  {" "}
                  <div className="flex items-center gap-[30px]">
                    {" "}
                    <Img
                      src="images/img_group_7353.svg"
                      alt="Arrowright"
                      className="h-[14px]"
                    />{" "}
                    <a
                      href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                      target="_blank"
                    >
                      {" "}
                      <Text as="p" className="text-[16px] font-normal">
                        {" "}
                        Car{" "}
                      </Text>{" "}
                    </a>{" "}
                  </div>{" "}
                </BreadcrumbLink>{" "}
              </BreadcrumbItem>
              <BreadcrumbItem>
                {" "}
                <BreadcrumbLink href="#">
                  {" "}
                  <div className="flex items-center gap-[31px] px-3.5">
                    {" "}
                    <Img
                      src="images/img_group_7353.svg"
                      alt="Arrowright"
                      className="h-[14px]"
                    />{" "}
                    <Text as="p" className="text-[16px] font-normal">
                      {" "}
                      Peugeot{" "}
                    </Text>{" "}
                  </div>{" "}
                </BreadcrumbLink>{" "}
              </BreadcrumbItem>{" "}
              <BreadcrumbItem>
                {" "}
                <BreadcrumbLink href="#">
                  {" "}
                  <div className="flex items-center gap-[31px]">
                    {" "}
                    <Img
                      src="images/img_group_7353.svg"
                      alt="Arrowright"
                      className="h-[14px]"
                    />{" "}
                    <Text as="p" className="text-[16px] font-normal">
                      {" "}
                      1.2 Puretech{" "}
                    </Text>{" "}
                  </div>{" "}
                </BreadcrumbLink>{" "}
              </BreadcrumbItem>{" "}
              <BreadcrumbItem isCurrentPage>
                {" "}
                <BreadcrumbLink href="#">
                  {" "}
                  <div className="flex flex-1 items-center gap-[31px] px-3.5 sm:self-stretch">
                    {" "}
                    <Img
                      src="images/img_group_7353.svg"
                      alt="Arrowright"
                      className="h-[14px]"
                    />{" "}
                    <Text as="p" className="text-[16px] font-normal">
                      {" "}
                      Allure{" "}
                    </Text>{" "}
                  </div>{" "}
                </BreadcrumbLink>{" "}
              </BreadcrumbItem>{" "}
            </Breadcrumb>{" "}
          </div>{" "}
          <div className="self-stretch">
            {" "}
            <AddetailsRowSix /> <AddetailsRowSeven /> <AddetailsColumnTwo />{" "}
            <AddetailsColumnThree />{" "}
          </div>{" "}
        </div>{" "}
        <Footer className="mt-[184px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
