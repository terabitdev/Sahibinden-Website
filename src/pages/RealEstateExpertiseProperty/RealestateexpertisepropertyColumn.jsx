import { Input, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import RealEstateExpertisePropertyRowOne from "../../components/RealEstateExpertisePropertyRowOne";
import React from "react";
export default function RealestateexpertisepropertyColumn() {
  const [searchBarValue234, setSearchBarValue234] = React.useState("");
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col gap-10 md:px-5">
        {" "}
        <div className="flex items-center justify-between gap-5 md:flex-col">
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
            value={searchBarValue234}
            onChange={(e) => setSearchBarValue234(e.target.value)}
            suffix={
              searchBarValue234?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue234("")} />
              ) : null
            }
            className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
          />{" "}
        </div>{" "}
        <div className="flex flex-col gap-[60px]">
          {" "}
          <RealEstateExpertisePropertyRowOne />{" "}
          <RealEstateExpertisePropertyRowOne
            whichhouses="How to Get a Housing Loan?"
            description="Owning a home is a dream for many people. If you have this dream but do not have enough savings, you can make your dreams come true by taking out a loan from the banks. While banks used to respond to all loan requests with consumer loans, with the housing loan system (Mortgage) that came into effect in the past, getting a loan has become much easier for those who want to buy a house...."
            more="More"
            readsCounter="214490 Reads"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
