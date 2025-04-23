export default function RealestateexpertiseafterleaseoneRow() {
  const [searchBarValue420, setSearchBarValue420] = React.useState("");
  return (
    <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
      {" "}
      <div className="flex w-[46%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
        {" "}
        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
          {" "}
          <Img
            src="images/img_untitled_design.png"
            alt="Untitleddesign"
            className="h-[80px] w-[22%] object-contain md:w-full"
          />{" "}
        </a>{" "}
        <Input
          size="md"
          name="search"
          placeholder={`Type the content you want to search`}
          value={searchBarValue420}
          onChange={(e) => setSearchBarValue420(e.target.value)}
          suffix={
            searchBarValue420?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue420("")} />
            ) : null
          }
          className="w-[70%] rounded border border-solid border-primary_colors-900 px-2.5 font-opensans font-bold !text-blue_gray-100 md:w-full"
        />{" "}
      </div>{" "}
      <div className="mb-3 flex w-[34%] items-center justify-between gap-5 self-end md:w-full md:px-5">
        {" "}
        <a href="#">
          {" "}
          <Img
            src="images/img_frame_primary_colors_900.svg"
            alt="Image"
            className="h-[24px]"
          />{" "}
        </a>{" "}
        <a href="#">
          {" "}
          <Img src="images/img_lock.svg" alt="Lock" className="h-[24px]" />{" "}
        </a>{" "}
        <a href="#">
          {" "}
          <Img
            src="images/img_frame_primary_colors_900_24x24.svg"
            alt="Image"
            className="h-[24px]"
          />{" "}
        </a>{" "}
        <a href="#">
          {" "}
          <Img
            src="images/img_frame_24x24.svg"
            alt="Image"
            className="h-[24px]"
          />{" "}
        </a>{" "}
        <Button
          color="primary_colors_900"
          size="xl"
          variant="fill"
          shape="round"
          rightIcon={
            <Img
              src="images/img_arrowleft.svg"
              alt="Arrow Left"
              className="my-0.5 h-[20px] w-[20px] object-contain"
            />
          }
          className="min-w-[232px] gap-2 rounded-[24px] px-[18px] font-medium uppercase"
        >
          {" "}
          post an ad for free{" "}
        </Button>{" "}
      </div>{" "}
    </div>
  );
}
