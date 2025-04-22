export default function CredittwoColumnOne() {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="container-sm flex flex-col items-start gap-5 md:px-5">
        {" "}
        <Heading
          size="text7xl"
          as="h1"
          className="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
        >
          {" "}
          Credit Offers{" "}
        </Heading>{" "}
        <div className="self-stretch rounded-[10px] bg-white p-5 shadow-sm">
          {" "}
          <div className="flex items-center md:flex-col">
            {" "}
            <div className="flex w-[70%] items-start gap-10 md:w-full md:flex-col">
              {" "}
              <Tabs
                className="flex w-full flex-col gap-8 self-center rounded-[5px] bg-white p-[18px] shadow-xl"
                selectedTabClassName="!text-white bg-primary_colors-900 rounded-[20px]"
                selectedTabPanelClassName="mx-[38px] md:mx-0 !relative tab-panel--selected"
              >
                {" "}
                <TabList className="flex flex-wrap justify-center gap-[-21px] rounded-[20px] border border-solid border-primary_colors-900 bg-white">
                  {" "}
                  <Tab className="px-[42px] py-1 text-[20px] font-semibold text-primary_colors-900 md:px-5">
                    {" "}
                    Home Loan{" "}
                  </Tab>{" "}
                  <Tab className="px-[42px] py-1 text-[20px] font-semibold text-primary_colors-900 md:px-5">
                    {" "}
                    Consumer Loan{" "}
                  </Tab>{" "}
                </TabList>{" "}
                {[...Array(2)].map((_, index) => (
                  <TabPanel
                    key={`tab-panel${index}`}
                    className="absolute mx-[38px] items-center md:mx-0"
                  >
                    {" "}
                    <div className="w-full">
                      {" "}
                      <div className="flex flex-col gap-5">
                        {" "}
                        <Input
                          size="lg"
                          shape="round"
                          name="amount"
                          placeholder={`Loan Amount`}
                          className="rounded-[10px] border border-solid border-primary_colors-900 px-2.5 capitalize !text-black-900_01"
                        />{" "}
                        <SelectBox
                          shape="round"
                          indicator={
                            <Img
                              src="images/img_frame_primary_colors_900_18x18.svg"
                              alt="Frame"
                              className="h-[20px] w-[20px]"
                            />
                          }
                          name="maturity"
                          placeholder={`Maturity`}
                          options={dropDownOptions}
                          className="gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 capitalize sm:px-5"
                        />
                        <Button
                          color="primary_colors_900"
                          size="lg"
                          variant="fill"
                          shape="round"
                          className="self-stretch rounded-[22px] px-[34px] font-medium capitalize sm:px-5"
                        >
                          {" "}
                          Calculate Housing Loan{" "}
                        </Button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </TabPanel>
                ))}{" "}
              </Tabs>{" "}
              <div className="flex w-full flex-col items-start gap-1.5">
                {" "}
                <Heading
                  size="heading4xl"
                  as="h2"
                  className="text-[30px] font-semibold capitalize md:text-[28px] sm:text-[26px]"
                >
                  {" "}
                  Housing Loan Offers{" "}
                </Heading>{" "}
                <Text
                  as="p"
                  className="text-[16px] font-normal leading-[165.5%] !text-black-900_01"
                >
                  {" "}
                  <>
                    {" "}
                    When buying a house, you can easily apply for a <br /> loan
                    by comparing the housing or consumer loan <br /> rates that
                    suit you on a single page on <br /> sahibinden.com.{" "}
                  </>{" "}
                </Text>{" "}
                <Text
                  as="p"
                  className="text-[16px] font-medium !text-primary_colors-900"
                >
                  {" "}
                  Detailed Information{" "}
                </Text>{" "}
              </div>{" "}
            </div>{" "}
            <Img
              src="images/img_frame_blue_gray_600_03.svg"
              alt="Image"
              className="h-[274px] w-[20%] object-contain md:w-full"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
