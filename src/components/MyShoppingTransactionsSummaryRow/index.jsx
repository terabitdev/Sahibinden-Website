import { Button, Text, Heading, Img } from "./..";
import React from "react";
export default function MyShoppingTransactionsSummaryRow({
  buynow = "Buy Now",
  description = "&lt;&gt;By doing business on sahibinden.com, you can easily reach millions of buyers, grow business online,&lt;br /&gt;and easily add income to your income.&lt;/&gt;",
  iWantToSell = "I want to sell prpducts",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch p-[18px] bg-white shadow-md flex-1 rounded-[14px] container-xs`}
    >
      {" "}
      <div className="flex w-full items-start justify-center gap-3.5 sm:w-full">
        {" "}
        <Img
          src="images/img_close.svg"
          alt="Buy Now"
          className="h-[50px]"
        />{" "}
        <div className="flex flex-1 flex-col items-start self-center">
          {" "}
          <Heading
            size="text7xl"
            as="p"
            className="text-[25px] font-medium sm:text-[21px]"
          >
            {" "}
            {buynow}{" "}
          </Heading>{" "}
          <Text
            size="textlg"
            as="p"
            className="mt-1 text-[15px] font-medium leading-[22px] !text-black-900_01"
          >
            {" "}
            {description}{" "}
          </Text>{" "}
          <Button
            color="primary_colors_900"
            size="xl"
            variant="fill"
            shape="round"
            className="mt-2.5 min-w-[240px] self-end rounded-[24px] px-[18px] font-medium uppercase"
          >
            {" "}
            {iWantToSell}{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
