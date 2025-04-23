import { Helmet } from "react-helmet";
import {
  Button,
  CheckBox,
  Heading,
  Input,
  SelectBox,
  Img,
  Text,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbItem,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MyshoppingtransactionsmydeliveryfourColumn from "./MyshoppingtransactionsmydeliveryfourColumn";
import React from "react";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const accordionData = [
  { mymoneyis17: "My Money is Safe" },
  { mymoneyis17: "Brand New Transactions" },
  { mymoneyis17: "Safe E-Commerce" },
  { mymoneyis17: "Summary" },
  { mymoneyis17: "My Orders" },
  { mymoneyis17: "My Sales Transaction" },
  { mymoneyis17: "My Product on Sale" },
  { mymoneyis17: "What i will ship" },
  { mymoneyis17: "approval from the buyer" },
  { mymoneyis17: "My Successful Sales" },
  { mymoneyis17: "Returns & Cancellation" },
  { mymoneyis17: "My Products that are not on sale" },
  { mymoneyis17: "My Bank information" },
  { mymoneyis17: "My Head office address" },
  { mymoneyis17: "My Distance Contracts" },
  { mymoneyis17: "Comment Management" },
];
export default function MyShoppingTransactionsMydeliveryFourPage() {
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>Sahibinden</title>{" "}
        <meta
          name="description"
          content="Web site created using create-react-app"
        />{" "}
      </Helmet>{" "}
      <div className="flex w-full flex-col gap-[92px] bg-white md:gap-[69px] sm:gap-[46px]">
        {" "}
        <Header />{" "}
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-center gap-[30px] md:flex-col">
              {" "}
              <Accordion
                preExpanded={[0]}
                className="w-[22%] flex-col md:w-full"
              >
                {" "}
                {accordionData.map((d, i) => (
                  <AccordionItem uuid={i} key={`expandablelistm${i}`}>
                    {" "}
                    <div className="flex-1">
                      {" "}
                      <AccordionItemHeading className="w-full">
                        {" "}
                        <AccordionItemButton>
                          {" "}
                          <AccordionItemState>
                            {" "}
                            {(props) => (
                              <>
                                {" "}
                                <div className="relative z-[1] flex flex-wrap items-center justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-4">
                                  {" "}
                                  <Text
                                    size="textlg"
                                    as="p"
                                    className="w-[60%] text-[15px] font-normal leading-[22px] !text-primary_colors-900"
                                  >
                                    {" "}
                                    {d.mymoneyis17}{" "}
                                  </Text>{" "}
                                  {props?.expanded ? (
                                    <Img
                                      src="images/img_arrow_up_primary_colors_900.svg"
                                      alt="Arrowup"
                                      className="h-[18px] self-end"
                                    />
                                  ) : (
                                    <Img
                                      src="images/img_frame_primary_colors_900_18x18.svg"
                                      alt="Image"
                                      className="h-[18px]"
                                    />
                                  )}{" "}
                                </div>{" "}
                              </>
                            )}{" "}
                          </AccordionItemState>{" "}
                        </AccordionItemButton>{" "}
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        {" "}
                        <div>
                          {" "}
                          <AccordionItemHeading className="w-full">
                            {" "}
                            <AccordionItemButton>
                              {" "}
                              <AccordionItemState>
                                {" "}
                                {(props) => (
                                  <>
                                    {" "}
                                    <div className="flex justify-between gap-5 border border-solid border-primary_colors-900 bg-white px-5 py-4">
                                      {" "}
                                      <a
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                        target="_blank"
                                      >
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="w-[56%] text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis17}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>{" "}
                          <AccordionItemHeading className="w-full">
                            {" "}
                            <AccordionItemButton>
                              {" "}
                              <AccordionItemState>
                                {" "}
                                {(props) => (
                                  <>
                                    {" "}
                                    <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                                      {" "}
                                      <a
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                        target="_blank"
                                      >
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="w-[44%] text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis17}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>
                          <AccordionItemHeading className="w-full">
                            {" "}
                            <AccordionItemButton>
                              {" "}
                              <AccordionItemState>
                                {" "}
                                {(props) => (
                                  <>
                                    {" "}
                                    <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                                      {" "}
                                      <a
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                        target="_blank"
                                      >
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="w-[72%] text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis17}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>{" "}
                          <AccordionItemHeading className="w-full">
                            {" "}
                            <AccordionItemButton>
                              {" "}
                              <AccordionItemState>
                                {" "}
                                {(props) => (
                                  <>
                                    {" "}
                                    <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                                      {" "}
                                      <a
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                        target="_blank"
                                      >
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="w-[56%] text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis17}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>
                          <AccordionItemHeading className="w-full">
                            {" "}
                            <AccordionItemButton>
                              {" "}
                              <AccordionItemState>
                                {" "}
                                {(props) => (
                                  <>
                                    {" "}
                                    <div className="flex border border-solid border-primary_colors-900 bg-white px-5 py-4">
                                      {" "}
                                      <a
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                        target="_blank"
                                      >
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="w-[86%] text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis17}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>{" "}
                          <AccordionItemHeading className="w-full">
                            {" "}
                            <AccordionItemButton>
                              {" "}
                              <AccordionItemState>
                                {" "}
                                {(props) => (
                                  <>
                                    {" "}
                                    <div className="border border-solid border-primary_colors-900 bg-white p-4">
                                      {" "}
                                      <a
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                        target="_blank"
                                      >
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis17}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>
                          <AccordionItemHeading className="w-full">
                            {" "}
                            <AccordionItemButton>
                              {" "}
                              <AccordionItemState>
                                {" "}
                                {(props) => (
                                  <>
                                    {" "}
                                    <div className="border border-solid border-primary_colors-900 bg-white p-4">
                                      {" "}
                                      <a
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                        target="_blank"
                                      >
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis17}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>{" "}
                          <AccordionItemHeading className="w-full">
                            {" "}
                            <AccordionItemButton>
                              {" "}
                              <AccordionItemState>
                                {" "}
                                {(props) => (
                                  <>
                                    {" "}
                                    <div className="border border-solid border-primary_colors-900 bg-white p-4">
                                      {" "}
                                      <a
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                        target="_blank"
                                      >
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis17}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>
                          <AccordionItemHeading className="w-full">
                            {" "}
                            <AccordionItemButton>
                              {" "}
                              <AccordionItemState>
                                {" "}
                                {(props) => (
                                  <>
                                    {" "}
                                    <div className="border border-solid border-primary_colors-900 bg-white p-4">
                                      {" "}
                                      <a
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                                        target="_blank"
                                      >
                                        {" "}
                                        <Text
                                          size="textlg"
                                          as="p"
                                          className="text-[15px] font-normal capitalize leading-[22px]"
                                        >
                                          {" "}
                                          {d.mymoneyis17}{" "}
                                        </Text>{" "}
                                      </a>{" "}
                                    </div>{" "}
                                  </>
                                )}{" "}
                              </AccordionItemState>{" "}
                            </AccordionItemButton>{" "}
                          </AccordionItemHeading>{" "}
                          <div className="border border-solid border-primary_colors-900 bg-white p-4">
                            {" "}
                            <a
                              href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                              target="_blank"
                            >
                              {" "}
                              <Text
                                size="textlg"
                                as="p"
                                className="text-[15px] font-normal capitalize leading-[22px] !text-primary_colors-900"
                              >
                                {" "}
                                My delivery / billing addresses{" "}
                              </Text>{" "}
                            </a>{" "}
                          </div>{" "}
                        </div>{" "}
                      </AccordionItemPanel>{" "}
                    </div>{" "}
                  </AccordionItem>
                ))}{" "}
              </Accordion>
              <div className="flex flex-1 flex-col gap-3.5 md:self-stretch">
                {" "}
                <div className="flex items-center justify-center md:flex-col">
                  {" "}
                  <Breadcrumb
                    separator={
                      <Text className="h-[38px] w-[12.35px] text-[25px] font-normal !text-colors md:text-[23px] sm:text-[21px]">
                        {" "}
                        /{" "}
                      </Text>
                    }
                    className="flex flex-1 flex-wrap justify-between gap-[100px] md:gap-5 md:self-stretch"
                  >
                    {" "}
                    <BreadcrumbItem>
                      {" "}
                      <BreadcrumbLink
                        href="#"
                        className="md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        <Heading
                          size="text7xl"
                          as="h1"
                          className="text-[25px] font-normal"
                        >
                          {" "}
                          My Delivery{" "}
                        </Heading>{" "}
                      </BreadcrumbLink>{" "}
                    </BreadcrumbItem>{" "}
                    <BreadcrumbItem isCurrentPage>
                      {" "}
                      <BreadcrumbLink
                        href="#"
                        className="mr-[274px] md:text-[23px] sm:text-[21px]"
                      >
                        {" "}
                        <Heading
                          size="text7xl"
                          as="h2"
                          className="text-[25px] font-normal"
                        >
                          {" "}
                          Billing Addresses{" "}
                        </Heading>{" "}
                      </BreadcrumbLink>{" "}
                    </BreadcrumbItem>{" "}
                  </Breadcrumb>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    shape="round"
                    className="min-w-[182px] rounded-[24px] px-3.5 font-medium uppercase"
                  >
                    {" "}
                    Add new address{" "}
                  </Button>{" "}
                </div>
                <div className="flex flex-col items-end gap-5 rounded-[10px] bg-white p-6 shadow-xs sm:p-5">
                  {" "}
                  <div className="ml-1.5 flex items-center justify-end gap-10 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h3"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Address Name{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext"
                      className="flex-grow rounded-[10px] border border-solid border-primary_colors-900 px-2.5"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h4"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Name{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_one"
                      className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
                    />{" "}
                  </div>
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h5"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Surname{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_two"
                      className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="h6"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      country{" "}
                    </Heading>{" "}
                    <SelectBox
                      size="lg"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Frame"
                          className="h-[20px] w-[24px]"
                        />
                      }
                      name="group2548"
                      options={dropDownOptions}
                      className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Province{" "}
                    </Heading>{" "}
                    <SelectBox
                      size="lg"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Frame"
                          className="h-[20px] w-[24px]"
                        />
                      }
                      name="group2549"
                      options={dropDownOptions}
                      className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                    />{" "}
                  </div>
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      District{" "}
                    </Heading>{" "}
                    <SelectBox
                      size="lg"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Frame"
                          className="h-[20px] w-[24px]"
                        />
                      }
                      name="group2550"
                      options={dropDownOptions}
                      className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-end gap-[30px] self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Neighbourhood{" "}
                    </Heading>{" "}
                    <SelectBox
                      size="lg"
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_frame_primary_colors_900_18x18.svg"
                          alt="Frame"
                          className="h-[20px] w-[24px]"
                        />
                      }
                      name="group2551"
                      options={dropDownOptions}
                      className="flex-grow gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 sm:px-5"
                    />{" "}
                  </div>{" "}
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Address{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_three"
                      className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
                    />{" "}
                  </div>
                  <div className="ml-1.5 flex items-center justify-between gap-5 self-stretch md:ml-0 md:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Telephone{" "}
                    </Heading>{" "}
                    <Input
                      size="xl"
                      shape="round"
                      name="edittext_four"
                      className="w-[80%] rounded-[10px] border border-solid border-primary_colors-900 px-2.5 md:w-full"
                    />{" "}
                  </div>{" "}
                  <div className="mx-1.5 flex items-center justify-end self-stretch md:mx-0 sm:flex-col">
                    {" "}
                    <Heading
                      size="text3xl"
                      as="p"
                      className="text-[20px] font-normal capitalize"
                    >
                      {" "}
                      Invoice Type{" "}
                    </Heading>{" "}
                    <div className="flex flex-1 justify-end gap-[35px] sm:self-stretch">
                      {" "}
                      <CheckBox
                        size="sm"
                        name="individual"
                        label="Individual"
                        id="individual"
                        className="gap-3.5 text-[15px] capitalize text-black-900_01"
                      />{" "}
                      <CheckBox
                        size="lg"
                        name="institutional"
                        label="Institutional"
                        id="institutional"
                        className="gap-2.5 text-[15px] capitalize text-black-900_01"
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <Button
                    color="primary_colors_900"
                    size="xl"
                    variant="fill"
                    className="min-w-[148px] rounded px-[34px] font-opensans font-bold sm:px-5"
                  >
                    {" "}
                    Save{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <MyshoppingtransactionsmydeliveryfourColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
