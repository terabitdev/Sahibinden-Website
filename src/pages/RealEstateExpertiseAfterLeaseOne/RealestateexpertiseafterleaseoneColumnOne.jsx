import { Heading, Img } from "../../components";
import React from "react";
export default function RealestateexpertiseafterleaseoneColumnOne() {
  return (
    <div className="flex flex-col items-center gap-9 self-stretch">
      {" "}
      <div className="container-sm flex flex-col items-center gap-[22px] md:px-5">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Frontviewman"
          className="h-[1032px] w-full object-cover md:h-auto"
        />{" "}
        <Heading
          size="text7xl"
          as="h2"
          className="text-[25px] font-medium leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <>
            {" "}
            The management style of an apartment or site and the rules such as
            the salaries to be received by the <br /> managers are determined by
            the management plan. According to Article 28 of the Law on
            Condominiums <br /> No. 634, the management plan is a contract
            binding on all condominium owners. In case of disagreements <br />{" "}
            regarding an article not included in the management plan, the
            articles of the relevant law are applied.{" "}
          </>{" "}
        </Heading>{" "}
      </div>{" "}
      <Heading
        size="headingxl"
        as="h3"
        className="text-[25px] font-bold leading-[45px] md:text-[23px] sm:text-[21px]"
      >
        {" "}
        <span>
          {" "}
          <>
            {" "}
            Why is a Management Plan Important? <br />{" "}
          </>{" "}
        </span>{" "}
        <span className="font-normal">
          {" "}
          <>
            {" "}
            If there is a disagreement between people living in an apartment or
            site, the rules specified in the management <br /> plan are applied.
            Since disagreements are resolved within the framework of these
            rules, it is important for <br /> real estate owners to be informed
            about the apartment management plan. In addition, issues such as{" "}
            <br /> manager selection, meeting times, shared responsibilities or
            prohibitions are also determined by the <br /> management plan.{" "}
            <br /> People who want to buy real estate have the right to request
            and examine the management plan from the <br /> General Directorate
            of Land Registry and Cadastre. The possibility of encountering an
            unexpected situation <br /> can be eliminated by reading the
            management plan before transferring the title deed.{" "}
          </>{" "}
        </span>{" "}
      </Heading>
      <Heading
        size="text7xl"
        as="h4"
        className="text-[25px] font-normal leading-[37px] md:text-[23px] sm:text-[21px]"
      >
        {" "}
        <>
          {" "}
          How to Prepare an Apartment Management Plan? <br /> The apartment or
          site management plan is determined when the condominium is
          established. In other <br /> words, if an apartment is to be purchased
          from an apartment where the condominium is established, <br /> there
          is also a management plan. However, if the condominium is not yet
          established, a management <br /> plan sample can be obtained from the
          Land Registry and Cadastre Directorates. The condominium owners <br />{" "}
          can add new items to the sample management plan. The newly added items
          are written on the management <br /> plan pages with the notary seal
          and signed by the condominium owners. The sections in the management{" "}
          <br /> plan are as follows: <br /> General Provisions <br />{" "}
          Definitions <br /> Governing Bodies <br /> Rights and Obligations of
          Flat Owners <br /> Participation in Common Expenses <br /> Innovations
          and Additions <br /> Temporary Provisions{" "}
        </>{" "}
      </Heading>{" "}
      <div className="container-sm flex flex-col items-center md:px-5">
        {" "}
        <Heading
          size="text7xl"
          as="h5"
          className="text-[25px] font-normal leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <>
            {" "}
            How to Change the Management Plan? <br /> According to Article 28 of
            the relevant Law, in order to make changes to the management plan,
            the approval <br /> of 4/5 of the flat owners must be obtained. Each
            real estate owner has one vote, regardless of the size or <br />{" "}
            price of their flats. Owners of more than one flat have more than
            one vote, provided that it does not exceed <br /> 1/3 of all votes.
            In addition, flat owners have the right to appeal to the court
            regarding the changed decision.{" "}
          </>{" "}
        </Heading>{" "}
      </div>{" "}
    </div>
  );
}
