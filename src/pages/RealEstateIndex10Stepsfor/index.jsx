import { Helmet } from "react-helmet";
import { Heading, Text, Img, Button, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import RealEstateIndex10StepsForRowexaminethe from "../../components/RealEstateIndex10StepsForRowexaminethe";
import VehicleValueInfo from "../../components/VehicleValueInfo";
import Realestateindex10stepsforColumnFour from "./Realestateindex10stepsforColumnFour";
import React, { Suspense } from "react";
const data = [
  {
    examinethe: "Examine the Value Change in the Area",
    description:
      "You can easily examine the rental square meter prices, access demographic information such as population age distribution and education status, and choose a house that meets your expectations.",
    detailed: "Detailed Information",
  },
  {
    examinethe: "Examine the Value Change in the Area",
    description:
      "You can easily examine the rental square meter prices, access demographic information such as population age distribution and education status, and choose a house that meets your expectations.",
    detailed: "Detailed Information",
  },
  {
    examinethe: "Determine the Terms of the Lease",
    description:
      "If you have decided to rent the house, you should reach an agreement with the landlord and reflect all the conditions in detail in the lease agreement.",
    detailed: "Detailed Information",
  },
  {
    examinethe: "Report Change of Address and Take Charge of Invoices",
    description:
      "After moving to a new address, you must change your residence within 20 business days. Afterwards, do not forget to take on the electricity, water and natural gas bills.",
    detailed: "Detailed Information",
  },
];
export default function RealEstateIndex10StepsforPage() {
  const [searchBarValue159, setSearchBarValue159] = React.useState("");
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
        <header className="flex flex-col items-center gap-7">
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
              </a>
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue159}
                onChange={(e) => setSearchBarValue159(e.target.value)}
                suffix={
                  searchBarValue159?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue159("")} />
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
          </div>
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
        </header>
        <div className="flex flex-col gap-[116px] md:gap-[87px] sm:gap-[58px]">
          {" "}
          <div className="relative h-[3886px] content-center md:h-auto">
            {" "}
            <div className="flex flex-1 flex-col items-center">
              {" "}
              <div className="flex flex-col items-center self-stretch">
                {" "}
                <div className="h-[462px] self-stretch bg-[url(/public/images/img_group_7172.png)] bg-cover bg-no-repeat py-32 md:h-auto md:py-5">
                  {" "}
                  <div className="flex flex-col items-center">
                    {" "}
                    <div className="container-sm flex flex-col items-center px-14 md:px-5">
                      {" "}
                      <Heading
                        size="text11xl"
                        as="h1"
                        className="text-[60px] font-medium !text-white md:text-[52px] sm:text-[46px]"
                      >
                        {" "}
                        10 Step Home Rental Guide{" "}
                      </Heading>{" "}
                    </div>{" "}
                    <Heading
                      size="text7xl"
                      as="h2"
                      className="self-stretch text-center text-[25px] font-medium leading-[37px] !text-white md:text-[23px] sm:text-[21px]"
                    >
                      {" "}
                      We have summarized the information you may need and what
                      you need to do when renting a house in 10 steps and
                      compiled it in a guide. With the 10-Step House Rental
                      Guide, your mind will be at ease and your job will be
                      easy!{" "}
                    </Heading>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="container-sm relative mt-[-36px] md:px-5">
                  {" "}
                  <div className="flex items-start md:flex-col">
                    {" "}
                    <div className="flex w-[44%] flex-col items-start gap-5 self-center rounded-[10px] bg-white px-6 py-3.5 shadow-xs md:w-full sm:px-5">
                      {" "}
                      <Heading
                        size="text7xl"
                        as="h3"
                        className="mt-2.5 text-[25px] font-medium leading-[37px] md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        <>
                          {" "}
                          Determine Your Budget According to <br /> Your Needs{" "}
                        </>{" "}
                      </Heading>{" "}
                      <Heading
                        size="text3xl"
                        as="h4"
                        className="w-full text-[20px] font-medium leading-[30px]"
                      >
                        {" "}
                        By determining your needs and budget range before
                        renting a house, you can quickly understand whether the
                        house meets your expectations during the decision-making
                        process.{" "}
                      </Heading>{" "}
                      <Text
                        as="p"
                        className="text-[16px] font-medium !text-primary_colors-900"
                      >
                        {" "}
                        Check Real Estate Index{" "}
                      </Text>{" "}
                    </div>{" "}
                    <Img
                      src="images/img_forward.svg"
                      alt="Forward"
                      className="relative ml-[-6px] mt-11 h-[24px] md:ml-0 md:w-full"
                    />{" "}
                  </div>{" "}
                </div>
              </div>{" "}
              <div className="container-sm relative mt-[-204px] px-6 md:px-5">
                {" "}
                <div className="flex items-start gap-1.5 md:flex-col">
                  {" "}
                  <div className="mb-[204px] flex flex-1 flex-col items-end md:self-stretch">
                    {" "}
                    <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
                    <div className="flex flex-col items-end self-stretch">
                      {" "}
                      <Heading
                        size="text10xl"
                        as="h5"
                        className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
                      >
                        {" "}
                        2{" "}
                      </Heading>{" "}
                      <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
                      <Heading
                        size="text10xl"
                        as="h6"
                        className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
                      >
                        {" "}
                        3{" "}
                      </Heading>{" "}
                      <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
                      <Heading
                        size="text10xl"
                        as="p"
                        className="mt-2.5 flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
                      >
                        {" "}
                        4{" "}
                      </Heading>{" "}
                      <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
                      <Heading
                        size="text10xl"
                        as="p"
                        className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
                      >
                        {" "}
                        5{" "}
                      </Heading>{" "}
                      <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
                      <Heading
                        size="text10xl"
                        as="p"
                        className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
                      >
                        {" "}
                        6{" "}
                      </Heading>{" "}
                      <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
                      <Heading
                        size="text10xl"
                        as="p"
                        className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
                      >
                        {" "}
                        7{" "}
                      </Heading>
                      <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
                      <Heading
                        size="text10xl"
                        as="p"
                        className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
                      >
                        {" "}
                        8{" "}
                      </Heading>{" "}
                      <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
                      <Heading
                        size="text10xl"
                        as="p"
                        className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
                      >
                        {" "}
                        9{" "}
                      </Heading>{" "}
                      <div className="mr-9 h-[274px] w-px bg-blue_gray-100 md:mr-0" />{" "}
                      <Heading
                        size="text10xl"
                        as="p"
                        className="flex h-[74px] w-[74px] items-center justify-center rounded-[36px] bg-primary_colors-900 text-center text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
                      >
                        {" "}
                        10{" "}
                      </Heading>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex w-[48%] flex-col gap-[370px] self-end md:w-full md:gap-[277px] sm:gap-[185px]">
                    {" "}
                    <div className="ml-1.5 flex items-start justify-center md:ml-0 sm:flex-col">
                      {" "}
                      <Img
                        src="images/img_refresh.svg"
                        alt="Refresh"
                        className="relative z-[1] mt-11 h-[24px] sm:w-full"
                      />{" "}
                      <div className="relative ml-[-6px] flex flex-1 flex-col items-start gap-5 self-center rounded-[10px] bg-white p-6 shadow-xs sm:ml-0 sm:self-stretch sm:p-5">
                        {" "}
                        <Heading
                          size="text7xl"
                          as="p"
                          className="w-full text-[25px] font-medium leading-[37px] md:text-[23px] sm:text-[21px]"
                        >
                          {" "}
                          Choose a Location That Meets Your Expectations{" "}
                        </Heading>{" "}
                        <Heading
                          size="text3xl"
                          as="p"
                          className="w-full text-[20px] font-medium leading-[30px]"
                        >
                          {" "}
                          You can learn about the social facilities and
                          environmental conditions of the house you want to rent
                          by evaluating the distance of the property to public
                          transportation points, shopping malls, universities,
                          educational institutions or hospitals.{" "}
                        </Heading>{" "}
                        <Text
                          as="p"
                          className="text-[16px] font-medium !text-primary_colors-900"
                        >
                          {" "}
                          Detailed Information{" "}
                        </Text>{" "}
                      </div>{" "}
                    </div>
                    <div className="ml-1.5 flex flex-col gap-[400px] md:ml-0 md:gap-[300px] sm:gap-[200px]">
                      {" "}
                      <div className="flex flex-col gap-[400px]">
                        {" "}
                        <VehicleValueInfo
                          mainHeading="Get Support from Real Estate Consultants"
                          descriptionText="Real estate consultants can assist you at every stage, from your search for a suitable rental home to the preparation of a lease agreement."
                          detailedInfoText="Detailed Information"
                        />{" "}
                        <VehicleValueInfo
                          mainHeading="Clear the Deposit"
                          descriptionText="When renting a house, the tenant gives a deposit, or security deposit, to the landlord. When your lease ends, you can get this deposit back, subject to certain conditions."
                          detailedInfoText="Detailed Information"
                        />{" "}
                      </div>{" "}
                      <div className="flex flex-col gap-[400px]">
                        {" "}
                        <VehicleValueInfo
                          mainHeading="Plan Your Moving Process"
                          descriptionText="Planning and performing the necessary checks will ensure that you complete the moving process smoothly."
                          detailedInfoText="Detailed Information"
                        />{" "}
                        <VehicleValueInfo
                          mainHeading="Don&#39;t Forget to Get Insurance"
                          descriptionText="After renting the real estate, you can secure your home and belongings with insurance provided by insurance companies to have a safe and problem-free replacement process."
                          detailedInfoText="Detailed Information"
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="absolute bottom-[9%] left-[3%] m-auto flex w-[44%] flex-col gap-[410px] md:relative">
              {" "}
              <Suspense fallback={<div>Loading feed...</div>}>
                {" "}
                {data.map((d, index) => (
                  <RealEstateIndex10StepsForRowexaminethe
                    {...d}
                    key={"listexaminethe" + index}
                  />
                ))}{" "}
              </Suspense>{" "}
            </div>{" "}
            <div className="absolute left-0 right-0 top-[12%] mx-auto flex h-[74px] w-[74px] flex-col items-center justify-center rounded-[36px] bg-primary_colors-900 md:h-auto">
              {" "}
              <Heading
                size="text10xl"
                as="p"
                className="text-[35px] font-medium !text-white md:text-[33px] sm:text-[31px]"
              >
                {" "}
                1{" "}
              </Heading>{" "}
            </div>{" "}
          </div>{" "}
          <Realestateindex10stepsforColumnFour />{" "}
        </div>{" "}
        <Footer className="h-[504px] bg-[url(/public/images/img_group_9618.png)] bg-cover bg-no-repeat md:h-auto" />{" "}
      </div>{" "}
    </>
  );
}
