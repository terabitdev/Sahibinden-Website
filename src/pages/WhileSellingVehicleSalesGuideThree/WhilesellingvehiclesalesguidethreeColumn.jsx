import { Heading, Img } from "../../components";
import React from "react";
export default function WhilesellingvehiclesalesguidethreeColumn() {
  return (
    <div className="flex flex-col items-center self-stretch">
      {" "}
      <div className="container-sm flex flex-col gap-[26px] md:px-5">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Frontviewman"
          className="h-[1032px] object-cover"
        />{" "}
        <Heading
          size="text7xl"
          as="h2"
          className="text-[25px] font-medium leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          In Türkiye, the official institution where you can carry out the
          transfer of your vehicle is the notary public, and the notary process
          requires great attention in the vehicle sales process. Because legal
          procedures may seem complicated to some buyers and sellers. For this
          reason, you should give importance to notary transactions and act
          carefully to avoid problems.{" "}
        </Heading>{" "}
        <Heading
          size="text7xl"
          as="h3"
          className="text-[25px] font-medium leading-[45px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <span className="font-bold">
            {" "}
            <>
              {" "}
              What Should You Do Before Going to the Notary? <br />{" "}
            </>{" "}
          </span>{" "}
          <span className="font-normal">
            You can start the sales process with&nbsp;
          </span>{" "}
          <a href="#" className="inline font-normal underline">
            {" "}
            a deposit{" "}
          </a>{" "}
          <span className="font-normal">
            {" "}
            <>
              {" "}
              &nbsp;. After receiving the deposit, you need to start collecting
              the necessary documents for the sale. Most of the documents
              requested during the notary transfer consist of documents that the
              seller must collect. The documents that the seller must prepare
              for the sale of a vehicle are as follows: <br />A valid ID card
              (documents issued by official institutions such as an ID card,
              passport or driver&#39;s license that can be used instead of an ID
              card) <br /> Registration document called license (If any part of
              the license is worn or torn to the point of being unreadable, it
              must be renewed) <br /> Traffic document <br /> Power of attorney
              if someone else will carry out the sale on your behalf <br />{" "}
              Other documents that need to be collected to be checked and taken
              into consideration are as follows: <br /> It should be checked
              whether your vehicle has Motor Vehicle Tax (MTV) or traffic fine
              debts. For this, a vehicle debt inquiry should be made on&nbsp;{" "}
            </>{" "}
          </span>
          <a href="#" className="inline font-normal underline">
            {" "}
            the Revenue Administration{" "}
          </a>{" "}
          <span className="font-normal">
            {" "}
            <>
              {" "}
              &nbsp;website. The seller is responsible for unpaid traffic fines
              and tax debts. In case of tax debt or traffic fine, the vehicle
              cannot be sold. <br /> The vehicle inspection service provided by
              TÜVTÜRK should be questioned and if the inspection has not been
              done, it should be done. You, as the seller, should pay the
              vehicle inspection fee. You can learn the inspection date by
              checking the inspection stamp on the license plate. If the vehicle
              has not been inspected, the sale transaction will not take place.{" "}
              <br /> If the vehicle is mortgaged due to payment methods such as
              loans or for another reason, the sale depends on various
              conditions. As the seller, you must either pay off the debt or
              transfer the debt to the buyer. You should not forget that banks
              are very meticulous about this issue. <br /> Vehicles without
              Compulsory Traffic Insurance cannot be sold. Therefore, you may
              need to renew your&nbsp;{" "}
            </>{" "}
          </span>{" "}
          <span className="font-normal">
            Compulsory Traffic Insurance policy before selling.
          </span>{" "}
        </Heading>{" "}
      </div>{" "}
    </div>
  );
}
