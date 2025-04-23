import { Button, Heading } from "../../components";
import React from "react";
export default function RealestateindexwhensellingoneRowTwo() {
  return (
    <div className="mt-[74px] flex justify-center self-stretch">
      {" "}
      <div className="container-sm flex justify-center md:px-5">
        {" "}
        <div className="w-full rounded-[10px] bg-white px-8 py-10 shadow-sm sm:p-5">
          {" "}
          <div className="flex flex-col items-center gap-[30px]">
            {" "}
            <Heading
              size="heading7xl"
              as="h3"
              className="text-[50px] font-semibold md:text-[46px] sm:text-[40px]"
            >
              {" "}
              Sahibindex Housing Market Outlook{" "}
            </Heading>{" "}
            <Heading
              size="text3xl"
              as="h4"
              className="text-center text-[20px] font-medium leading-[30px]"
            >
              {" "}
              <>
                {" "}
                You can access the sahibindex Housing Market Outlook monthly
                reports prepared in collaboration with the Bahcesehir University{" "}
                <br /> Economic and Social Research Center (BETAM) and
                Sahibinden.com{" "}
              </>{" "}
            </Heading>{" "}
            <Button
              color="primary_colors_900"
              size="8xl"
              variant="fill"
              className="min-w-[252px] rounded-[10px] px-[26px] font-medium capitalize sm:px-5"
            >
              {" "}
              Go to reports Page{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
