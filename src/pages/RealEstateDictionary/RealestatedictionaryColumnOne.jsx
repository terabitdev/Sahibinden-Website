import { Heading } from "../../components";
import CertificateOfInsolvencyInfo from "../../components/CertificateOfInsolvencyInfo";
import React from "react";
export default function RealestatedictionaryColumnOne() {
  return (
    <div className="mt-10 flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-[60px] md:px-5 sm:gap-[30px]">
        {" "}
        <Heading
          size="text3xl"
          as="h3"
          className="flex h-[50px] w-[50px] items-center justify-center rounded-[24px] bg-primary_colors-900 text-center text-[20px] font-medium capitalize !text-white"
        >
          {" "}
          a{" "}
        </Heading>{" "}
        <div className="flex flex-col gap-[60px] self-stretch">
          {" "}
          <CertificateOfInsolvencyInfo />{" "}
          <CertificateOfInsolvencyInfo
            certificateTitle="What is Open Tender Procedure?"
            certificateDescription={
              <>
                {" "}
                The open tender method is the tender method that is open to
                participants and anyone <br /> who wants to can submit an offer.
                In this case, the tender is announced to the public <br /> and
                each candidate is expected to prepare an offer letter. The offer
                letter represents <br /> the budget determined by the candidate
                for the job. In the open tender method, <br /> candidates
                simply.....{" "}
              </>
            }
            moreText="More"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
