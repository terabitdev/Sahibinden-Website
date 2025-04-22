import { Text, Heading, Img } from "./..";
import React from "react";
export default function FavoriteListings({
  favoriteImage = "images/img_frame_amber_500.svg",
  favoriteTitle = "Favorite Listings",
  favoriteDescription = "&lt;&gt;Add the listings you are interested in to your &lt;br /&gt;favorites, and we will notify you by e-mail when &lt;br /&gt;there is a price change.&lt;/&gt;",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col justify-center items-start w-[50%] md:w-full gap-3.5 px-7 py-[30px] sm:p-5 bg-white shadow-md rounded-[14px]`}
    >
      {" "}
      <Img src={favoriteImage} alt="Favorite" className="h-[34px]" />{" "}
      <div className="flex flex-1 flex-col items-start gap-1 self-center sm:self-stretch">
        {" "}
        <Heading size="text7xl" as="p" className="text-[25px] font-medium">
          {" "}
          {favoriteTitle}{" "}
        </Heading>{" "}
        <Text
          size="textlg"
          as="p"
          className="text-[15px] font-medium leading-[22px] !text-black-900_01"
        >
          {" "}
          {favoriteDescription}{" "}
        </Text>{" "}
      </div>{" "}
    </div>
  );
}
