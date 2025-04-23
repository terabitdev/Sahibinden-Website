import { Helmet } from "react-helmet";
import { Heading, Img, SelectBox, Text, Button, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import RealEstateIndexRowgroup from "../../components/RealEstateIndexRowgroup";
import RealestateindexwhenrentingColumnEight from "./RealestateindexwhenrentingColumnEight";
import RealestateindexwhenrentingColumnSix from "./RealestateindexwhenrentingColumnSix";
import RealestateindexwhenrentingRow from "./RealestateindexwhenrentingRow";
import RealestateindexwhenrentingRowOne from "./RealestateindexwhenrentingRowOne";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
const data = [
  { group: "1", diyarbakir: "DIYARBAKIR", p58nine: "58.9%" },
  { group: "2", diyarbakir: "BINGOL", p58nine: "56.2%" },
  { group: "3", diyarbakir: "ERZURUM", p58nine: "54.0%" },
  { group: "4", diyarbakir: "SIIRT", p58nine: "50.6%" },
  { group: "4", diyarbakir: "MUS", p58nine: "46.4%" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function RealEstateIndexWhenRentingPage() {
  const [searchBarValue153, setSearchBarValue153] = React.useState("");
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
        <header className="flex flex-col items-center gap-7">
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
            <div className="flex w-[86%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              {" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue153}
                onChange={(e) => setSearchBarValue153(e.target.value)}
                suffix={
                  searchBarValue153?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue153("")} />
                  ) : null
                }
                className="w-[38%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />
              <div className="flex w-[40%] items-center justify-between gap-5 self-end md:w-full">
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
                </a>{" "}
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
                    className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
                  >
                    {" "}
                    While Buying{" "}
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
                    className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
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
                    className="text-[16px] font-medium !text-primary_colors-900"
                  >
                    {" "}
                    When Renting{" "}
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
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="mt-1 flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="flex flex-col items-center">
            {" "}
            <div className="flex flex-col items-center self-stretch">
              {" "}
              <div className="container-sm relative z-[1] flex flex-col items-end pl-14 pr-[432px] md:px-5">
                {" "}
                <div className="w-[24%] rounded-lg md:w-full">
                  {" "}
                  <div className="flex bg-white px-4 py-3">
                    {" "}
                    <Text
                      as="p"
                      className="!font-montserrat text-[16px] font-normal !text-primary_colors-900"
                    >
                      {" "}
                      Real Estate Index{" "}
                    </Text>{" "}
                  </div>{" "}
                  <Button
                    size="lg"
                    variant="fill"
                    shape="square"
                    className="self-stretch px-3.5 font-montserrat"
                  >
                    {" "}
                    Property Rental Guide{" "}
                  </Button>{" "}
                  <div className="flex justify-center bg-white p-3">
                    {" "}
                    <Text
                      as="p"
                      className="!font-montserrat text-[16px] font-normal"
                    >
                      {" "}
                      Real Estate Dictionary{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <RealestateindexwhenrentingRow />{" "}
            </div>{" "}
            <RealestateindexwhenrentingRowOne />
            <div className="container-sm mt-28 md:px-5">
              {" "}
              <div className="rounded-[10px] bg-white py-6 shadow-sm sm:py-5">
                {" "}
                <div className="mt-3.5 flex flex-col gap-[60px] sm:gap-[30px]">
                  {" "}
                  <div className="flex flex-col items-center gap-[30px] px-10 sm:px-5">
                    {" "}
                    <div className="flex items-center justify-end gap-[213px] self-stretch md:flex-col md:gap-5">
                      {" "}
                      <Heading
                        size="heading7xl"
                        as="h5"
                        className="text-[50px] font-semibold capitalize md:text-[46px] sm:text-[40px]"
                      >
                        {" "}
                        Index Summary{" "}
                      </Heading>{" "}
                      <SelectBox
                        shape="round"
                        indicator={
                          <Img
                            src="images/img_frame_primary_colors_900_18x18.svg"
                            alt="Frame"
                            className="h-[20px] w-[14px]"
                          />
                        }
                        name="price"
                        placeholder={`price per m2 for Sale`}
                        options={dropDownOptions}
                        className="w-[20%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize md:w-full sm:px-5"
                      />{" "}
                    </div>{" "}
                    <Heading
                      size="text3xl"
                      as="h6"
                      className="text-[20px] font-medium capitalize"
                    >
                      {" "}
                      Changes In the last 1 year (Sale m2 price){" "}
                    </Heading>{" "}
                    <Img
                      src="images/img_124164_1.png"
                      alt="Image"
                      className="h-[666px] w-full object-cover md:h-auto"
                    />{" "}
                    <div className="flex items-center justify-center self-stretch md:flex-col">
                      {" "}
                      <div className="flex items-center gap-2.5">
                        {" "}
                        <Img
                          src="images/img_frame_red_a700.svg"
                          alt="Image"
                          className="h-[40px]"
                        />{" "}
                        <Heading
                          size="text3xl"
                          as="p"
                          className="text-[20px] font-medium capitalize"
                        >
                          {" "}
                          20%+{" "}
                        </Heading>{" "}
                      </div>
                      <div className="flex items-center gap-2.5 px-[42px] md:px-5">
                        {" "}
                        <Img
                          src="images/img_frame_red_a700.svg"
                          alt="Image"
                          className="h-[40px]"
                        />{" "}
                        <Heading
                          size="text3xl"
                          as="p"
                          className="text-[20px] font-medium capitalize"
                        >
                          {" "}
                          10%-20%{" "}
                        </Heading>{" "}
                      </div>{" "}
                      <div className="flex flex-1 items-center gap-2.5 px-[42px] md:self-stretch md:px-5">
                        {" "}
                        <Img
                          src="images/img_frame_red_a700.svg"
                          alt="Image"
                          className="h-[40px]"
                        />{" "}
                        <Heading
                          size="text3xl"
                          as="p"
                          className="text-[20px] font-medium capitalize"
                        >
                          {" "}
                          0%-10%{" "}
                        </Heading>{" "}
                      </div>{" "}
                      <Heading
                        size="text3xl"
                        as="p"
                        className="self-start text-[20px] font-medium capitalize"
                      >
                        {" "}
                        0%{" "}
                      </Heading>{" "}
                      <div className="flex flex-1 items-center justify-end gap-2.5 px-[42px] md:self-stretch md:px-5">
                        {" "}
                        <Img
                          src="images/img_arrow_up_green_a700.svg"
                          alt="Arrowup"
                          className="h-[40px]"
                        />{" "}
                        <Heading
                          size="text3xl"
                          as="p"
                          className="text-[20px] font-medium capitalize"
                        >
                          {" "}
                          0%-10%{" "}
                        </Heading>{" "}
                      </div>{" "}
                      <div className="flex items-center gap-2.5 px-[42px] md:px-5">
                        {" "}
                        <Img
                          src="images/img_arrow_up_green_a700.svg"
                          alt="Arrowup"
                          className="h-[40px]"
                        />{" "}
                        <Heading
                          size="text3xl"
                          as="p"
                          className="text-[20px] font-medium capitalize"
                        >
                          {" "}
                          10%-20%{" "}
                        </Heading>{" "}
                      </div>{" "}
                      <div className="flex items-center gap-2.5">
                        {" "}
                        <Img
                          src="images/img_arrow_up_green_a700.svg"
                          alt="Arrowup"
                          className="h-[40px]"
                        />{" "}
                        <Heading
                          size="text3xl"
                          as="p"
                          className="text-[20px] font-medium capitalize"
                        >
                          {" "}
                          20%+{" "}
                        </Heading>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                  <div className="mx-[38px] flex flex-col gap-[86px] md:mx-0 md:gap-16 sm:gap-[43px]">
                    {" "}
                    <div className="flex flex-col items-center gap-[34px]">
                      {" "}
                      <Heading
                        size="text7xl"
                        as="p"
                        className="text-[25px] font-medium capitalize md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        The 5 most Appreciated Provinces{" "}
                      </Heading>{" "}
                      <div className="flex gap-[38px] self-stretch md:flex-col">
                        {" "}
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {" "}
                          {data.map((d, index) => (
                            <RealEstateIndexRowgroup
                              {...d}
                              key={"listgroup" + index}
                            />
                          ))}{" "}
                        </Suspense>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <Tabs
                        className="flex w-full flex-col gap-5"
                        selectedTabClassName="!text-white bg-green-a700_01 rounded-[24px]"
                        selectedTabPanelClassName="!relative tab-panel--selected"
                      >
                        {" "}
                        <div className="ml-[104px] mr-20 flex flex-wrap justify-between gap-5 md:mx-0">
                          {" "}
                          <Heading
                            size="headingxl"
                            as="h4"
                            className="text-[25px] font-semibold md:text-[23px] sm:text-[21px]"
                          >
                            {" "}
                            Most Valuable Districts{" "}
                          </Heading>{" "}
                          <Heading
                            size="headingxl"
                            as="h4"
                            className="self-end text-[25px] font-semibold md:text-[23px] sm:text-[21px]"
                          >
                            {" "}
                            Least Appreciated Districts{" "}
                          </Heading>{" "}
                        </div>
                        <div className="flex items-start justify-between gap-5 md:flex-col">
                          {" "}
                          <TabList className="mt-2.5 flex flex-wrap gap-[-12px] self-end rounded-[24px] border border-solid border-black-900_01 bg-white">
                            {" "}
                            <Tab className="px-[38px] py-1.5 text-[24px] font-medium text-black-900_01 md:text-[22px] sm:px-5">
                              {" "}
                              ISTANBUL{" "}
                            </Tab>{" "}
                            <Tab className="px-[38px] py-1.5 text-[24px] font-medium text-black-900_01 md:text-[22px] sm:px-5">
                              {" "}
                              ANKARA{" "}
                            </Tab>{" "}
                            <Tab className="px-[38px] py-1.5 text-[24px] font-medium text-black-900_01 md:text-[22px] sm:px-5">
                              {" "}
                              IZMIR{" "}
                            </Tab>{" "}
                          </TabList>{" "}
                          <TabList className="flex flex-wrap gap-[-12px] rounded-[24px] border border-solid border-black-900_01 bg-white">
                            {" "}
                            <Tab className="px-[38px] py-1.5 text-[24px] font-medium text-black-900_01 md:text-[22px] sm:px-5">
                              {" "}
                              ISTANBUL{" "}
                            </Tab>{" "}
                            <Tab className="px-[38px] py-1.5 text-[24px] font-medium text-black-900_01 md:text-[22px] sm:px-5">
                              {" "}
                              ANKARA{" "}
                            </Tab>{" "}
                            <Tab className="px-[38px] py-1.5 text-[24px] font-medium text-black-900_01 md:text-[22px] sm:px-5">
                              {" "}
                              IZMIR{" "}
                            </Tab>{" "}
                          </TabList>{" "}
                        </div>{" "}
                        {[...Array(3)].map((_, index) => (
                          <TabPanel
                            key={`tab-panel${index}`}
                            className="absolute justify-center"
                          >
                            {" "}
                            <div className="w-full">
                              {" "}
                              <div className="flex items-center md:flex-col">
                                {" "}
                                <div className="flex flex-1 flex-col gap-3 md:self-stretch">
                                  {" "}
                                  <div className="flex items-start sm:flex-col">
                                    {" "}
                                    <Heading
                                      size="text6xl"
                                      as="p"
                                      className="self-center text-[24px] font-medium md:text-[22px]"
                                    >
                                      {" "}
                                      Sanacaktepe{" "}
                                    </Heading>{" "}
                                    <div className="relative ml-[22px] mt-2 h-[16px] w-[38%] sm:ml-0">
                                      {" "}
                                      <div
                                        style={{ width: "0%" }}
                                        className="absolute h-full"
                                      />{" "}
                                    </div>{" "}
                                    <Heading
                                      size="text3xl"
                                      as="p"
                                      className="ml-[22px] text-[20px] font-medium capitalize sm:ml-0"
                                    >
                                      {" "}
                                      40.2%{" "}
                                    </Heading>{" "}
                                  </div>
                                  <div className="flex items-start gap-[23px] sm:flex-col">
                                    {" "}
                                    <Heading
                                      size="text6xl"
                                      as="p"
                                      className="self-center text-[24px] font-medium md:text-[22px]"
                                    >
                                      {" "}
                                      Kadikoy{" "}
                                    </Heading>{" "}
                                    <div className="relative mt-2 h-[16px] w-[44%] sm:mt-0">
                                      {" "}
                                      <div
                                        style={{ width: "0%" }}
                                        className="absolute h-full"
                                      />{" "}
                                    </div>{" "}
                                    <Heading
                                      size="text3xl"
                                      as="p"
                                      className="text-[20px] font-medium capitalize"
                                    >
                                      {" "}
                                      56.2%{" "}
                                    </Heading>{" "}
                                  </div>{" "}
                                  <div className="flex items-start sm:flex-col">
                                    {" "}
                                    <Heading
                                      size="text6xl"
                                      as="p"
                                      className="self-center text-[24px] font-medium md:text-[22px]"
                                    >
                                      {" "}
                                      Maltepe{" "}
                                    </Heading>{" "}
                                    <div className="ml-[22px] mt-2 h-[16px] w-[34%] bg-green-a700_01 sm:ml-0" />{" "}
                                    <Heading
                                      size="text3xl"
                                      as="p"
                                      className="ml-[22px] text-[20px] font-medium capitalize sm:ml-0"
                                    >
                                      {" "}
                                      32.2%{" "}
                                    </Heading>{" "}
                                  </div>{" "}
                                  <div className="flex items-end sm:flex-col">
                                    {" "}
                                    <Heading
                                      size="text6xl"
                                      as="p"
                                      className="self-center text-[24px] font-medium md:text-[22px]"
                                    >
                                      {" "}
                                      Pendik{" "}
                                    </Heading>{" "}
                                    <div className="mb-2.5 ml-6 h-[16px] w-[32%] bg-green-a700_01 sm:ml-0" />{" "}
                                    <Heading
                                      size="text3xl"
                                      as="p"
                                      className="ml-6 text-[20px] font-medium capitalize sm:ml-0"
                                    >
                                      {" "}
                                      30.2%{" "}
                                    </Heading>
                                  </div>{" "}
                                  <div className="flex items-center sm:flex-col">
                                    {" "}
                                    <Heading
                                      size="text6xl"
                                      as="p"
                                      className="text-[24px] font-medium md:text-[22px]"
                                    >
                                      {" "}
                                      Salt{" "}
                                    </Heading>{" "}
                                    <div className="ml-[22px] h-[16px] w-[36%] bg-green-a700_01 sm:ml-0" />{" "}
                                    <Heading
                                      size="text3xl"
                                      as="p"
                                      className="ml-[22px] text-[20px] font-medium capitalize sm:ml-0"
                                    >
                                      {" "}
                                      39.2%{" "}
                                    </Heading>{" "}
                                  </div>{" "}
                                </div>{" "}
                                <div className="mb-2.5 flex w-[46%] flex-col gap-3 md:w-full">
                                  {" "}
                                  <div className="flex items-start justify-center gap-[22px] sm:flex-col">
                                    {" "}
                                    <Heading
                                      size="text6xl"
                                      as="p"
                                      className="self-center text-[24px] font-medium md:text-[22px]"
                                    >
                                      {" "}
                                      Gaziomanpasa{" "}
                                    </Heading>{" "}
                                    <div className="mt-2 h-[16px] flex-1 bg-red-a700 sm:self-stretch" />{" "}
                                    <Heading
                                      size="text3xl"
                                      as="p"
                                      className="text-[20px] font-medium capitalize"
                                    >
                                      {" "}
                                      56.2%{" "}
                                    </Heading>{" "}
                                  </div>{" "}
                                  <div className="flex items-start sm:flex-col">
                                    {" "}
                                    <Heading
                                      size="text6xl"
                                      as="p"
                                      className="self-center text-[24px] font-medium md:text-[22px]"
                                    >
                                      {" "}
                                      Conqueror{" "}
                                    </Heading>{" "}
                                    <div className="relative ml-[22px] mt-2 h-[16px] w-[46%] sm:ml-0">
                                      {" "}
                                      <div
                                        style={{ width: "0%" }}
                                        className="absolute h-full"
                                      />{" "}
                                    </div>{" "}
                                    <Heading
                                      size="text3xl"
                                      as="p"
                                      className="ml-[22px] text-[20px] font-medium capitalize sm:ml-0"
                                    >
                                      {" "}
                                      40.2%{" "}
                                    </Heading>{" "}
                                  </div>
                                  <div className="flex items-start sm:flex-col">
                                    {" "}
                                    <Heading
                                      size="text6xl"
                                      as="p"
                                      className="self-center text-[24px] font-medium md:text-[22px]"
                                    >
                                      {" "}
                                      Sariyer{" "}
                                    </Heading>{" "}
                                    <div className="relative ml-[22px] mt-2 h-[16px] w-[44%] sm:ml-0">
                                      {" "}
                                      <div
                                        style={{ width: "0%" }}
                                        className="absolute h-full"
                                      />{" "}
                                    </div>{" "}
                                    <Heading
                                      size="text3xl"
                                      as="p"
                                      className="ml-[22px] text-[20px] font-medium capitalize sm:ml-0"
                                    >
                                      {" "}
                                      39.2%{" "}
                                    </Heading>{" "}
                                  </div>{" "}
                                  <div className="flex items-center gap-[22px] sm:flex-col">
                                    {" "}
                                    <Heading
                                      size="text6xl"
                                      as="p"
                                      className="text-[24px] font-medium md:text-[22px]"
                                    >
                                      {" "}
                                      Hunters{" "}
                                    </Heading>{" "}
                                    <div className="h-[16px] w-[42%] bg-red-a700" />{" "}
                                    <Heading
                                      size="text3xl"
                                      as="p"
                                      className="text-[20px] font-medium capitalize"
                                    >
                                      {" "}
                                      32.2%{" "}
                                    </Heading>{" "}
                                  </div>{" "}
                                  <div className="flex items-center justify-center sm:flex-col">
                                    {" "}
                                    <Heading
                                      size="text6xl"
                                      as="p"
                                      className="text-[24px] font-medium md:text-[22px]"
                                    >
                                      {" "}
                                      Esenler{" "}
                                    </Heading>{" "}
                                    <div className="flex flex-1 items-center gap-[25px] px-6 sm:self-stretch sm:px-5">
                                      {" "}
                                      <div className="h-[16px] w-[50%] bg-red-a700" />{" "}
                                      <Heading
                                        size="text3xl"
                                        as="p"
                                        className="text-[20px] font-medium capitalize"
                                      >
                                        {" "}
                                        30.2%{" "}
                                      </Heading>{" "}
                                    </div>{" "}
                                  </div>{" "}
                                </div>{" "}
                              </div>{" "}
                            </div>{" "}
                          </TabPanel>
                        ))}{" "}
                      </Tabs>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <RealestateindexwhenrentingColumnSix />{" "}
          </div>{" "}
          <RealestateindexwhenrentingColumnEight />{" "}
        </div>{" "}
        <Footer className="mt-[100px] bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
