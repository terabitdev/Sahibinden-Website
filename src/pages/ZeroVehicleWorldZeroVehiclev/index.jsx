import { Helmet } from "react-helmet";
import { Text, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import ZerovehicleworldzerovehicleColumn from "./ZerovehicleworldzerovehicleColumn";
import ZerovehicleworldzerovehicleColumnOne from "./ZerovehicleworldzerovehicleColumnOne";
import ZerovehicleworldzerovehicleRowSix from "./ZerovehicleworldzerovehicleRowSix";
import ZerovehicleworldzerovehicleRowTwo from "./ZerovehicleworldzerovehicleRowTwo";
import ZerovehicleworldzerovehicleRowuntitleddesi from "./ZerovehicleworldzerovehicleRowuntitleddesi";
import React from "react";
export default function ZeroVehicleWorldZeroVehiclePage() {
  const [searchBarValue169, setSearchBarValue169] = React.useState("");
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
          <ZerovehicleworldzerovehicleRowuntitleddesi />{" "}
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
              </li>
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
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col items-center gap-16 sm:gap-8">
          {" "}
          <div className="container-sm flex flex-col items-end pl-14 pr-[190px] md:px-5">
            {" "}
            <div className="flex w-[26%] flex-col items-center rounded-lg md:w-full">
              {" "}
              <Input
                size="xs"
                shape="square"
                name="search"
                placeholder={`Search for new Vehicle`}
                value={searchBarValue169}
                onChange={(e) => setSearchBarValue169(e.target.value)}
                suffix={
                  searchBarValue169?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue169("")} />
                  ) : null
                }
                className="self-stretch px-3.5 font-montserrat !text-black-0"
              />{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-[34px] !font-montserrat text-[16px] font-normal sm:pr-5"
              >
                {" "}
                Compare new vehicle{" "}
              </Text>{" "}
              <Text
                as="p"
                className="bg-white py-3 pl-4 pr-8 !font-montserrat text-[16px] font-normal !text-primary_colors-900 sm:pr-5"
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
          </div>
          <div className="self-stretch">
            {" "}
            <ZerovehicleworldzerovehicleRowTwo />{" "}
            <ZerovehicleworldzerovehicleColumn />{" "}
            <ZerovehicleworldzerovehicleRowSix />{" "}
            <ZerovehicleworldzerovehicleColumnOne />{" "}
          </div>{" "}
        </div>{" "}
        <Footer className="mt-20 bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
