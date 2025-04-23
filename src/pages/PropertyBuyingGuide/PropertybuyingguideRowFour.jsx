import PropertyBuyingGuideColumnbeforepur from "../../components/PropertyBuyingGuideColumnbeforepur";
import React, { Suspense } from "react";
const data = [
  {
    beforepurchase: "Before Purchase",
    description: (
      <>
        {" "}
        Do you know what you may need before buying <br />a property? We have
        prepared a<br /> comprehensive guide for you, all the <br /> information
        you need is here.{" "}
      </>
    ),
    more: "More",
  },
  {
    beforepurchase: "Before Purchase",
    description: (
      <>
        {" "}
        Do you know what you may need before buying <br />a property? We have
        prepared a<br /> comprehensive guide for you, all the <br /> information
        you need is here.{" "}
      </>
    ),
    more: "More",
  },
  {
    beforepurchase: "Before Purchase",
    description: (
      <>
        {" "}
        Do you know what you may need before buying <br />a property? We have
        prepared a<br /> comprehensive guide for you, all the <br /> information
        you need is here.{" "}
      </>
    ),
    more: "More",
  },
];
export default function PropertybuyingguideRowFour() {
  return (
    <div className="mt-6 flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white p-[22px] shadow-sm sm:p-5">
          {" "}
          <div className="flex gap-[60px] md:flex-col">
            {" "}
            <Suspense fallback={<div>Loading feed...</div>}>
              {" "}
              {data.map((d, index) => (
                <PropertyBuyingGuideColumnbeforepur
                  {...d}
                  key={"listbeforepurch" + index}
                />
              ))}{" "}
            </Suspense>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
