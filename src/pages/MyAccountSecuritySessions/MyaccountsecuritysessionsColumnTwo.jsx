import { Button, Input, Heading, TextArea } from "../../components";
import React from "react";
export default function MyaccountsecuritysessionsColumnTwo() {
  return (
    <div className="flex flex-col items-center self-stretch">
      {" "}
      <div className="container-sm flex flex-col items-start gap-14 px-10 md:px-5 sm:gap-7">
        {" "}
        <Heading
          size="heading3xl"
          as="h2"
          className="text-[28px] font-bold capitalize !text-text md:text-[26px] sm:text-[24px]"
        >
          {" "}
          Leave a Reply{" "}
        </Heading>{" "}
        <div className="flex flex-col items-center self-stretch rounded-[30px] bg-white p-[38px] sm:p-5">
          {" "}
          <div className="mx-2 flex flex-col items-start gap-1.5 self-stretch md:mx-0">
            {" "}
            <Heading
              as="h3"
              className="text-[22px] font-normal capitalize !text-text_light"
            >
              {" "}
              Your email address will not be published.{" "}
            </Heading>{" "}
            <Heading
              size="text8xl"
              as="h4"
              className="text-[26px] font-medium capitalize !text-text_light md:text-[24px] sm:text-[22px]"
            >
              {" "}
              Comment{" "}
            </Heading>{" "}
          </div>{" "}
          <TextArea
            shape="round"
            name="your_comment"
            placeholder={`Your Comment`}
            className="mt-3 self-stretch rounded-[10px] px-[34px] font-medium capitalize text-text_light sm:px-5 sm:pt-5"
          />{" "}
          <div className="mt-[22px] flex gap-[38px] self-stretch md:flex-col">
            {" "}
            <div className="flex w-full flex-col items-start gap-1.5">
              {" "}
              <Heading
                as="h5"
                className="text-[22px] font-medium capitalize !text-text_light"
              >
                {" "}
                Name{" "}
              </Heading>{" "}
              <Input
                shape="round"
                type="text"
                name="name"
                placeholder={`Your Name`}
                className="self-stretch rounded-[12px] px-3 font-medium capitalize"
              />{" "}
            </div>
            <div className="flex w-full flex-col items-start gap-1.5">
              {" "}
              <Heading
                as="h6"
                className="text-[22px] font-medium capitalize !text-text_light"
              >
                {" "}
                Email{" "}
              </Heading>{" "}
              <Input
                shape="round"
                type="text"
                name="email"
                placeholder={`Your Name`}
                className="self-stretch rounded-[12px] px-3 font-medium capitalize"
              />{" "}
            </div>{" "}
          </div>{" "}
          <Button
            color="primary_colors_900"
            size="5xl"
            variant="fill"
            className="mt-[50px] min-w-[390px] rounded-[10px] px-[34px] font-medium shadow-lg sm:px-5"
          >
            {" "}
            Post Comment{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
