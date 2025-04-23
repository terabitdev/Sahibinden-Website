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
import MyshoppingtransactionsmydeliverythreeColumn from "./MyshoppingtransactionsmydeliverythreeColumn";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const accordionData = [
  { mymoneyis5: "My Money is Safe" },
  { mymoneyis5: "My Purchase Transactions" },
  { mymoneyis5: "My sales transactions" },
  { mymoneyis5: "Comment Management" },
  { mymoneyis5: "My delivery / billing addresses" },
  { mymoneyis5: "My bank Information" },
  { mymoneyis5: "My head office address" },
  { mymoneyis5: "Brand New Transactions" },
  { mymoneyis5: "Safe E-Commerce" },
];
export default function MyShoppingTransactionsMyDeliveryThreePage() {
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
      <div className="flex w-full flex-col gap-[70px] bg-white md:gap-[52px] sm:gap-[35px]">
        {" "}
        <Header />{" "}
        <div className="flex flex-col items-center gap-[62px] sm:gap-[31px]">
          {" "}
          <div className="container-sm md:px-5">
            {" "}
            <div className="flex items-start gap-[30px] md:flex-col">
              {" "}
              <Accordion className="mt-1 w-[22%] flex-col md:w-full">
                {" "}
                {accordionData.map((d, i) => (
                  <AccordionItem uuid={i} key={`expandablelistm${i}`}>
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
                              <div className="flex flex-1 items-end justify-between gap-5 border border-solid border-primary_colors-900 bg-primary_colors-900 px-5 py-2.5">
                                {" "}
                                <Text
                                  size="text2xl"
                                  as="p"
                                  className="mt-1 text-[18.64px] font-normal !text-white"
                                >
                                  {" "}
                                  {d.mymoneyis5}{" "}
                                </Text>{" "}
                                <Img
                                  src="images/img_arrow_up.svg"
                                  alt="Arrowup"
                                  className="mb-1.5 h-[18px]"
                                />{" "}
                              </div>{" "}
                            </>
                          )}{" "}
                        </AccordionItemState>{" "}
                      </AccordionItemButton>{" "}
                    </AccordionItemHeading>{" "}
                    <AccordionItemPanel>
                      {" "}
                      <div>Dummy Content</div>{" "}
                    </AccordionItemPanel>{" "}
                  </AccordionItem>
                ))}{" "}
              </Accordion>
              <div className="flex-1 self-center md:self-stretch">
                {" "}
                <div className="flex flex-col gap-3.5">
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
                  </div>{" "}
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
                    </div>
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
                    </div>{" "}
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
                        name="groupnineteen"
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
                        name="grouptwenty"
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
                        name="grouptwentyone"
                        options={dropDownOptions}
                        className="w-[80%] gap-[26px] rounded-[10px] border border-solid border-primary_colors-900 px-6 md:w-full sm:px-5"
                      />{" "}
                    </div>
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
                        name="grouptwentytwo"
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
                    </div>{" "}
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
                    </div>
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
          </div>{" "}
          <MyshoppingtransactionsmydeliverythreeColumn />{" "}
        </div>{" "}
        <Footer className="bg-black-0" />{" "}
      </div>{" "}
    </>
  );
}
