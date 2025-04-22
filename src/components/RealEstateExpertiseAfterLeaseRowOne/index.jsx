import { Text, Heading, Img } from "./..";
import React from "react";
export default function RealEstateExpertiseAfterLeaseRowOne({
  description = "&lt;&gt;Why is a Management Plan Important for Apartment and Site&lt;br /&gt;Residents? &lt;/&gt;",
  description1 = "&lt;&gt;The management style of an apartment or site and the rules such as the salaries to be&lt;br /&gt;received by the managers are determined by the management plan. According to Article &lt;br /&gt;28 of the Law on Condominiums No. 634, the management plan is a contract binding on all&lt;br /&gt;condominium owners. In case of disagreements regarding an article not included in the &lt;br /&gt;management plan, the articles of the relevant law are applied.&lt;/&gt;",
  more = "More",
  readsCounter = "214490 Reads",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch px-2.5 py-5 bg-white shadow-sm flex-1 rounded-[10px] container-sm`}
    >
      {" "}
      <div className="flex w-full items-center gap-5 md:flex-col">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Image"
          className="h-[288px] w-[30%] object-contain md:w-full"
        />{" "}
        <div className="flex-1 md:self-stretch">
          {" "}
          <div className="flex flex-col">
            {" "}
            <Heading
              size="headingxl"
              as="h4"
              className="text-[25px] font-semibold leading-[37px] md:text-[23px] sm:text-[21px]"
            >
              {" "}
              {description}{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="p"
              className="mt-1 text-[20px] font-normal leading-[30px]"
            >
              {" "}
              {description1}{" "}
            </Heading>{" "}
            <div className="mr-4 mt-6 flex flex-wrap items-start justify-between gap-5 md:mr-0">
              {" "}
              <Text
                as="p"
                className="mt-2.5 self-end text-[16px] font-medium !text-primary_colors-900"
              >
                {" "}
                {more}{" "}
              </Text>{" "}
              <Text
                as="p"
                className="text-[16px] font-medium !text-blue_gray-100"
              >
                {" "}
                {readsCounter}{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
