import { Input, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import RealEstateExpertiseAfterLeaseRowOne from "../../components/RealEstateExpertiseAfterLeaseRowOne";
import React from "react";
export default function RealestateexpertiseafterleaseColumn() {
  const [searchBarValue417, setSearchBarValue417] = React.useState("");
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
            After Lease{" "}
          </Heading>{" "}
          <Input
            size="md"
            name="search"
            placeholder={`Type the content you want to search`}
            value={searchBarValue417}
            onChange={(e) => setSearchBarValue417(e.target.value)}
            suffix={
              searchBarValue417?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue417("")} />
              ) : null
            }
            className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
          />{" "}
        </div>{" "}
        <div className="flex flex-col gap-[60px]">
          {" "}
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            {" "}
            <RealEstateExpertiseAfterLeaseRowOne />{" "}
          </a>{" "}
          <RealEstateExpertiseAfterLeaseRowOne
            description="What are Tenant Rights in Urban Transformation?"
            description1={
              <>
                {" "}
                Within the scope of urban transformation, risky structures are
                detected in buildings upon <br /> the request of real estate
                owners. A demolition decision is made for buildings that are{" "}
                <br /> determined to risky. Tenants, like estate owners, have
                certain rights in house where <br />a demolition decision is
                made.{" "}
              </>
            }
            more="More"
            readsCounter="214490 Reads"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
