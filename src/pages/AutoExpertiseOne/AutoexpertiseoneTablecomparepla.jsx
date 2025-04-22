import { Button, Heading, Input, Img } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
const table11Data = [
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
export default function AutoexpertiseoneTablecomparepla() {
  const table11Columns = React.useMemo(() => {
    const table11ColumnHelper = createColumnHelper();
    return [
      table11ColumnHelper.accessor("compareplans", {
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
            className="py-[26px] pl-[34px] text-left !font-roboto text-[24px] font-bold !text-primary_colors-900 md:text-[22px] sm:py-5 sm:pl-5"
          >
            {" "}
            Compare plans{" "}
          </Heading>
        ),
        meta: { width: "364px" },
      }),
      table11ColumnHelper.accessor("miniappraisal", {
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
      table11ColumnHelper.accessor("standard", {
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
      table11ColumnHelper.accessor("fullexpertise", {
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
        meta: { width: "364px" },
      }),
    ];
  }, []);
  return (
    <ReactTable
      size="lg"
      bodyProps={{ className: "" }}
      headerProps={{ className: "border-indigo-50_03 border-b border-solid" }}
      className="mt-[106px] self-stretch md:block md:overflow-x-auto md:whitespace-nowrap"
      columns={table11Columns}
      data={table11Data}
    />
  );
}
