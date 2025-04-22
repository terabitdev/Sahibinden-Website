import { CloseSVG } from "../Input/close";
import { Text, Button, Img, Input } from "./..";
import React from "react";
export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  return (
    <header
      {...props}
      className={`${props.className} flex flex-col items-center gap-[30px]`}
    >
      {" "}
      <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
        {" "}
        <div className="flex w-[46%] items-center justify-between gap-5 md:w-full md:flex-col">
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
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} />
              ) : null
            }
            className="w-[70%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
          />{" "}
        </div>{" "}
        <div className="mb-3 mr-10 flex w-[34%] items-center justify-between gap-5 self-end md:mr-0 md:w-full">
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
      <div className="container-sm mb-[26px] flex flex-col items-center px-14 md:px-5">
        {" "}
        <ul className="flex flex-wrap gap-[30px]">
          {" "}
          <li>
            {" "}
            <a href="#" className="cursor-pointer">
              {" "}
              <Text
                as="p"
                className="text-[16px] font-normal hover:font-medium hover:text-primary_colors-900"
              >
                {" "}
                Home{" "}
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
      </div>
    </header>
  );
}
