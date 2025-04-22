import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, CheckBox, Input } from "../../components";
import CategoriesCarsCard from "../../components/CategoriesCarsCard";
import CategoriesCarsColumnsarah from "../../components/CategoriesCarsColumnsarah";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import CategoriescarsColumnFive from "./CategoriescarsColumnFive";
import CategoriescarsColumnThree from "./CategoriescarsColumnThree";
import CategoriescarsStackaboutus from "./CategoriescarsStackaboutus";
import React, { Suspense } from "react";
const data = [
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
  {
    highettCommon: "images/img_white_offroader_jeep_parking.png",
    car: "Car",
    highettcommon: "Highett Common",
    abbotsford: "Abbotsford, Victoria",
    thirteen: "1-3",
    p13One: "1-3",
    p13Two: "1-3",
  },
];
const data1 = [
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
];
export default function CategoriesCarsPage() {
  const [searchBarValue40, setSearchBarValue40] = React.useState("");
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
                value={searchBarValue40}
                onChange={(e) => setSearchBarValue40(e.target.value)}
                suffix={
                  searchBarValue40?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue40("")} />
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
                  </Heading>
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
          </div>
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
              </li>
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col gap-[98px] md:gap-[73px] sm:gap-[49px]">
          {" "}
          <div className="flex flex-col items-center gap-[162px] md:gap-[121px] sm:gap-[81px]">
            {" "}
            <div className="container-sm md:px-5">
              {" "}
              <div className="mr-[22px] flex items-start md:mr-0 md:flex-col">
                {" "}
                <div className="flex w-[26%] flex-col items-start md:w-full">
                  {" "}
                  <div className="w-[90%] rounded bg-white px-3.5 py-4 shadow-2xl md:w-full">
                    {" "}
                    <div className="mb-3 ml-1 md:ml-0">
                      {" "}
                      <div className="flex items-start justify-center">
                        {" "}
                        <div className="mb-[188px] flex flex-1 flex-col items-start gap-5">
                          {" "}
                          <Heading
                            size="headingxl"
                            as="h1"
                            className="!font-manrope text-[25.09px] font-semibold !text-primary_colors-900 md:text-[23px] sm:text-[21px]"
                          >
                            {" "}
                            Car{" "}
                          </Heading>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              Aion{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              Alfa Romeo{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="w-[54%] !font-manrope text-[15px] font-normal leading-[27px]"
                            >
                              {" "}
                              <>
                                {" "}
                                Anatolia <br />{" "}
                              </>{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              Aro{" "}
                            </Text>{" "}
                          </div>
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              Audi{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              BMW{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="self-end !font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              Bentley{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              BYD{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              Cadillac{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              Daewoo{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              Daihatsu{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              as="p"
                              className="!font-manrope text-[16.73px] font-normal"
                            >
                              {" "}
                              <span className="text-[15px]">Ferrari</span>{" "}
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
                              <span className="text-[15px]">Ford</span>{" "}
                              <span className="text-[12px]">(766986)</span>{" "}
                            </Text>{" "}
                          </div>
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              as="p"
                              className="!font-manrope text-[16.73px] font-normal"
                            >
                              {" "}
                              <span className="text-[15px]">
                                Lamborghini
                              </span>{" "}
                              <span className="text-[12px]">(766986)</span>{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              <span>Mercedes</span>{" "}
                              <span className="text-[12px]">(766986)</span>{" "}
                            </Text>{" "}
                          </div>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              <span>Nissan</span>{" "}
                              <span className="text-[12px]">(766986)</span>{" "}
                            </Text>{" "}
                          </div>{" "}
                          <Text
                            size="textlg"
                            as="p"
                            className="!font-manrope text-[15px] font-normal"
                          >
                            {" "}
                            <span>VolksWagen</span>{" "}
                            <span className="text-[12px]">(766986)</span>{" "}
                          </Text>{" "}
                          <div className="flex self-stretch">
                            {" "}
                            <Text
                              size="textlg"
                              as="p"
                              className="self-end !font-manrope text-[15px] font-normal"
                            >
                              {" "}
                              <span>Toyota</span>{" "}
                              <span className="text-[12px]">(766986)</span>{" "}
                            </Text>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="h-[196px] w-[5px] bg-primary_colors-900" />{" "}
                      </div>
                      <div className="relative mr-1 mt-[-128px] flex flex-col gap-5 md:mr-0">
                        {" "}
                        <div className="flex items-center gap-4">
                          {" "}
                          <Img
                            src="images/img_car.svg"
                            alt="Car"
                            className="h-[24px]"
                          />{" "}
                          <Text
                            size="text2xl"
                            as="p"
                            className="!font-manrope text-[18.64px] font-normal"
                          >
                            {" "}
                            Related Categories{" "}
                          </Text>{" "}
                        </div>{" "}
                        <CheckBox
                          name="offroad766986"
                          label="Off-Road(766986)"
                          id="offroad766986"
                          className="gap-3.5 font-manrope text-[16.73px] text-black-0"
                        />{" "}
                        <CheckBox
                          name="motorcycle76698"
                          label="Motorcycle(766986)"
                          id="motorcycle76698"
                          className="gap-3.5 font-manrope text-[16.73px] text-black-0"
                        />{" "}
                        <CheckBox
                          name="checkbox"
                          label="Minivan & Panel Van(766986)"
                          id="checkbox"
                          className="gap-3.5 font-manrope text-[15px] text-black-0"
                        />{" "}
                        <CheckBox
                          name="checkbox_one"
                          label="Commercial Vehicles(766986)"
                          id="checkboxone"
                          className="gap-3.5 py-0.5 font-manrope text-[15px] text-black-0"
                        />{" "}
                        <CheckBox
                          name="checkbox_two"
                          label="Electric Vehicles(766986)"
                          id="checkboxtwo"
                          className="gap-3.5 font-manrope text-[15px] text-black-0"
                        />{" "}
                        <CheckBox
                          name="rentalcars76698"
                          label="Rental Cars(766986)"
                          id="rentalcars76698"
                          className="gap-3.5 font-manrope text-[15px] text-black-0"
                        />{" "}
                        <CheckBox
                          name="checkbox_three"
                          label="Marine Vehicles(766986)"
                          id="checkboxthree"
                          className="gap-3.5 font-manrope text-[15px] text-black-0"
                        />
                        <div className="flex">
                          {" "}
                          <CheckBox
                            name="checkbox_four"
                            label="Damaged Vehicles(766986)"
                            id="checkboxfour"
                            className="gap-3.5 py-0.5 font-manrope text-[15px] text-black-0"
                          />{" "}
                        </div>{" "}
                        <div className="flex">
                          {" "}
                          <CheckBox
                            name="caravan766986"
                            label="Caravan(766986)"
                            id="caravan766986"
                            className="gap-3.5 font-manrope text-[15px] text-black-0"
                          />{" "}
                        </div>{" "}
                        <CheckBox
                          name="checkbox_five"
                          label="Classic Vehicles(766986)"
                          id="checkboxfive"
                          className="gap-3.5 py-0.5 pr-4 font-manrope text-[15px] text-black-0"
                        />{" "}
                        <CheckBox
                          name="aircraft766986"
                          label="Aircraft(766986)"
                          id="aircraft766986"
                          className="gap-3.5 py-0.5 pr-[34px] font-manrope text-[15px] text-black-0 sm:pr-5"
                        />{" "}
                        <CheckBox
                          name="atv766986"
                          label="ATV(766986)"
                          id="atv766986"
                          className="gap-3.5 py-0.5 pr-[34px] font-manrope text-[15px] text-black-0 sm:pr-5"
                        />{" "}
                        <CheckBox
                          name="utv766986"
                          label="UTV(766986)"
                          id="utv766986"
                          className="gap-3.5 py-0.5 pr-[34px] font-manrope text-[15px] text-black-0 sm:pr-5"
                        />{" "}
                        <CheckBox
                          name="checkbox_six"
                          label="Vehicles with Disabled Plates(766986)"
                          id="checkboxsix"
                          className="mr-1 gap-3.5 font-manrope text-[15px] text-black-0 md:mr-0"
                        />{" "}
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-1 flex-col items-center gap-10 self-center md:self-stretch">
                  {" "}
                  <div className="flex">
                    {" "}
                    <Heading
                      size="heading6xl"
                      as="h2"
                      className="text-[40px] font-bold uppercase !text-black-0 md:text-[38px] sm:text-[36px]"
                    >
                      {" "}
                      Vehicles{" "}
                    </Heading>{" "}
                  </div>{" "}
                  <div className="ml-9 grid grid-cols-3 justify-center gap-10 self-stretch md:ml-0 md:grid-cols-2 sm:grid-cols-1">
                    {" "}
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {" "}
                      {data.map((d, index) => (
                        <CategoriesCarsCard
                          {...d}
                          key={"categoriescars" + index}
                        />
                      ))}{" "}
                    </Suspense>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="self-stretch">
              {" "}
              <div className="relative h-[556px]">
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
                        <span>Our&nbsp;</span>{" "}
                        <span className="font-medium">customers</span>{" "}
                        <span>
                          {" "}
                          <>
                            {" "}
                            &nbsp;think we’re <br /> the best{" "}
                          </>{" "}
                        </span>{" "}
                      </Text>{" "}
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
                    <div className="ml-11 flex w-[80%] gap-3.5 md:ml-0 md:w-full md:flex-col">
                      {" "}
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {" "}
                        {data1.map((d, index) => (
                          <CategoriesCarsColumnsarah
                            {...d}
                            key={"categoriescars1" + index}
                            className="bg-white"
                          />
                        ))}{" "}
                      </Suspense>{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <CategoriescarsStackaboutus /> <CategoriescarsColumnThree />{" "}
            </div>{" "}
          </div>{" "}
          <CategoriescarsColumnFive />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
