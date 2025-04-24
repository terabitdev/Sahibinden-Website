import { Heading, Img, Button } from "../../components";
import React from "react";
export default function WhilesellingvehiclesalesguidefourColumn() {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm md:px-5">
        {" "}
        <div className="flex items-center justify-between gap-5 md:flex-col">
          {" "}
          <Heading
            size="heading4xl"
            as="h1"
            className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
          >
            {" "}
            How Can I Find Out the Market Value of the Vehicle I Will Sell?{" "}
          </Heading>{" "}
          <div className="flex gap-[31px]">
            {" "}
            <Button
              color="primary_colors_900"
              size="8xl"
              variant="fill"
              className="min-w-[174px] rounded-[10px] px-[34px] font-medium capitalize sm:px-5"
            >
              {" "}
              Pre-Sales{" "}
            </Button>{" "}
            <Button
              size="8xl"
              variant="fill"
              className="min-w-[174px] rounded-[10px] border border-solid border-primary_colors-900 px-[29px] font-medium capitalize !text-primary_colors-900 sm:px-5"
            >
              {" "}
              During Sales{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Frontviewman"
          className="mt-[52px] h-[1032px] w-full object-cover md:h-auto"
        />{" "}
        <Heading
          size="text7xl"
          as="h2"
          className="mt-[22px] text-[25px] font-medium leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          There are some simple steps you need to follow to find out the price
          of your car. With these applications, you can sell your car at its
          real value and get the amount you expect. You need to answer some
          questions to find out the value of your car.{" "}
        </Heading>
        <Heading
          size="text7xl"
          as="h3"
          className="mt-[30px] text-[25px] font-medium leading-[45px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <span className="font-bold">
            {" "}
            <>
              {" "}
              Is There Damage to the Vehicle? <br />{" "}
            </>{" "}
          </span>{" "}
          <span className="font-normal">
            {" "}
            <>
              {" "}
              If you are the first user of your vehicle or in other words, if
              you bought a brand new vehicle, you know if there is any damage.
              However, if there were other users before you and you are not
              fully aware of the accident history, you need to have a damage
              check and detailed check. Because the buyer will both ask you
              various questions about this issue and make the same checks
              themselves to be sure. <br />{" "}
            </>{" "}
          </span>{" "}
          <span className="font-normal">
            You can use sahibinden.com&#39;s damage inquiry
          </span>{" "}
          <span className="font-normal">
            {" "}
            &nbsp;page to learn about your vehicle&#39;s damage history . By
            entering your vehicle&#39;s license plate or chassis number, you can
            learn about the damage accidents it has been involved in in the past
            or the period it has been insured.{" "}
          </span>{" "}
        </Heading>{" "}
        <Heading
          size="text7xl"
          as="h4"
          className="mt-[30px] text-[25px] font-normal leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <span className="font-bold">
            {" "}
            <>
              {" "}
              Are the Values ​​of Insurance Companies Reliable? <br />{" "}
            </>{" "}
          </span>
          <span>
            {" "}
            The Insurance, Reinsurance and Pension Companies Association of
            Turkey (TSB) regularly publishes&nbsp;{" "}
          </span>{" "}
          <a href="#" className="inline underline">
            {" "}
            a list of car insurance values . Thanks to the list, you can reach
            the estimated value of your vehicle. The values ​​given by TSB are
            very important as they are also used in second-hand vehicle loans.
            You can easily reach the estimated value of your vehicle by entering
            information such as brand, model and model year in the car insurance
            value list.{" "}
          </a>{" "}
        </Heading>{" "}
      </div>{" "}
    </div>
  );
}
