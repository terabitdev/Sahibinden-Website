import { Button, Heading, Input, Img } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
const table10Data = [
  {
    miniappraisal: "images/img_checkmark.svg",
    standard: "images/img_checkmark.svg",
    fullexpertise: "images/img_checkmark.svg",
  },
  {
    standard: "images/img_checkmark.svg",
    fullexpertise: "images/img_checkmark.svg",
  },
  {
    standard: "images/img_checkmark.svg",
    fullexpertise: "images/img_checkmark.svg",
  },
  { fullexpertise: "images/img_checkmark.svg" },
  { fullexpertise: "images/img_checkmark.svg" },
  { fullexpertise: "images/img_checkmark.svg" },
  { fullexpertise: "images/img_checkmark.svg" },
  { fullexpertise: "images/img_checkmark.svg" },
  { chooseThis: "Choose This Plan" },
];
export default function AdmanagementbuynowoneRowOne() {
  const table10Columns = React.useMemo(() => {
    const table10ColumnHelper = createColumnHelper();
    return [
      table10ColumnHelper.accessor("compareplans", {
        cell: (info) => (
          <div className="self-center">
            {" "}
            <Input
              size="6xl"
              shape="square"
              name="div_one"
              placeholder={`Engine / Mechanical Control`}
              className="mt-20 border-b border-solid border-indigo-50_03 px-8 font-inter font-medium text-black-900_01 sm:px-5"
            />{" "}
          </div>
        ),
        header: (info) => (
          <Heading
            size="headinglg"
            as="h2"
            className="py-[26px] pl-8 text-left !font-roboto text-[24px] font-bold !text-primary_colors-900 md:text-[22px] sm:py-5 sm:pl-5"
          >
            {" "}
            Compare plans{" "}
          </Heading>
        ),
        meta: { width: "354px" },
      }),
      table10ColumnHelper.accessor("miniappraisal", {
        cell: (info) => (
          <div className="flex justify-center border-b border-solid border-indigo-50_03 px-[30px] sm:px-5">
            {" "}
            <Img
              src={info.getValue()}
              alt="Checkmark"
              className="h-[20px]"
            />{" "}
          </div>
        ),
        header: (info) => (
          <Heading
            size="headingxl"
            as="h3"
            className="py-6 pl-[34px] text-left !font-roboto text-[25px] font-bold !text-black-0 md:text-[23px] sm:py-5 sm:pl-5 sm:text-[21px]"
          >
            {" "}
            Mini Appraisal Package{" "}
          </Heading>
        ),
        meta: { width: "354px" },
      }),
      table10ColumnHelper.accessor("standard", {
        cell: (info) => (
          <div className="flex justify-center border-b border-solid border-indigo-50_03 px-[30px] sm:px-5">
            {" "}
            <Img
              src={info.getValue()}
              alt="Checkmark"
              className="h-[20px]"
            />{" "}
          </div>
        ),
        header: (info) => (
          <Heading
            size="headingxl"
            as="h4"
            className="py-6 pl-[18px] text-left !font-roboto text-[25px] font-bold !text-black-0 md:text-[23px] sm:py-5 sm:text-[21px]"
          >
            {" "}
            Standard Expertise Package{" "}
          </Heading>
        ),
        meta: { width: "354px" },
      }),
      table10ColumnHelper.accessor("fullexpertise", {
        cell: (info) => (
          <div className="flex justify-center border-b border-solid border-indigo-50_03 px-[30px] sm:px-5">
            {" "}
            <Img
              src={info.getValue()}
              alt="Checkmark"
              className="h-[20px]"
            />{" "}
          </div>
        ),
        header: (info) => (
          <Heading
            size="headingxl"
            as="h5"
            className="py-6 pl-[34px] text-left !font-roboto text-[25px] font-bold !text-black-0 md:text-[23px] sm:py-5 sm:pl-5 sm:text-[21px]"
          >
            {" "}
            Full Expertise Package{" "}
          </Heading>
        ),
        meta: { width: "354px" },
      }),
    ];
  }, []);
  return (
    <div>
      {" "}
      <div className="bg-white p-2.5 shadow-sm">
        {" "}
        <div className="flex items-center rounded border border-solid border-indigo-50_03 bg-white md:flex-col">
          {" "}
          <div className="h-[804px] w-full self-start border-r border-solid border-indigo-50_03 shadow-sm md:px-5" />{" "}
          <div className="h-[988px] w-full border-r border-solid border-indigo-50_03 shadow-sm md:px-5" />{" "}
          <div className="h-[988px] w-full border-r border-solid border-indigo-50_03 shadow-sm md:px-5" />{" "}
          <div className="w-full border-r border-solid border-indigo-50_03 shadow-sm md:px-5">
            {" "}
            <ReactTable
              size="md"
              bodyProps={{ className: "" }}
              headerProps={{
                className: "border-indigo-50_03 border-b border-solid",
              }}
              className="block overflow-x-auto whitespace-nowrap"
              columns={table10Columns}
              data={table10Data}
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
