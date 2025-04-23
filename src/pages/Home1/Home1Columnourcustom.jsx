import { Img, Text, RatingBar, Slider } from "../../components";
import React from "react";
export default function Home1Columnourcustom() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  return (
    <div className="w-full">
      {" "}
      <div className="flex w-full">
        {" "}
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{
            0: { items: 1 },
            551: { items: 1 },
            1051: { items: 1 },
          }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              {" "}
              <div className="flex items-center md:flex-col">
                {" "}
                <div className="h-[556px] flex-1 bg-[url(/public/images/img_group_11897.png)] bg-cover bg-no-repeat px-[18px] py-[68px] md:h-auto md:self-stretch md:p-5">
                  {" "}
                  <div className="mb-2 flex items-center gap-[22px] md:flex-col">
                    {" "}
                    <div className="mb-[30px] flex w-[40%] justify-end self-end md:w-full">
                      {" "}
                      <Text
                        size="text12xl"
                        as="p"
                        className="mb-[100px] w-[84%] text-[61px] font-normal capitalize leading-[111.02%] tracking-[-3.35px] !text-black-900 md:text-[48px]"
                      >
                        {" "}
                        <span>Our&nbsp;</span>{" "}
                        <span className="font-medium">customers</span>{" "}
                        <span>
                          {" "}
                          <>
                            {" "}
                            &nbsp;think we’re <br /> the best{" "}
                          </>{" "}
                        </span>{" "}
                      </Text>{" "}
                    </div>{" "}
                    <div className="flex flex-1 gap-[15px] md:flex-col md:self-stretch">
                      {" "}
                      <div className="flex w-full flex-col items-center rounded-[20px] bg-white px-[26px] py-[34px] sm:p-5">
                        {" "}
                        <div className="ml-3 mt-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0">
                          {" "}
                          <Img
                            src="images/img_user_primary_colors_900.svg"
                            alt="User"
                            className="h-[28px]"
                          />{" "}
                          <RatingBar
                            value={5}
                            isEditable={true}
                            color="#ffcb2b"
                            activeColor="#ffcb2b"
                            size={26}
                            className="flex gap-2.5"
                          />{" "}
                        </div>
                        <Text
                          as="p"
                          className="mt-[18px] w-[96%] text-[16px] font-normal leading-[146.52%] !text-black-900 md:w-full"
                        >
                          {" "}
                          <>
                            {" "}
                            I had the pleasure of working with ABC Realty to
                            find my dream home, and I couldn&#39;t be happier
                            with the entire experience. <br /> <br /> From the
                            moment I walked into their office, I felt welcomed
                            and supported by their friendly team.{" "}
                          </>{" "}
                        </Text>{" "}
                        <div className="ml-3 mr-2 mt-[58px] flex items-center justify-center self-stretch md:mx-0">
                          {" "}
                          <div className="flex flex-1 gap-3.5">
                            {" "}
                            <Img
                              src="images/img_ellipse_13.png"
                              alt="Image"
                              className="h-[54px] w-[18%] rounded-[26px] object-contain"
                            />{" "}
                            <div className="flex flex-1 flex-col items-start">
                              {" "}
                              <Text
                                size="text2xl"
                                as="p"
                                className="text-[18px] font-normal !text-black-900"
                              >
                                {" "}
                                Sarah M.{" "}
                              </Text>{" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[15px] font-normal !text-black-900"
                              >
                                {" "}
                                Property consultation{" "}
                              </Text>{" "}
                            </div>{" "}
                          </div>{" "}
                          <Img
                            src="images/img_checkmark_black_900_01.svg"
                            alt="Checkmark"
                            className="mb-2.5 h-[22px] self-end"
                          />{" "}
                        </div>{" "}
                      </div>{" "}
                      <div className="flex w-full flex-col items-center rounded-[20px] bg-white px-[26px] py-[34px] sm:p-5">
                        {" "}
                        <div className="ml-3 mt-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0">
                          {" "}
                          <Img
                            src="images/img_user_primary_colors_900.svg"
                            alt="User"
                            className="h-[28px]"
                          />{" "}
                          <RatingBar
                            value={5}
                            isEditable={true}
                            color="#ffcb2b"
                            activeColor="#ffcb2b"
                            size={26}
                            className="flex gap-2.5"
                          />{" "}
                        </div>{" "}
                        <Text
                          as="p"
                          className="mt-[18px] w-[96%] text-[16px] font-normal leading-[146.52%] !text-black-900 md:w-full"
                        >
                          {" "}
                          Once we found the perfect home, Sarah guided me
                          through every step of the buying process, making it
                          feel effortless on my part. She was an excellent
                          negotiator, and thanks to her skills, I was able to
                          secure a fantastic deal on my new home.{" "}
                        </Text>
                        <div className="ml-3 mr-2 mt-[58px] flex items-center justify-center self-stretch md:mx-0">
                          {" "}
                          <div className="flex flex-1 gap-3.5">
                            {" "}
                            <Img
                              src="images/img_ellipse_13_54x54.png"
                              alt="Image"
                              className="h-[54px] w-[18%] rounded-[26px] object-contain"
                            />{" "}
                            <div className="flex flex-1 flex-col items-start">
                              {" "}
                              <Text
                                size="text2xl"
                                as="p"
                                className="text-[18px] font-normal !text-black-900"
                              >
                                {" "}
                                Esther Howard{" "}
                              </Text>{" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[15px] font-normal !text-black-900"
                              >
                                {" "}
                                Property consultation{" "}
                              </Text>{" "}
                            </div>{" "}
                          </div>{" "}
                          <Img
                            src="images/img_checkmark_black_900_01.svg"
                            alt="Checkmark"
                            className="mb-2.5 h-[22px] self-end"
                          />{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="relative ml-[-4px] flex h-[410px] w-[22%] flex-col items-center justify-center rounded-[20px] bg-[url(/public/images/img_group_48.svg)] bg-cover bg-no-repeat px-[26px] py-9 md:ml-0 md:h-auto md:w-full md:px-5 sm:p-5">
                  {" "}
                  <div className="ml-3 mt-1 flex items-center justify-between gap-5 self-stretch md:ml-0">
                    {" "}
                    <Img
                      src="images/img_user_primary_colors_900.svg"
                      alt="User"
                      className="h-[28px]"
                    />{" "}
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#ffcb2b"
                      activeColor="#ffcb2b"
                      size={26}
                      className="flex gap-2.5"
                    />{" "}
                  </div>{" "}
                  <Text
                    as="p"
                    className="mt-[18px] text-[16px] font-normal !text-black-900"
                  >
                    {" "}
                    My agent, Sarah, was an absolute delight to work with. She
                    took the time to truly understand what I was looking for in
                    a home and was always available to answer any questions I
                    had throughout the process. Her knowledge of the local real
                    estate market was{" "}
                  </Text>{" "}
                  <div className="ml-3 mr-2 mt-14 flex items-center justify-center self-stretch md:mx-0">
                    {" "}
                    <div className="flex flex-1 items-center gap-3.5">
                      {" "}
                      <Img
                        src="images/img_ellipse_13.png"
                        alt="Image"
                        className="h-[54px] w-[18%] rounded-[26px] object-contain"
                      />{" "}
                      <div className="flex flex-1 flex-col items-start">
                        {" "}
                        <Text
                          size="text2xl"
                          as="p"
                          className="text-[18px] font-medium !text-black-900"
                        >
                          {" "}
                          Sarah M.{" "}
                        </Text>
                        <Text
                          size="textlg"
                          as="p"
                          className="text-[15px] font-normal !text-black-900"
                        >
                          {" "}
                          Property consultation{" "}
                        </Text>{" "}
                      </div>{" "}
                    </div>{" "}
                    <Img
                      src="images/img_checkmark_black_900_01.svg"
                      alt="Checkmark"
                      className="mb-2 h-[22px] self-end"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </React.Fragment>
          ))}
        />{" "}
      </div>{" "}
    </div>
  );
}
