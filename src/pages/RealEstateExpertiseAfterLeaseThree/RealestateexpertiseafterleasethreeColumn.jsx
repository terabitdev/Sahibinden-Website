import { Input, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import RealEstateExpertiseAfterLeaseThreeRow from "../../components/RealEstateExpertiseAfterLeaseThreeRow";
import React from "react";
export default function RealestateexpertiseafterleasethreeColumn() {
  const [searchBarValue439, setSearchBarValue439] = React.useState("");
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
            Pre Sales{" "}
          </Heading>{" "}
          <Input
            size="md"
            name="search"
            placeholder={`Type the content you want to search`}
            value={searchBarValue439}
            onChange={(e) => setSearchBarValue439(e.target.value)}
            suffix={
              searchBarValue439?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue439("")} />
              ) : null
            }
            className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
          />{" "}
        </div>{" "}
        <div className="flex flex-col gap-[60px]">
          {" "}
          <RealEstateExpertiseAfterLeaseThreeRow />{" "}
          <RealEstateExpertiseAfterLeaseThreeRow />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
