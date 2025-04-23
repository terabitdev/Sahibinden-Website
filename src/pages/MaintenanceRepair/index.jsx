import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button, SelectBox } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import MaintenanceRepairColumn from "../../components/MaintenanceRepairColumn";
import MaintenancerepairColumnOne from "./MaintenancerepairColumnOne";
import React from "react";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function MaintenanceRepairPage() {
  const [searchBarValue44, setSearchBarValue44] = React.useState("");
  const [searchBarValue45, setSearchBarValue45] = React.useState("");
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
      <div className="flex w-full flex-col gap-[90px] bg-white md:gap-[67px] sm:gap-[45px]">
        {" "}
        <header className="flex flex-col items-center gap-[30px]">
          {" "}
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            {" "}
            <div className="flex w-[46%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              {" "}
              <Img
                src="images/img_untitled_design.png"
                alt="Untitleddesign"
                className="h-[80px] w-[22%] object-contain md:w-full"
              />{" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue45}
                onChange={(e) => setSearchBarValue45(e.target.value)}
                suffix={
                  searchBarValue45?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue45("")} />
                  ) : null
                }
                className="w-[70%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />{" "}
            </div>{" "}
            <div className="mb-3 mr-10 flex w-[34%] items-center justify-between gap-5 self-end md:mr-0 md:w-full md:px-5">
              {" "}
              <a href="#">
                {" "}
                <Img
                  src="images/img_frame_primary_colors_900.svg"
                  alt="Image"
                  className="h-[24px]"
                />{" "}
              </a>{" "}
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
              <a href="#">
                {" "}
                <Img
                  src="images/img_frame_24x24.svg"
                  alt="Image"
                  className="h-[24px]"
                />{" "}
              </a>
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
                className="min-w-[232px] gap-2 rounded-[24px] px-[18px] font-medium uppercase"
              >
                {" "}
                post an ad for free{" "}
              </Button>{" "}
            </div>{" "}
          </div>{" "}
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
                <a href="#">
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal !text-primary_colors-900"
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
              </li>
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
                    Zero Vehicle World{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col items-center gap-[126px] md:gap-[94px] sm:gap-[63px]">
          {" "}
          <div className="container-sm flex flex-col gap-[104px] md:gap-[78px] md:px-5 sm:gap-[52px]">
            {" "}
            <div className="relative mx-11 h-[544px] md:mx-0 md:h-auto">
              {" "}
              <div className="mt-[122px] flex flex-1 flex-col items-center gap-3.5">
                {" "}
                <Heading
                  size="text11xl"
                  as="h1"
                  className="text-[60px] font-medium !text-white md:text-[52px] sm:text-[46px]"
                >
                  {" "}
                  Real Estate Index{" "}
                </Heading>{" "}
                <Heading
                  size="text9xl"
                  as="h2"
                  className="text-center text-[30px] font-medium leading-[45px] !text-white md:text-[28px] sm:text-[26px]"
                >
                  {" "}
                  <>
                    {" "}
                    Create an index in any location you want to examine
                    Turkiye’s most comprehensive <br /> real estate index.{" "}
                  </>{" "}
                </Heading>{" "}
              </div>{" "}
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-9 sm:px-5">
                {" "}
                <div className="flex items-start md:flex-col">
                  {" "}
                  <div className="relative z-[1] mt-[60px] flex flex-1 flex-col gap-4 md:self-stretch">
                    {" "}
                    <div className="flex flex-col items-start gap-2">
                      {" "}
                      <Heading
                        size="heading8xl"
                        as="h3"
                        className="w-[76%] text-[64.85px] font-bold leading-[120%] !text-gray-900 md:w-full md:text-[48px]"
                      >
                        {" "}
                        Modern living for everyone{" "}
                      </Heading>
                      <Text
                        size="text4xl"
                        as="p"
                        className="w-[76%] text-[21.25px] font-normal leading-[160%] !text-gray-900 md:w-full"
                      >
                        {" "}
                        We provide a complete service for the sale, purchase or
                        rental of various items. We have been operating in Spain
                        more than 15 years.{" "}
                      </Text>{" "}
                    </div>{" "}
                    <div className="flex justify-center gap-4 rounded bg-white p-6 shadow-xs md:flex-col sm:p-5">
                      {" "}
                      <div className="flex flex-1 gap-4 md:self-stretch sm:flex-col">
                        {" "}
                        <Input
                          size="md"
                          name="search"
                          placeholder={`Search`}
                          value={searchBarValue44}
                          onChange={(e) => setSearchBarValue44(e.target.value)}
                          prefix={
                            <Img
                              src="images/img_location_pin.svg"
                              alt="Location Pin"
                              className="h-[20px] w-[24px] object-contain"
                            />
                          }
                          suffix={
                            searchBarValue44?.length > 0 ? (
                              <CloseSVG
                                onClick={() => setSearchBarValue44("")}
                                width={24}
                                fillColor="#888f9fff"
                              />
                            ) : null
                          }
                          className="flex-grow gap-4 rounded border border-solid border-blue_gray-400_03 px-6 font-opensans !text-blue_gray-400_03 shadow-bs sm:px-5"
                        />{" "}
                        <SelectBox
                          size="md"
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              alt="Arrow Down"
                              className="h-[20px] w-[24px]"
                            />
                          }
                          name="input_one"
                          placeholder={`Property type`}
                          options={dropDownOptions}
                          className="w-[42%] gap-[26px] rounded border border-solid border-blue_gray-400_03 px-6 font-opensans !text-blue_gray-400_03 shadow-bs sm:w-full sm:px-5"
                        />{" "}
                      </div>
                      <Button
                        color="primary_colors_900"
                        size="5xl"
                        variant="fill"
                        leftIcon={
                          <Img
                            src="images/img_search.svg"
                            alt="Search"
                            className="h-[28px] w-[28px] object-contain"
                          />
                        }
                        className="min-w-[148px] gap-2 rounded px-[26px] font-opensans font-bold md:px-5"
                      >
                        {" "}
                        Search{" "}
                      </Button>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="relative ml-[-104px] h-[544px] w-[46%] self-center md:ml-0 md:w-full">
                    {" "}
                    <Img
                      src="images/img_container.svg"
                      alt="Container"
                      className="absolute right-[-1px] top-0 m-auto h-[496px] w-[78%] object-contain"
                    />{" "}
                    <Img
                      src="images/img_image.png"
                      alt="Image"
                      className="absolute bottom-0.5 right-[9%] m-auto h-[494px] w-[74%] rounded object-contain"
                    />{" "}
                    <Img
                      src="images/img_luxurious_car_p_494x538.png"
                      alt="Luxuriouscarp"
                      className="absolute bottom-px left-0 m-auto h-[494px] w-[90%] rounded object-contain"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col gap-[30px]">
              {" "}
              <MaintenanceRepairColumn />{" "}
              <MaintenanceRepairColumn
                ceramiccoating={
                  <>
                    {" "}
                    Periodic Maintenance at Auto King is <br /> only 4,950 TL{" "}
                  </>
                }
                joinThe="Join the campaign"
              />{" "}
            </div>{" "}
          </div>{" "}
          <MaintenancerepairColumnOne />{" "}
        </div>
        <footer className="flex items-center justify-center bg-black-0 py-[18px]">
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
