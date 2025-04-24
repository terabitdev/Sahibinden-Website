import WhileBuyingVehicleBuyingGuideColumnbeforepur from "../../components/WhileBuyingVehicleBuyingGuideColumnbeforepur";
import React, { Suspense } from "react";
const data = [
  {
    beforepurchase: "Before Purchase",
    description:
      "Do you know what you may need before buying a property? We have prepared a comprehensive guide for you, all the information you need is here. ",
    more: "More",
  },
  {
    beforepurchase: "Before Purchase",
    description:
      "Do you know what you may need before buying a property? We have prepared a comprehensive guide for you, all the information you need is here. ",
    more: "More",
  },
  {
    beforepurchase: "Before Purchase",
    description:
      "Do you know what you may need before buying a property? We have prepared a comprehensive guide for you, all the information you need is here. ",
    more: "More",
  },
];
export default function WhilebuyingvehiclebuyingguideRowTwo() {
  return (
    <div className="mt-[30px] flex justify-center">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white p-[18px] shadow-sm">
          {" "}
          <div className="flex gap-[60px] md:flex-col">
            {" "}
            <Suspense fallback={<div>Loading feed...</div>}>
              {" "}
              {data.map((d, index) => (
                <WhileBuyingVehicleBuyingGuideColumnbeforepur
                  {...d}
                  key={"listbeforepurch" + index}
                  className="mb-6 md:mb-0"
                />
              ))}{" "}
            </Suspense>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
