import { Text, Heading, Img, Button } from "./..";
import React from "react";
export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-center py-[18px]`}
    >
      {" "}
      <div className="container-sm mt-[22px] flex justify-center px-14 md:px-5">
        {" "}
        <div className="flex w-[90%] flex-col gap-[74px] md:w-full md:gap-[55px] sm:gap-[37px]">
          {" "}
          <div className="flex items-center justify-between gap-5">
            {" "}
            <Img
              src="images/img_footer_logo.svg"
              alt="Footerlogo"
              className="h-[44px] w-[52px] object-contain"
            />{" "}
            <div className="flex items-center gap-5">
              {" "}
              <Button
                shape="circle"
                className="w-[28px] rounded-[14px] !border px-1.5"
              >
                {" "}
                <Img src="images/img_facebook.svg" />{" "}
              </Button>{" "}
              <Button
                shape="circle"
                className="w-[28px] rounded-[14px] !border px-1.5"
              >
                {" "}
                <Img src="images/img_trash.svg" />{" "}
              </Button>{" "}
              <Button
                shape="circle"
                className="w-[28px] rounded-[14px] !border px-1.5"
              >
                {" "}
                <Img src="images/img_link.svg" />{" "}
              </Button>{" "}
              <Button
                shape="circle"
                className="w-[28px] rounded-[14px] !border px-1.5"
              >
                {" "}
                <Img src="images/img_vector.svg" />{" "}
              </Button>{" "}
              <Img
                src="images/img_link_white.svg"
                alt="Link"
                className="h-[30px] w-[20%] rounded-[50%]"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex w-[82%] items-start md:w-full md:flex-col">
            {" "}
            <div className="flex w-[52%] items-start justify-between gap-5 self-center md:w-full sm:flex-col">
              {" "}
              <div className="flex flex-col items-start gap-5 self-center">
                {" "}
                <Heading
                  size="headings"
                  as="h6"
                  className="text-[16px] font-bold !text-white"
                >
                  {" "}
                  Institutional{" "}
                </Heading>{" "}
                <ul className="flex flex-col items-start">
                  {" "}
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        About Us{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a
                      href="Sustainability"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5"
                    >
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Sustainability{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#" className="mt-5">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Human Resources{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="News"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5"
                    >
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        News{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#" className="mt-5">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Site Map{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a
                      href="Communication"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5"
                    >
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Communication{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#" className="mt-[38px]">
                      {" "}
                      <Text
                        size="texts"
                        as="p"
                        className="text-[12px] font-normal !text-white"
                      >
                        {" "}
                        © 2024 Sahibinden Ltd. All rights reserved.{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>
              </div>
              <div className="flex w-[52%] flex-col items-start gap-5 sm:w-full">
                {" "}
                <Heading
                  size="headings"
                  as="h6"
                  className="text-[16px] font-bold !text-white"
                >
                  {" "}
                  Our Services{" "}
                </Heading>{" "}
                <ul className="flex flex-col items-start gap-[21px]">
                  {" "}
                  <li>
                    {" "}
                    <a href="Doping" target="_blank" rel="noreferrer">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Doping{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Q - My Money is Safe{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Secure E-Commerce{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="Advert" target="_blank" rel="noreferrer">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Advert{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="Mobile" target="_blank" rel="noreferrer">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Mobile{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Auto King{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>
            <div className="flex w-[48%] items-start justify-between gap-5 md:w-full sm:flex-col">
              {" "}
              <ul className="flex w-[58%] flex-col items-start sm:w-full">
                {" "}
                <li>
                  {" "}
                  <a href="Shops" target="_blank" rel="noreferrer">
                    {" "}
                    <Heading
                      size="headings"
                      as="h6"
                      className="text-[16px] font-bold !text-white"
                    >
                      {" "}
                      Shops{" "}
                    </Heading>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[14px] font-normal !text-white"
                    >
                      {" "}
                      My Store{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[14px] font-normal !text-white"
                    >
                      {" "}
                      I Want to Open a Store{" "}
                    </Text>{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
              <div className="flex flex-col items-start gap-5 self-center">
                {" "}
                <Heading
                  size="headings"
                  as="h6"
                  className="text-[16px] font-bold !text-white"
                >
                  {" "}
                  Privacy and Use{" "}
                </Heading>{" "}
                <ul className="flex flex-col items-start gap-[21px]">
                  {" "}
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Safe Shopping Tips{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Contracts and Rules{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Account Agreement{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Terms Of Use{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Protection of Personal Data{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <Text
                        size="textmd"
                        as="p"
                        className="text-[14px] font-normal !text-white"
                      >
                        {" "}
                        Help and Operation Guide{" "}
                      </Text>{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
