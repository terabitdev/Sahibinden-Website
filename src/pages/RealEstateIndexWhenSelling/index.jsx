import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, Input } from "../../components";
import Footer from "../../components/Footer";
import { CloseSVG } from "../../components/Input/close";
import RealEstateIndexWhenSellingRowdeterminethe from "../../components/RealEstateIndexWhenSellingRowdeterminethe";
import WhileBuyingVehicleBuyingGuideThreeRowcheck from "../../components/WhileBuyingVehicleBuyingGuideThreeRowcheck";
import RealestateindexwhensellingColumnFour from "./RealestateindexwhensellingColumnFour";
import React, { Suspense } from "react";
const data = [
  {
    check: "Make Necessary Renovations",
    description: (
      <>
        {" "}
        One of the most important things to do when selling a <br /> house is to
        fix the house&#39;s shortcomings. Problem areas <br /> on the ceiling,
        floor and walls should be repaired, and <br /> if necessary, the kitchen
        and bathroom should be <br /> renovated.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
  {
    check: "Take Care When Taking Ad Photos",
    description: (
      <>
        {" "}
        Carefully taken photos increase the number of <br /> potential buyers
        for your home. After you have tidied <br /> up your home, you can make
        it stand out by taking <br />a photo of it.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
  {
    check: "Make Necessary Renovations",
    description: (
      <>
        {" "}
        One of the most important things to do when selling a <br /> house is to
        fix the house&#39;s shortcomings. Problem areas <br /> on the ceiling,
        floor and walls should be repaired, and <br /> if necessary, the kitchen
        and bathroom should be <br /> renovated.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
  {
    check: "Clarify Payment Terms with Buyer",
    description: (
      <>
        {" "}
        Before proceeding with the title deed transfer process, <br /> it is
        beneficial for the real estate owner and the buyer <br /> to determine
        the payment method.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
];
const data1 = [
  {
    determinethe: "Determine the Sales Price Realistically",
    description: (
      <>
        {" "}
        You can determine the sales price by learning the <br /> values ​​of
        similar properties that have been sold <br /> recently. Setting the
        price realistically ensures mutual <br /> trust between the parties.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
  {
    determinethe: "Determine the Sales Price Realistically",
    description: (
      <>
        {" "}
        You can determine the sales price by learning the <br /> values ​​of
        similar properties that have been sold <br /> recently. Setting the
        price realistically ensures mutual <br /> trust between the parties.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
  {
    determinethe: "Post a Perfect Ad on sahibinden.com",
    description: (
      <>
        {" "}
        What ensures that the real estate for sale meets its <br /> buyer is a
        complete and correctly prepared real estate <br /> advertisement. In
        order to prepare a perfect home sale <br /> advertisement, all details
        should be taken into <br /> consideration.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
  {
    determinethe: "Pay off previous home debts",
    description: (
      <>
        {" "}
        Debts such as electricity, water and natural gas <br /> remaining from
        the use of the previous tenant or real <br /> estate owner must be paid
        before the sale.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
  {
    determinethe: "Prepare Title Deed Transfer Documents",
    description: (
      <>
        {" "}
        The official sale of the house is carried out at the <br /> General
        Directorate of Land Registry and Cadastre. <br /> Learn the documents
        required for title deed transfer in <br /> order to complete the
        transactions quickly.{" "}
      </>
    ),
    detailed: "Detailed Information",
  },
];
export default function RealEstateIndexWhenSellingPage() {
  const [searchBarValue147, setSearchBarValue147] = React.useState("");
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
              </a>{" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue147}
                onChange={(e) => setSearchBarValue147(e.target.value)}
                suffix={
                  searchBarValue147?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue147("")} />
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
                <a href="#">
                  {" "}
                  <Text
                    as="p"
                    className="text-[16px] font-normal !text-primary_colors-900"
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
                    className="text-[16px] font-normal hover:text-primary_colors-900"
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
                <div className="h-[462px] self-stretch bg-[url(/public/images/img_group_7172.png)] bg-cover bg-no-repeat py-[138px] md:h-auto md:py-5">
                  {" "}
                  <div className="flex flex-col items-center gap-5">
                    {" "}
                    <div className="container-sm flex flex-col items-center px-14 md:px-5">
                      {" "}
                      <Heading
                        size="text11xl"
                        as="h1"
                        className="text-[60px] font-medium !text-white md:text-[52px] sm:text-[46px]"
                      >
                        {" "}
                        10 Step Home Selling Guide{" "}
                      </Heading>{" "}
                    </div>{" "}
                    <Heading
                      size="text7xl"
                      as="h2"
                      className="self-stretch text-center text-[25px] font-medium leading-[37px] !text-white md:text-[23px] sm:text-[21px]"
                    >
                      {" "}
                      We have summarized the information you may need and what
                      you need to do when selling a house in 10 steps and
                      compiled it in a guide. With the 10-Step Home Selling
                      Guide, your mind is at ease and your job is easy!{" "}
                    </Heading>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="container-sm relative mt-[-36px] md:px-5">
                  {" "}
                  <div className="flex items-start md:flex-col">
                    {" "}
                    <div className="flex w-[44%] flex-col items-start gap-5 self-center rounded-[10px] bg-white px-2.5 py-6 shadow-xs md:w-full sm:py-5">
                      {" "}
                      <Heading
                        size="text7xl"
                        as="h3"
                        className="ml-3 text-[25px] font-medium leading-[37px] md:ml-0 md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        <>
                          {" "}
                          Check the Property Value Trend in Your <br /> Area{" "}
                        </>{" "}
                      </Heading>{" "}
                      <Heading
                        size="text3xl"
                        as="h4"
                        className="ml-3 text-[20px] font-medium leading-[30px] md:ml-0"
                      >
                        {" "}
                        <>
                          {" "}
                          You can easily decide on the sales price by learning
                          the <br /> price changes per square meter in your
                          home&#39;s area.{" "}
                        </>{" "}
                      </Heading>{" "}
                      <Text
                        as="p"
                        className="mb-[50px] ml-3 text-[16px] font-medium !text-primary_colors-900 md:ml-0"
                      >
                        {" "}
                        Check Real Estate Index{" "}
                      </Text>{" "}
                    </div>
                    <Img
                      src="images/img_forward.svg"
                      alt="Forward"
                      className="relative ml-[-6px] mt-11 h-[24px] md:ml-0 md:w-full"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="container-sm relative mt-[-204px] px-6 md:px-5">
                {" "}
                <div className="flex items-start gap-3 md:flex-col">
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
                      </Heading>
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
                      </Heading>{" "}
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
                  </div>
                  <div className="ml-3 flex w-[48%] flex-col gap-[410px] self-end md:ml-0 md:w-full">
                    {" "}
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {" "}
                      {data1.map((d, index) => (
                        <RealEstateIndexWhenSellingRowdeterminethe
                          {...d}
                          key={"listdetermineth" + index}
                        />
                      ))}{" "}
                    </Suspense>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="absolute bottom-[9%] left-[3%] m-auto flex w-[44%] flex-col gap-[410px] md:relative">
              {" "}
              <Suspense fallback={<div>Loading feed...</div>}>
                {" "}
                {data.map((d, index) => (
                  <WhileBuyingVehicleBuyingGuideThreeRowcheck
                    {...d}
                    key={"listmakenecessa" + index}
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
          <RealestateindexwhensellingColumnFour />{" "}
        </div>{" "}
        <Footer className="h-[504px] bg-[url(/public/images/img_group_9618.png)] bg-cover bg-no-repeat md:h-auto" />{" "}
      </div>{" "}
    </>
  );
}
