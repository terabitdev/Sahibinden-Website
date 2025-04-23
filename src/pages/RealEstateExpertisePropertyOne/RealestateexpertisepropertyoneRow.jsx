import { Input, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import RealEstateExpertisePropertyRowOne from "../../components/RealEstateExpertisePropertyRowOne";
import React from "react";
export default function RealestateexpertisepropertyoneRow() {
  const [searchBarValue396, setSearchBarValue396] = React.useState("");
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="flex w-full flex-col gap-10">
          {" "}
          <div className="ml-1.5 flex items-center justify-between gap-5 md:ml-0 md:flex-col">
            {" "}
            <Heading
              size="heading5xl"
              as="h1"
              className="text-[35px] font-semibold md:text-[33px] sm:text-[31px]"
            >
              {" "}
              Before Purchase{" "}
            </Heading>{" "}
            <Input
              size="md"
              name="search"
              placeholder={`Type the content you want to search`}
              value={searchBarValue396}
              onChange={(e) => setSearchBarValue396(e.target.value)}
              suffix={
                searchBarValue396?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue396("")} />
                ) : null
              }
              className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
            />{" "}
          </div>{" "}
          <div className="flex flex-col gap-[60px]">
            {" "}
            <RealEstateExpertisePropertyRowOne
              whichhouses="Which Houses Fall into the Defective Category?"
              description="Defective housing is a real estate that does not meet the specifications specified by the seller, does not meet the agreed technical specifications, and prevents the buyer from benefiting from the house as required. Law No. 6506 on Consumer Protection states that the seller is responsible for defective goods and the buyer has certain rights in this case."
              more="More"
              readsCounter="214490 Reads"
              className="ml-1.5 md:ml-0"
            />{" "}
            <RealEstateExpertisePropertyRowOne
              whichhouses="How to Get a Housing Loan?"
              description="Owning a home is a dream for many people. If you have this dream but do not have enough savings, you can make your dreams come true by taking out a loan from the banks. While banks used to respond to all loan requests with consumer loans, with the housing loan system (Mortgage) that came into effect in the past, getting a loan has become much easier for those who want to buy a house...."
              more="More"
              readsCounter="214490 Reads"
              className="ml-1.5 md:ml-0"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
