import { Heading, Img } from "../../components";
import React from "react";
export default function WhilesellingvehiclesalesguidethreeColumnOne() {
  return (
    <div className="mt-[30px] flex flex-col items-center self-stretch">
      {" "}
      <div className="container-sm flex flex-col gap-[30px] md:px-5">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Frontviewman"
          className="h-[1032px] object-cover"
        />{" "}
        <Heading
          size="text7xl"
          as="h5"
          className="text-[25px] font-normal leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <>
            {" "}
            After collecting the necessary documents for the notary vehicle
            sale, it will be beneficial to place them in a file and take them
            with you. Contrary to popular belief, notary transactions do not
            take long: <br /> First, the officers request the vehicle
            registration and the identity documents of the seller and buyer. If
            there is an attorney, the power of attorney must be presented.{" "}
            <br /> Then the officers check the identity information and request
            other documents. <br /> If any document is incorrect or missing, the
            sale will not take place. <br /> It is checked whether there is any
            obstacle to selling the vehicle, such as tax debt, traffic ticket or
            mortgage. <br /> If there is no obstacle to the sale, the sales
            contract is prepared by notary officials and presented to the seller
            and the buyer. <br /> After the signatures are made, the
            registration process begins. The vehicle is registered in the name
            of the buyer and the notary transfer is completed. <br /> The buyer
            must pay the notary fee of 932.65 TL (2023 price). <br /> The
            license in the name of the seller is cancelled and a sales document
            is submitted after the new registration document is prepared. Thus,
            the notary sales transactions are completed.{" "}
          </>{" "}
        </Heading>{" "}
        <Heading
          size="text7xl"
          as="h6"
          className="text-[25px] font-normal leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <span className="font-bold">
            {" "}
            <>
              {" "}
              How Should the Fee Be Paid Before the Notary Transfer Procedure?{" "}
              <br />{" "}
            </>{" "}
          </span>
          <span>
            {" "}
            <>
              {" "}
              In order to have a safe buying and selling process, it is
              recommended that the fee be paid as blocked before the transfer.
              After receiving the payment via a method such as blocked transfer,
              you must complete the notary procedures and sign the contract.
              Then, you can go to the bank where the money was transferred as
              blocked with the sales document and receive the vehicle fee.{" "}
              <br /> In addition, payment options for notary services have also
              been increased. Now, payments can be made at the notary with a
              credit card or bank card. In addition, a secure payment option is
              offered. <br /> The aim is to ensure that money transfers are
              carried out securely with the secure payment system. The secure
              payment system works as follows: <br /> The money to be paid for
              purchase and sale transactions is first transferred to escrow
              accounts opened at notaries. <br /> Notary transactions regarding
              purchase and sale are carried out. <br /> Once the notary
              procedures are completed, the price of the sale is transferred
              from the escrow account to the seller&#39;s account.{" "}
            </>{" "}
          </span>{" "}
        </Heading>{" "}
      </div>{" "}
    </div>
  );
}
