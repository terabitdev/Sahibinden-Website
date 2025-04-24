import { Button, Input, Heading, TextArea, Img } from "../../components";
import React from "react";
export default function WhilebuyingvehiclebuyingguidetwoColumn() {
  return (
    <div className="flex flex-col items-center self-stretch">
      {" "}
      <div className="container-sm md:px-5">
        {" "}
        <Img
          src="images/img_front_view_man.png"
          alt="Frontviewman"
          className="h-[1032px] w-full object-cover md:h-auto"
        />{" "}
        <Heading
          size="text7xl"
          as="h2"
          className="mt-[22px] text-[25px] font-medium leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          Defective housing is a real estate that does not meet the
          specifications specified by the seller, does not meet the agreed
          technical specifications, and prevents the buyer from benefiting from
          the house as required. Law No. 6506 on Consumer Protection states that
          the seller is responsible for defective goods and the buyer has
          certain rights in this case.{" "}
        </Heading>{" "}
        <Heading
          size="headingxl"
          as="h3"
          className="mt-[30px] text-[25px] font-bold leading-[45px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <span>
            {" "}
            <>
              {" "}
              What are the Characteristics of a Defective House? <br />{" "}
            </>{" "}
          </span>{" "}
          <span className="font-medium">
            {" "}
            <>
              {" "}
              Although the scope of the definition of defective goods specified
              in Article 8 of the relevant law is wide, the following examples
              of defective housing can be given: <br /> The residence&#39;s
              installation projects such as electricity, natural gas and water
              have not been completed. <br /> Presence of deep cracks in the
              columns and beams of the house that may pose a danger <br /> The
              house does not comply with the zoning plan <br /> Lack of building
              permit <br /> Areas such as fire escapes and elevators are not
              constructed in accordance with the legislation. <br /> The
              building does not have balcony and roof drains. <br /> The house
              is mortgaged <br /> Lack of static reinforced concrete project{" "}
            </>{" "}
          </span>
        </Heading>{" "}
        <Heading
          size="text7xl"
          as="h4"
          className="mt-[30px] text-[25px] font-normal leading-[37px] md:text-[23px] sm:text-[21px]"
        >
          {" "}
          <>
            {" "}
            What are the Characteristics of a Defective House? <br /> Although
            the scope of the definition of defective goods specified in Article
            8 of the relevant law is wide, the following examples of defective
            housing can be given: <br /> The residence&#39;s installation
            projects such as electricity, natural gas and water have not been
            completed. <br /> Presence of deep cracks in the columns and beams
            of the house that may pose a danger <br /> The house does not comply
            with the zoning plan <br /> Lack of building permit <br /> Areas
            such as fire escapes and elevators are not constructed in accordance
            with the legislation. <br /> The building does not have balcony and
            roof drains. <br /> The house is mortgaged <br /> Lack of static
            reinforced concrete project <br /> What are the rights of the buyer
            in a defective property? <br /> If the person purchasing the
            property notices that the house is defective, they must notify the
            seller within 30 days after the sale. This notification must be made
            to the seller via a notary or registered letter. After notifying the
            seller, a defective goods lawsuit can be filed. <br /> Defects that
            are called hidden defects and that are discovered during use or as a
            result of an expert&#39;s examination can be reported within 5
            years. 5 years is the statute of limitations for defective housing.
            The consumer rights in defective housing specified in Article 11 of
            the relevant law are as follows: <br /> Termination of the contract,
            i.e. return of the sold real estate <br /> Request a discount on the
            sales price in proportion to the defect <br /> Requesting the seller
            to repair or fix the deficiency and pay the costs. <br /> Replacing
            the residence with another residence of the same characteristics{" "}
            <br /> The consumer can only use one of these rights. According to
            Article 12 of the Consumer Protection Law, if the defects in the
            house are grossly defective or concealed by fraud, the 5-year
            limitation period does not apply. In such cases, the period for the
            consumer to use their rights is unlimited.{" "}
          </>{" "}
        </Heading>
        <div className="mx-10 mt-[68px] flex flex-col items-start gap-14 md:mx-0 sm:gap-7">
          {" "}
          <Heading
            size="heading3xl"
            as="h5"
            className="text-[28px] font-bold capitalize !text-text md:text-[26px] sm:text-[24px]"
          >
            {" "}
            Leave a Reply{" "}
          </Heading>{" "}
          <div className="self-stretch rounded-[30px] bg-white p-[38px] sm:p-5">
            {" "}
            <div className="flex flex-col items-center">
              {" "}
              <Heading
                as="h6"
                className="ml-2 self-start text-[22px] font-normal capitalize !text-text_light md:ml-0"
              >
                {" "}
                Your email address will not be published.{" "}
              </Heading>{" "}
              <Heading
                size="text8xl"
                as="p"
                className="ml-2 mt-1.5 self-start text-[26px] font-medium capitalize !text-text_light md:ml-0 md:text-[24px] sm:text-[22px]"
              >
                {" "}
                Comment{" "}
              </Heading>{" "}
              <TextArea
                shape="round"
                name="your_comment"
                placeholder={`Your Comment`}
                className="mt-3 self-stretch rounded-[10px] px-[34px] font-medium capitalize text-text_light sm:px-5 sm:pt-5"
              />{" "}
              <div className="mt-[22px] flex gap-[38px] self-stretch md:flex-col">
                {" "}
                <div className="flex w-full flex-col items-start gap-1.5">
                  {" "}
                  <Heading
                    as="p"
                    className="text-[22px] font-medium capitalize !text-text_light"
                  >
                    {" "}
                    Name{" "}
                  </Heading>{" "}
                  <Input
                    shape="round"
                    type="text"
                    name="name"
                    placeholder={`Your Name`}
                    className="self-stretch rounded-[12px] px-3 font-medium capitalize"
                  />{" "}
                </div>{" "}
                <div className="flex w-full flex-col items-start gap-1.5">
                  {" "}
                  <Heading
                    as="p"
                    className="text-[22px] font-medium capitalize !text-text_light"
                  >
                    {" "}
                    Email{" "}
                  </Heading>{" "}
                  <Input
                    shape="round"
                    type="text"
                    name="email"
                    placeholder={`Your Name`}
                    className="self-stretch rounded-[12px] px-3 font-medium capitalize"
                  />{" "}
                </div>{" "}
              </div>
              <Button
                color="primary_colors_900"
                size="5xl"
                variant="fill"
                className="mt-[50px] min-w-[390px] rounded-[10px] px-[34px] font-medium shadow-lg sm:px-5"
              >
                {" "}
                Post Comment{" "}
              </Button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
