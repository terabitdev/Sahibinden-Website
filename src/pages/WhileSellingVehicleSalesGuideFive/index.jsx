import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import WhilesellingvehiclesalesguidefiveColumnThree from "./WhilesellingvehiclesalesguidefiveColumnThree";
import WhilesellingvehiclesalesguidefiveStackvehicle from "./WhilesellingvehiclesalesguidefiveStackvehicle";
import React from "react";
export default function WhileSellingVehicleSalesGuideFivePage() {
  const [searchBarValue97, setSearchBarValue97] = React.useState("");
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
            <div className="flex w-[86%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
              {" "}
              <Input
                size="md"
                name="search"
                placeholder={`Type the content you want to search`}
                value={searchBarValue97}
                onChange={(e) => setSearchBarValue97(e.target.value)}
                suffix={
                  searchBarValue97?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue97("")} />
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
          <div className="container-sm mb-[26px] flex flex-col items-center px-14 md:px-5">
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
                  <Text as="p" className="text-[16px] font-medium">
                    {" "}
                    While Buying{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">
                  {" "}
                  <Text as="p" className="text-[16px] font-medium">
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
                    className="text-[16px] font-normal hover:font-medium"
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
                    className="text-[16px] font-normal hover:font-medium"
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
                    className="text-[16px] font-normal hover:font-medium"
                  >
                    {" "}
                    Zero Vehicle World{" "}
                  </Text>{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </header>{" "}
        <div className="mt-[54px] flex flex-col gap-[218px] md:gap-[163px] sm:gap-[109px]">
          {" "}
          <WhilesellingvehiclesalesguidefiveStackvehicle />{" "}
          <WhilesellingvehiclesalesguidefiveColumnThree />{" "}
        </div>{" "}
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
                    </Heading>
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
                  </div>{" "}
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
                </div>{" "}
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
        </footer>
      </div>{" "}
    </>
  );
}
