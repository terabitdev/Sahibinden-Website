import { Helmet } from "react-helmet";
import {
  Button,
  Img,
  Text,
  SelectBox,
  Heading,
  CheckBox,
  Input,
} from "../../components";
import CategoriesCarsCard from "../../components/CategoriesCarsCard";
import CategoriesMobilePhoneColumnratingbar from "../../components/CategoriesMobilePhoneColumnratingbar";
import CategoriesMobilePhoneItem from "../../components/CategoriesMobilePhoneItem";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import CategoriesmobilephoneColumnTwo from "./CategoriesmobilephoneColumnTwo";
import CategoriesmobilephoneStackaboutus from "./CategoriesmobilephoneStackaboutus";
import React, { Suspense } from "react";
const data = [
  { p20k: "20K", satisfied: "Satisfied Clients" },
  { p20k: "30K", satisfied: "Items sold" },
  { p20k: "99%", satisfied: "Client Satisfaction" },
  { p20k: "10+", satisfied: "Work experience" },
];
const data1 = [
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13one: "1-3",
    p13two: "1-3",
  },
  {
    highettCommon: "images/img_luxurious_car_p.png",
    car: "Car",
    highettcommon: "Albero Apartments",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13one: "1-3",
    p13two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
  },
];
const data2 = [
  {
    description: (
      <>
        {" "}
        I had the pleasure of working with ABC Realty to find my dream home, and
        I couldn&#39;t be happier with the entire experience. <br /> <br /> From
        the moment I walked into their office, I felt welcomed and supported by
        their friendly team.{" "}
      </>
    ),
    sarahMone: "images/img_ellipse_13.png",
    sarahm: "Sarah M.",
    property: "Property consultation",
  },
  {
    description:
      "Once we found the perfect home, Sarah guided me through every step of the buying process, making it feel effortless on my part. She was an excellent negotiator, and thanks to her skills, I was able to secure a fantastic deal on my new home.",
    sarahMone: "images/img_ellipse_13_54x54.png",
    sarahm: "Esther Howard",
    property: "Property consultation",
  },
  {
    description:
      "My agent, Sarah, was an absolute delight to work with. She took the time to truly understand what I was looking for in a home and was always available to answer any questions I had throughout the process. Her knowledge of the local real estate market was ",
    sarahMone: "images/img_ellipse_13.png",
    sarahm: "Sarah M.",
    property: "Property consultation",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function CategoriesMobilePhonePage() {
  const [searchBarValue42, setSearchBarValue42] = React.useState("");
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
      <div className="flex w-full flex-col gap-[88px] bg-white md:gap-[66px] sm:gap-11">
        {" "}
        <header className="flex flex-col items-center gap-[30px]">
          {" "}
          <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
            {" "}
            <div className="flex w-[46%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              {" "}
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
              >
                {" "}
                <Img
                  src="images/img_untitled_design.png"
                  alt="Untitleddesign"
                  className="h-[80px] w-[22%] object-contain md:w-full"
                />{" "}
              </a>{" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue42}
                onChange={(e) => setSearchBarValue42(e.target.value)}
                suffix={
                  searchBarValue42?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue42("")} />
                  ) : null
                }
                className="w-[70%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />{" "}
            </div>{" "}
            <div className="relative mb-3 mr-10 h-[48px] w-[34%] content-center self-end md:mr-0 md:h-auto md:w-full md:px-5">
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
                  </Heading>{" "}
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
              </div>{" "}
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
          <div className="container-sm flex flex-col items-center px-14 md:px-5">
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
                    Ad Management{" "}
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
                    My Shopping Transactions{" "}
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
                    Favorites{" "}
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
                    Message and Notifications{" "}
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
                    Services{" "}
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
                    My Account{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>
        <div className="flex flex-col gap-[98px] md:gap-[73px] sm:gap-[49px]">
          {" "}
          <div className="flex flex-col items-center gap-[164px] md:gap-[123px] sm:gap-[82px]">
            {" "}
            <div className="container-sm md:px-5">
              {" "}
              <div className="mr-[42px] flex items-start md:mr-0 md:flex-col">
                {" "}
                <div className="w-[26%] md:w-full">
                  {" "}
                  <div className="mr-[26px] flex flex-col items-start gap-5 rounded bg-white p-3.5 shadow-2xl md:mr-0">
                    {" "}
                    <div className="ml-1 self-stretch md:ml-0">
                      {" "}
                      <div className="mr-1 flex items-start justify-center md:mr-0">
                        {" "}
                        <div className="flex flex-1 flex-col items-start gap-4 self-center">
                          {" "}
                          <Heading
                            size="headingxl"
                            as="h1"
                            className="text-[25px] font-semibold !text-black-0 md:text-[23px] sm:text-[21px]"
                          >
                            {" "}
                            Mobile Phone{" "}
                          </Heading>{" "}
                          <div className="flex flex-col gap-5 self-stretch">
                            {" "}
                            <div className="flex flex-col items-start gap-5">
                              {" "}
                              <div className="flex self-stretch">
                                {" "}
                                <Text
                                  as="p"
                                  className="!font-manrope text-[16.73px] font-normal"
                                >
                                  {" "}
                                  <span className="text-[15px]">
                                    Apple
                                  </span>{" "}
                                  <span className="text-[12px]">(766986)</span>{" "}
                                </Text>{" "}
                              </div>{" "}
                              <div className="flex self-stretch">
                                {" "}
                                <Text
                                  as="p"
                                  className="!font-manrope text-[16.73px] font-normal"
                                >
                                  {" "}
                                  <span className="text-[15px]">Oppo</span>{" "}
                                  <span className="text-[12px]">(766986)</span>{" "}
                                </Text>{" "}
                              </div>{" "}
                              <Text
                                as="p"
                                className="!font-manrope text-[16.73px] font-normal"
                              >
                                {" "}
                                <span className="text-[15px]">Realme</span>{" "}
                                <span className="text-[12px]">(766986)</span>{" "}
                              </Text>{" "}
                            </div>{" "}
                            <div className="flex">
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="self-end !font-manrope text-[15px] font-normal"
                              >
                                {" "}
                                <span>Samsung</span>{" "}
                                <span className="text-[12px]">(766986)</span>{" "}
                              </Text>{" "}
                            </div>{" "}
                            <div className="flex">
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="!font-manrope text-[15px] font-normal"
                              >
                                {" "}
                                <span>Vivo</span>{" "}
                                <span className="text-[12px]">(766986)</span>{" "}
                              </Text>{" "}
                            </div>
                            <div className="flex">
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="!font-manrope text-[15px] font-normal"
                              >
                                {" "}
                                <span>Xiaomi</span>{" "}
                                <span className="text-[12px]">(766986)</span>{" "}
                              </Text>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="mt-1 h-[196px] w-[5px] bg-primary_colors-900" />{" "}
                      </div>{" "}
                    </div>{" "}
                    <Heading
                      size="headingxl"
                      as="h2"
                      className="ml-1 text-[25px] font-semibold capitalize !text-black-0 md:ml-0 md:text-[23px] sm:text-[21px]"
                    >
                      {" "}
                      Price{" "}
                    </Heading>{" "}
                    <div className="mx-1 flex self-stretch rounded-[10px] border border-solid border-primary_colors-900 bg-white px-3.5 py-[18px] md:mx-0">
                      {" "}
                      <Text
                        size="textlg"
                        as="p"
                        className="text-[15px] font-normal capitalize !text-black-900_01"
                      >
                        {" "}
                        Lowest{" "}
                      </Text>{" "}
                    </div>{" "}
                    <Input
                      size="lg"
                      shape="round"
                      name="highest"
                      placeholder={`Highest`}
                      className="mx-1 self-stretch rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01 md:mx-0"
                    />{" "}
                    <div className="mb-[38px] ml-1 flex flex-col gap-4 self-stretch md:ml-0">
                      {" "}
                      <div className="mr-1 flex flex-col gap-5 md:mr-0">
                        {" "}
                        <div className="flex">
                          {" "}
                          <Text
                            size="text2xl"
                            as="p"
                            className="text-[18.64px] font-normal"
                          >
                            {" "}
                            Cosmetics Condition{" "}
                          </Text>{" "}
                        </div>{" "}
                        <CheckBox
                          name="good"
                          label="Good "
                          id="good"
                          className="gap-3.5 font-manrope text-[16.73px] text-black-0"
                        />
                        <CheckBox
                          name="verygood"
                          label="Very Good"
                          id="verygood"
                          className="gap-3.5 font-manrope text-[15px] text-black-0"
                        />{" "}
                        <CheckBox
                          name="perfect"
                          label="Perfect"
                          id="perfect"
                          className="gap-3.5 font-manrope text-[15px] text-black-0"
                        />{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <div className="flex items-start justify-center">
                          {" "}
                          <div className="flex flex-1 flex-col gap-5 self-center">
                            {" "}
                            <div className="flex">
                              {" "}
                              <Text
                                size="text2xl"
                                as="p"
                                className="text-[18.64px] font-normal"
                              >
                                {" "}
                                Color{" "}
                              </Text>{" "}
                            </div>{" "}
                            <div className="flex flex-col items-start">
                              {" "}
                              <CheckBox
                                name="gold"
                                label="Gold"
                                id="gold"
                                className="gap-3.5 font-manrope text-[16.73px] text-black-0"
                              />{" "}
                              <CheckBox
                                name="copper"
                                label="Copper"
                                id="copper"
                                className="mt-6 gap-3.5 font-manrope text-[15px] text-black-0"
                              />{" "}
                              <CheckBox
                                name="beige"
                                label="Beige"
                                id="beige"
                                className="mt-5 gap-3.5 font-manrope text-[15px] text-black-0"
                              />{" "}
                              <CheckBox
                                name="white"
                                label="White"
                                id="white"
                                className="mt-3.5 gap-3.5 font-manrope text-[15px] text-black-0"
                              />
                              <CheckBox
                                name="claretred"
                                label="Claret Red"
                                id="claretred"
                                className="mt-3.5 gap-3.5 font-manrope text-[15px] text-black-0"
                              />{" "}
                              <CheckBox
                                name="bronze"
                                label="Bronze"
                                id="bronze"
                                className="mt-4 gap-3.5 font-manrope text-[15px] text-black-0"
                              />{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="h-[196px] w-[5px] bg-primary_colors-900" />{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="flex flex-col gap-4">
                        {" "}
                        <div>
                          {" "}
                          <div className="flex items-start justify-center">
                            {" "}
                            <div className="flex flex-1 flex-col items-start gap-[18px] self-center">
                              {" "}
                              <Text
                                size="text2xl"
                                as="p"
                                className="text-[18.64px] font-normal"
                              >
                                {" "}
                                Storage Capcity{" "}
                              </Text>{" "}
                              <CheckBox
                                name="none"
                                label="None"
                                id="none"
                                className="gap-3.5 font-manrope text-[16.73px] text-black-0"
                              />{" "}
                              <CheckBox
                                name="4gb"
                                label="4GB"
                                id="gb4"
                                className="gap-3.5 font-manrope text-[15px] text-black-0"
                              />{" "}
                              <CheckBox
                                name="6gb"
                                label="6GB"
                                id="gb3"
                                className="gap-3.5 font-manrope text-[15px] text-black-0"
                              />{" "}
                              <CheckBox
                                name="8gb"
                                label="8GB"
                                id="gb2"
                                className="gap-3.5 font-manrope text-[15px] text-black-0"
                              />
                              <CheckBox
                                name="12gb"
                                label="12GB"
                                id="gb1"
                                className="gap-3.5 font-manrope text-[15px] text-black-0"
                              />{" "}
                              <CheckBox
                                name="13gb"
                                label="13GB"
                                id="gb"
                                className="gap-3.5 font-manrope text-[15px] text-black-0"
                              />{" "}
                            </div>{" "}
                            <div className="h-[196px] w-[5px] bg-primary_colors-900" />{" "}
                          </div>{" "}
                        </div>{" "}
                        <Button
                          color="primary_colors_900"
                          size="xl"
                          variant="fill"
                          className="mr-1 self-stretch rounded px-[34px] font-opensans font-bold md:mr-0 sm:px-5"
                        >
                          {" "}
                          Search{" "}
                        </Button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-1 flex-col gap-10 self-center md:self-stretch">
                  {" "}
                  <div className="ml-[26px] flex items-start justify-between gap-5 md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="heading4xl"
                      as="h3"
                      className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
                    >
                      {" "}
                      Refurbished Cell Phones{" "}
                    </Heading>{" "}
                    <SelectBox
                      size="md"
                      indicator={
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Frame"
                          className="h-[18px] w-[20px]"
                        />
                      }
                      name="button_one"
                      placeholder={`Advanced Sorting`}
                      options={dropDownOptions}
                      className="w-[26%] gap-4 self-center rounded border border-solid border-primary_colors-900 px-[18px] font-opensans font-bold !text-blue_gray-100 md:w-full"
                    />{" "}
                  </div>{" "}
                  <div className="ml-[26px] grid grid-cols-3 justify-center gap-10 md:ml-0 md:grid-cols-2 sm:grid-cols-1">
                    {" "}
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {" "}
                      {data1.map((d, index) => (
                        <CategoriesCarsCard
                          {...d}
                          key={"gridhighett" + index}
                        />
                      ))}{" "}
                    </Suspense>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col items-center self-stretch">
              {" "}
              <div className="relative h-[556px] w-full">
                {" "}
                <Img
                  src="images/img_rectangle_44.png"
                  alt="Image"
                  className="absolute bottom-0 left-0 top-0 my-auto h-[556px] w-[80%] object-contain"
                />{" "}
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center px-14 md:px-5">
                  {" "}
                  <div className="flex w-[94%] items-center justify-center gap-11 md:w-full md:flex-col">
                    {" "}
                    <div className="mb-[30px] flex w-[36%] flex-col items-center gap-12 self-end md:w-full">
                      {" "}
                      <Text
                        size="text12xl"
                        as="p"
                        className="w-[80%] self-end text-[61px] font-normal capitalize leading-[111.02%] tracking-[-3.35px] !text-black-900 md:w-full md:text-[48px]"
                      >
                        {" "}
                        <span>Our&nbsp;</span>{" "}
                        <span className="font-medium">customers</span>{" "}
                        <span>
                          {" "}
                          <>
                            {" "}
                            &nbsp;think we’re <br /> the best{" "}
                          </>{" "}
                        </span>{" "}
                      </Text>
                      <div className="mx-[118px] flex gap-[15px] self-stretch md:mx-0">
                        {" "}
                        <Button
                          color="deep_purple_A700_19"
                          size="3xl"
                          variant="fill"
                          shape="circle"
                          className="w-[52px] rotate-[-180deg] rounded-[26px] px-3.5"
                        >
                          {" "}
                          <Img src="images/img_arrow01_svg.svg" />{" "}
                        </Button>{" "}
                        <Button
                          color="primary_colors_900"
                          size="3xl"
                          variant="fill"
                          shape="circle"
                          className="w-[52px] rounded-[26px] px-3.5"
                        >
                          {" "}
                          <Img src="images/img_arrow01_svg_white.svg" />{" "}
                        </Button>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="flex w-[78%] justify-center md:w-full">
                      {" "}
                      <div className="flex w-full gap-3.5 md:flex-col">
                        {" "}
                        <Suspense fallback={<div>Loading feed...</div>}>
                          {" "}
                          {data2.map((d, index) => (
                            <CategoriesMobilePhoneColumnratingbar
                              {...d}
                              key={"listratingbar" + index}
                              className="bg-white"
                            />
                          ))}{" "}
                        </Suspense>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <CategoriesmobilephoneStackaboutus />{" "}
              <div className="container-sm mt-20 flex flex-col items-center px-14 md:px-5">
                {" "}
                <div className="h-px w-[90%] bg-gray-200_03" />{" "}
                <div className="flex w-[90%] gap-[158px] md:w-full md:flex-col">
                  {" "}
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {" "}
                    {data.map((d, index) => (
                      <CategoriesMobilePhoneItem
                        {...d}
                        key={"list20K" + index}
                        className="w-[28%]"
                      />
                    ))}{" "}
                  </Suspense>{" "}
                </div>{" "}
                <div className="mt-5 h-px w-[90%] bg-gray-200_03" />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <CategoriesmobilephoneColumnTwo />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
