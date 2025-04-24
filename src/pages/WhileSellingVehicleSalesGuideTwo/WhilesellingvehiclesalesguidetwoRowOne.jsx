import { Input, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close";
import VehicleMarketValueInfo from "../../components/VehicleMarketValueInfo";
import React from "react";
export default function WhilesellingvehiclesalesguidetwoRowOne() {
  const [searchBarValue326, setSearchBarValue326] = React.useState("");
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="flex w-full flex-col gap-10">
          {" "}
          <div className="flex items-center justify-between gap-5 md:flex-col">
            {" "}
            <Heading
              size="heading5xl"
              as="h1"
              className="text-[35px] font-semibold md:text-[33px] sm:text-[31px]"
            >
              {" "}
              During Sales{" "}
            </Heading>{" "}
            <Input
              size="md"
              name="search"
              placeholder={`Type the content you want to search`}
              value={searchBarValue326}
              onChange={(e) => setSearchBarValue326(e.target.value)}
              suffix={
                searchBarValue326?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue326("")} />
                ) : null
              }
              className="w-[34%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
            />{" "}
          </div>{" "}
          <div className="flex flex-col gap-[60px]">
            {" "}
            <VehicleMarketValueInfo
              headingText="How to Perform Notary Procedures When Selling a Vehicle?"
              descriptionText="In Türkiye, the official institution where you can make the transfer of your vehicle is the notary public, and the notary process requires great attention in the vehicle sales process. Because legal procedures may seem complicated to some buyers and sellers. For this reason, you should give importance to notary transactions and act carefully to avoid problems. You can start the sales process with a deposit first. The ... "
              moreText="More"
              readsCounterText="214490 Reads"
            />{" "}
            <VehicleMarketValueInfo
              headingText="How Can I Get Money During Sale?"
              descriptionText="According to the data of the Turkish Statistical Institute (TUIK), there are more than 20 million vehicles in traffic in our country. This number is increasing with the new vehicle sales that take place every year. In addition, transactions such as handover and transfer are carried out in second-hand vehicles currently in traffic. Money transfer in vehicle sales is one of the most important issues you should pay attention to......"
              moreText="More"
              readsCounterText="214490 Reads"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
