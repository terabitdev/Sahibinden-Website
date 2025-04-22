export default function LocationProgressList({
  sanacaktepeText = "Sanacaktepe",
  sanacaktepePercentage = "40.2%",
  kadikoyText = "Kadikoy",
  kadikoyPercentage = "56.2%",
  maltepeText = "Maltepe",
  maltepePercentage = "32.2%",
  pendikText = "Pendik",
  pendikPercentage = "30.2%",
  saltText = "Salt",
  saltPercentage = "39.2%",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col gap-3`}>
      {" "}
      <div className="flex items-start justify-center gap-[22px] self-stretch">
        {" "}
        <Heading
          size="text6xl"
          as="p"
          className="self-center text-[24px] font-medium"
        >
          {" "}
          {sanacaktepeText}{" "}
        </Heading>{" "}
        <div className="relative mt-2 h-[16px] flex-1">
          {" "}
          <div style={{ width: "0%" }} className="absolute h-full" />{" "}
        </div>{" "}
        <Heading
          size="text3xl"
          as="p"
          className="text-[20px] font-medium capitalize"
        >
          {" "}
          {sanacaktepePercentage}{" "}
        </Heading>{" "}
      </div>{" "}
      <div className="mr-5 flex items-start justify-center gap-[22px] self-stretch">
        {" "}
        <Heading
          size="text6xl"
          as="p"
          className="self-center text-[24px] font-medium"
        >
          {" "}
          {kadikoyText}{" "}
        </Heading>{" "}
        <div className="relative mt-2 h-[16px] flex-1">
          {" "}
          <div style={{ width: "0%" }} className="absolute h-full" />{" "}
        </div>{" "}
        <Heading
          size="text3xl"
          as="p"
          className="text-[20px] font-medium capitalize"
        >
          {" "}
          {kadikoyPercentage}{" "}
        </Heading>{" "}
      </div>{" "}
      <div className="flex items-start self-stretch">
        {" "}
        <Heading
          size="text6xl"
          as="p"
          className="self-center text-[24px] font-medium"
        >
          {" "}
          {maltepeText}{" "}
        </Heading>{" "}
        <div className="ml-[22px] mt-2 h-[16px] w-[48%] bg-green-a700_01" />{" "}
        <Heading
          size="text3xl"
          as="p"
          className="ml-[22px] text-[20px] font-medium capitalize"
        >
          {" "}
          {maltepePercentage}{" "}
        </Heading>{" "}
      </div>{" "}
      <div className="flex items-end self-stretch">
        {" "}
        <Heading
          size="text6xl"
          as="p"
          className="self-center text-[24px] font-medium"
        >
          {" "}
          {pendikText}{" "}
        </Heading>{" "}
        <div className="mb-2.5 ml-6 h-[16px] w-[46%] bg-green-a700_01" />{" "}
        <Heading
          size="text3xl"
          as="p"
          className="ml-6 text-[20px] font-medium capitalize"
        >
          {" "}
          {pendikPercentage}{" "}
        </Heading>{" "}
      </div>
      <div className="flex items-center self-stretch">
        {" "}
        <Heading size="text6xl" as="p" className="text-[24px] font-medium">
          {" "}
          {saltText}{" "}
        </Heading>{" "}
        <div className="ml-[22px] h-[16px] w-[50%] bg-green-a700_01" />{" "}
        <Heading
          size="text3xl"
          as="p"
          className="ml-[22px] text-[20px] font-medium capitalize"
        >
          {" "}
          {saltPercentage}{" "}
        </Heading>{" "}
      </div>{" "}
    </div>
  );
}
