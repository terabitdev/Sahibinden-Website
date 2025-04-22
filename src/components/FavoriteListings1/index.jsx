import { Heading } from "./..";
import React from "react";
export default function FavoriteListings1({
  favoriteListTitle = "My Favorite List",
  listingsCount = "(0 Listings)",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center md:w-full gap-4 px-14 py-[110px] md:p-5 border-primary_colors-900 border border-solid shadow-bs rounded`}
    >
      {" "}
      <Heading
        size="text7xl"
        as="p"
        className="text-[25px] font-normal !text-white"
      >
        {" "}
        {favoriteListTitle}{" "}
      </Heading>{" "}
      <Heading
        size="text3xl"
        as="p"
        className="text-[20px] font-normal !text-white"
      >
        {" "}
        {listingsCount}{" "}
      </Heading>{" "}
    </div>
  );
}
