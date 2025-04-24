import { Button, Input, Heading, TextArea, Img } from "../../components";
import React from "react";
export default function WhilesellingvehiclesalesguidefourColumnTwo() {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-center md:px-5">
        {" "}
        <Heading
          size="headingxl"
          as="h2"
          className="self-start text-[25px] font-bold md:text-[23px] sm:text-[21px]"
        >
          {" "}
          Have You Consulted an Auto Expert?{" "}
        </Heading>{" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Frontviewman"
          className="mt-[30px] h-[1032px] w-full object-cover md:h-auto"
        />{" "}
        <Heading
          size="headingxl"
          as="h3"
          className="mt-[30px] w-[98%] text-[25px] font-normal leading-[37px] md:w-full md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <span>
            {" "}
            The easiest way to convince buyers is to get an expert report from
            independent auto experts. You can also reach a general conclusion
            about the price based on the information in the report to learn the
            damage status of the vehicle. With&nbsp;{" "}
          </span>{" "}
          <span>the auto expert report</span>{" "}
          <span>
            {" "}
            &nbsp;, you can see many information from your vehicle&#39;s mileage
            to the damage under the hood. In this way, you can determine a price
            by using vehicles in similar condition and easily reach the
            estimated value of your vehicle.{" "}
          </span>{" "}
        </Heading>{" "}
        <Heading
          size="headingxl"
          as="h4"
          className="mt-[30px] self-start text-[25px] font-bold md:text-[23px] sm:text-[21px]"
        >
          {" "}
          How is Vehicle Resale Value Determined?{" "}
        </Heading>
        <Heading
          size="text7xl"
          as="h5"
          className="mt-5 w-full text-[25px] font-normal leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <>
            {" "}
            After collecting the necessary documents for the notary vehicle
            sale, it will be beneficial to place them in a file and take them
            with you. Contrary to popular belief, notary transactions do not
            take long: <br /> First, the officers request the vehicle
            registration and the identity documents of the seller and buyer. If
            there is an attorney, the power of attorney must be presented.{" "}
            <br /> Then the officers check the identity information and request
            other documents. <br /> If any document is incorrect or missing, the
            sale will not take place. <br /> It is checked whether there is any
            obstacle to selling the vehicle, such as tax debt, traffic ticket or
            mortgage. <br /> If there is no obstacle to the sale, the sales
            contract is prepared by notary officials and presented to the seller
            and the buyer. <br /> After the signatures are made, the
            registration process begins. The vehicle is registered in the name
            of the buyer and the notary transfer is completed. <br /> The buyer
            must pay the notary fee of 932.65 TL (2023 price). <br /> The
            license in the name of the seller is cancelled and a sales document
            is submitted after the new registration document is prepared. Thus,
            the notary sales transactions are completed.{" "}
          </>{" "}
        </Heading>{" "}
        <div className="mx-10 mt-[60px] flex flex-col items-start gap-14 self-stretch md:mx-0 sm:gap-7">
          {" "}
          <Heading
            size="heading3xl"
            as="h6"
            className="text-[28px] font-bold capitalize !text-text md:text-[26px] sm:text-[24px]"
          >
            {" "}
            Leave a Reply{" "}
          </Heading>
          <div className="flex flex-col gap-3 self-stretch rounded-[30px] bg-white p-[38px] sm:p-5">
            {" "}
            <div className="mx-2 flex flex-col items-start gap-1.5 md:mx-0">
              {" "}
              <Heading
                as="p"
                className="text-[22px] font-normal capitalize !text-text_light"
              >
                {" "}
                Your email address will not be published.{" "}
              </Heading>{" "}
              <Heading
                size="text8xl"
                as="p"
                className="text-[26px] font-medium capitalize !text-text_light md:text-[24px] sm:text-[22px]"
              >
                {" "}
                Comment{" "}
              </Heading>{" "}
            </div>{" "}
            <div className="flex flex-col gap-[22px]">
              {" "}
              <TextArea
                shape="round"
                name="your_comment"
                placeholder={`Your Comment`}
                className="rounded-[10px] px-[34px] font-medium capitalize text-text_light sm:px-5 sm:pt-5"
              />{" "}
              <div>
                {" "}
                <div className="flex flex-col items-center gap-[50px]">
                  {" "}
                  <div className="flex gap-[38px] self-stretch md:flex-col">
                    {" "}
                    <div className="flex w-full flex-col items-start gap-1.5">
                      {" "}
                      <Heading
                        as="p"
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
                    </div>{" "}
                    <div className="flex w-full flex-col items-start gap-1.5">
                      {" "}
                      <Heading
                        as="p"
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
                  </div>
                  <Button
                    color="primary_colors_900"
                    size="5xl"
                    variant="fill"
                    className="min-w-[390px] rounded-[10px] px-[34px] font-medium shadow-lg sm:px-5"
                  >
                    {" "}
                    Post Comment{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
