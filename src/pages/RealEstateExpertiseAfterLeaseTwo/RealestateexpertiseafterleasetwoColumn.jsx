import { Heading, Img } from "../../components";
import React from "react";
export default function RealestateexpertiseafterleasetwoColumn() {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start md:px-5">
        {" "}
        <Heading
          size="heading4xl"
          as="h1"
          className="text-[30px] font-semibold md:text-[28px] sm:text-[26px]"
        >
          {" "}
          What is a Certificate of Insolvency?{" "}
        </Heading>{" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Frontviewman"
          className="mt-11 h-[1032px] w-full object-cover md:h-auto"
        />{" "}
        <Heading
          size="text7xl"
          as="h2"
          className="mt-[22px] w-full text-[25px] font-medium leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <>
            {" "}
            The document showing that the debtor does not have sufficient assets
            for the legally pursued payment is called an insolvency certificate.
            This document is issued by the enforcement office. From the
            creditor&#39;s perspective, it is a document issued by the
            enforcement office for the unpaid part of the receivable as a result
            of the enforcement proceedings. The content of the insolvency
            certificate includes the remaining receivable amount of the
            creditor, interest and follow-up expenses and enforcement file
            expenses. <br /> In order to issue a certificate of insolvency, an
            enforcement file is first opened. The Enforcement Office examines
            the assets subject to seizure and issues this document if the
            relevant assets cannot cover the debt. It is divided into two types:{" "}
          </>{" "}
        </Heading>
        <Heading
          size="text7xl"
          as="h3"
          className="mt-[30px] w-full text-[25px] font-medium leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <>
            {" "}
            1- Temporary Insolvency Certificate <br /> It is a document of
            insolvency given during the seizure and not yet final. This document
            does not state whether the debtor&#39;s assets will cover the debt
            or not, because this will only be finalized after the sale. A
            cancellation lawsuit can be filed against the temporary insolvency
            document. After the seizure is finalized, this document is converted
            into a permanent document if necessary. <br /> <br /> 2- Permanent
            Insolvency Certificate <br /> If the debtor does not have any assets
            to cover the seizure, that is, if the debtor does not have any
            assets to be seized, a permanent insolvency certificate is issued to
            the debtor. In this case, the document is not issued separately for
            the creditor. This document is issued to both the debtor and the
            creditor for the remaining debt after the sale of the debtor&#39;s
            seized assets. In this way, the remaining debt is followed up.{" "}
          </>{" "}
        </Heading>{" "}
      </div>{" "}
    </div>
  );
}
