import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import RealestateexpertiseafterleaseColumn from "./RealestateexpertiseafterleaseColumn";
import RealestateexpertiseafterleaseColumnTwo from "./RealestateexpertiseafterleaseColumnTwo";
import React from "react";
export default function RealEstateExpertiseAfterLeasePage() {
  const [searchBarValue158, setSearchBarValue158] = React.useState("");
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
      <div className="flex w-full flex-col gap-[94px] bg-white md:gap-[70px] sm:gap-[47px]">
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
                value={searchBarValue158}
                onChange={(e) => setSearchBarValue158(e.target.value)}
                suffix={
                  searchBarValue158?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue158("")} />
                  ) : null
                }
                className="w-[38%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
              />{" "}
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
                    Credit{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <RealestateexpertiseafterleaseColumn />{" "}
          <RealestateexpertiseafterleaseColumnTwo />{" "}
        </div>{" "}
        <footer className="flex flex-col items-center bg-black-0 py-[18px]">
          {" "}
          <div className="container-sm mt-[22px] flex flex-col items-start pl-[116px] pr-14 md:px-5">
            {" "}
            <div className="flex w-[94%] items-center justify-between gap-5 md:w-full">
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
            <div className="mt-[74px] flex w-[78%] items-center justify-between gap-5 md:w-full md:flex-col">
              {" "}
              <div className="flex w-[24%] flex-col items-start gap-5 md:w-full">
                {" "}
                <Heading
                  size="headings"
                  as="h6"
                  className="text-[16px] font-bold !text-white"
                >
                  {" "}
                  Institutional{" "}
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
                        About Us{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>
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
                        Sustainability{" "}
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
                        Human Resources{" "}
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
                        News{" "}
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
                        Site Map{" "}
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
                        Communication{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>
              <div className="flex w-[26%] flex-col items-start gap-5 md:w-full">
                {" "}
                <Heading
                  size="headings"
                  as="h6"
                  className="text-[16px] font-bold !text-white"
                >
                  {" "}
                  Our Services{" "}
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
                        Doping{" "}
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
                        Q - My Money is Safe{" "}
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
                        Secure E-Commerce{" "}
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
                        Advert{" "}
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
                        Mobile{" "}
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
                        Auto King{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>
              <ul className="flex w-[28%] flex-col items-start gap-5 self-start md:w-full">
                {" "}
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <Heading
                      size="headings"
                      as="h6"
                      className="text-[16px] font-bold !text-white"
                    >
                      {" "}
                      Shops{" "}
                    </Heading>{" "}
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
                      My Store{" "}
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
                      I Want to Open a Store{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
              <div className="flex flex-col items-start gap-5">
                {" "}
                <Heading
                  size="headings"
                  as="h6"
                  className="text-[16px] font-bold !text-white"
                >
                  {" "}
                  Privacy and Use{" "}
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
                        Safe Shopping Tips{" "}
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
                        Contracts and Rules{" "}
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
                        Account Agreement{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>
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
                        Terms Of Use{" "}
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
                        Protection of Personal Data{" "}
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
                        Help and Operation Guide{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
            <ul className="!mt-[38px] flex flex-wrap gap-2.5">
              {" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    size="texts"
                    as="p"
                    className="text-[12px] font-normal !text-white"
                  >
                    {" "}
                    ©{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    size="texts"
                    as="p"
                    className="text-[12px] font-normal !text-white"
                  >
                    {" "}
                    2024{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    size="texts"
                    as="p"
                    className="text-[12px] font-normal !text-white"
                  >
                    {" "}
                    Sahibinden{" "}
                  </Text>{" "}
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    size="texts"
                    as="p"
                    className="text-[12px] font-normal !text-white"
                  >
                    {" "}
                    Ltd.{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    size="texts"
                    as="p"
                    className="text-[12px] font-normal !text-white"
                  >
                    {" "}
                    All{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    size="texts"
                    as="p"
                    className="text-[12px] font-normal !text-white"
                  >
                    {" "}
                    rights{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text
                    size="texts"
                    as="p"
                    className="text-[12px] font-normal !text-white"
                  >
                    {" "}
                    reserved.{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </footer>{" "}
      </div>{" "}
    </>
  );
}
