import RentalGuide from "../../components/RentalGuide";
import React from "react";
export default function RealestateexpertisewhenrentingRowTwo() {
  return (
    <div className="flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white p-[22px] shadow-sm sm:p-5">
          {" "}
          <div className="mb-1 flex gap-28 md:flex-col">
            {" "}
            <RentalGuide />{" "}
            <RentalGuide
              headingText="After Lease"
              descriptionText={
                <>
                  {" "}
                  You have found the right house for you and agreed on the
                  terms. So what <br /> should you pay attention to during the
                  contract phase? The information <br /> you may need is in our
                  rental guide.{" "}
                </>
              }
              moreText="More"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
