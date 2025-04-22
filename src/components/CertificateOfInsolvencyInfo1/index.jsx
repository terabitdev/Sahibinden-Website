import { Text, Heading, Img } from "./..";
import React from "react";
export default function CertificateOfInsolvencyInfo1({
  titleText = "What is a Certificate of Insolvency?",
  descriptionText = "&lt;&gt;The document showing that the debtor does not have sufficient assets fo the legally&lt;br /&gt;pursued payment is called the insolvency certificate. This document is issued by the&lt;br /&gt;enforcement office. From the creditor’s perspective, it is the document issued by the&lt;br /&gt;enforcement office for the unpaid part of the receivable as a result of the enforcement&lt;br /&gt;Proceedings. The content of the insolvency certificate includes;&lt;/&gt;",
  moreText = "More",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch p-6 sm:p-5 bg-white shadow-sm flex-1 rounded-[10px] container-sm`}
    >
      {" "}
      <div className="flex w-full items-start gap-5 md:flex-col">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Image"
          className="h-[288px] w-[30%] self-center object-contain md:w-full"
        />{" "}
        <div className="flex flex-1 flex-col items-start md:self-stretch">
          {" "}
          <Heading
            size="heading4xl"
            as="h3"
            className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
          >
            {" "}
            {titleText}{" "}
          </Heading>{" "}
          <Heading
            size="text3xl"
            as="p"
            className="mt-2.5 text-[20px] font-normal leading-[30px]"
          >
            {" "}
            {descriptionText}{" "}
          </Heading>{" "}
          <Text
            as="p"
            className="mt-[30px] text-[16px] font-medium !text-primary_colors-900"
          >
            {" "}
            {moreText}{" "}
          </Text>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
