import React from "react";
import { LandingRegister } from "../components/LandingRegister";
import Head from "next/head";

export default function PreRegister() {
  const countRegister = ["15.000", "30.000", "50.000", "70.000", "100.000"];

  const imgInfoRegister = [
    {
      key: "reward-1",
      url: "/assets/images/Polygon.png",
      desc: "item drop rate scroll and exp scroll",
    },
    {
      key: "reward-2",
      url: "/assets/images/Polygon.png",
      desc: "carillon worth 1 gacha and keys",
    },
    {
      key: "reward-3",
      url: "/assets/images/Polygon.png",
      desc: "carillon worth 3 gacha, costume",
    },
    {
      key: "reward-4",
      url: "/assets/images/Polygon.png",
      desc: "carillon worth 6 gacha, and exclusive weapon",
    },
    {
      key: "reward-5",
      url: "/assets/images/Polygon.png",
      desc: "carillon worth 10 gacha & non-tradable gashani",
    },
  ];
  return (
    <div style={{ backgroundColor: "#003357" }}>
      <Head>
        <title>Evermore Knights | Pre-Register</title>
        <link rel="icon" href="/logo-ek.ico"></link>
      </Head>

      <LandingRegister />

      <div className="pre-register-info-wrapper">
        <div className="pre-register-text-info-wrapper">
          <div className="flex flex-col justify-center items-center  px-3  ">
            <h1 className="title-text font-bold text-2xl lg:text-4xl md:text-3xl sm:text-2xl ">
              PRE-REGISTER
            </h1>
            <img className="my-2" src="/assets/images/line.png" />
            <span className="text-white desc-text font-medium text-sm mt-2 w-full lg:w-2/3 lg:text-base  md:w-5/6 md:text-base  sm:w-full sm:text-base ">
              You can get special rewards only from pre-registration! Let’s
              reach for the Pre-Registration Milestone targets to get even
              greater rewards!
            </span>
          </div>
        </div>

        {/* desktop */}
        <div className="m-9 reward-wrapper-desktop">
          <div className="grid grid-cols-5 justify-center items-center gap-4 ">
            {countRegister.map((count) => (
              <div
                className="grid justify-items-center items-center"
                key={count}
              >
                <h1 className="font-bold text-active-link text-xl sm:text-2xl md:text-3xl">
                  {count}
                </h1>
                <span className="text-center text-active-link">
                  PRE-REGISTER
                </span>
              </div>
            ))}
          </div>

          <div className="pre-progress-wrapper">
            <div className="progress-bar">
              <div className="inner w-1/2"></div>
            </div>
            <ul className="progress-milepost flex">
              <li className="flex-1 flex items-center justify-center active">
                <span className="icon"></span>
              </li>
              <li className="flex-1 flex items-center justify-center active">
                <span className="icon"></span>
              </li>
              <li className="flex-1 flex items-center justify-center active">
                <span className="icon"></span>
              </li>
              <li className="flex-1 flex items-center justify-center active">
                <span className="icon"></span>
              </li>
              <li className="flex-1 flex items-center justify-center active">
                <span className="icon"></span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-5 justify-center items-center gap-4 ">
            {imgInfoRegister.map((slide) => (
              <div
                className="grid justify-items-center items-center"
                key={slide.key}
              >
                <img src={slide.url} alt="" />
                {/* <span className="text-center text-white text-sm">
                  {slide.desc}
                </span> */}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-5 justify-center gap-4 ">
            {/* <img src="/assets/images/pre-register-amount.png" /> */}
            {imgInfoRegister.map((slide) => (
              <div className="grid " key={slide.key}>
                <span className="text-center text-white text-sm">
                  {slide.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* mobile */}
        <div className="reward-wrapper-mobile">
          <div className="grid grid-cols-3 justify-items-center m-9 ">
            <div className="grid  justify-center items-center gap-4 ">
              {countRegister.map((count) => (
                <div
                  className="grid justify-items-center items-center"
                  key={count}
                >
                  <h1 className="font-bold text-active-link text-xl sm:text-2xl md:text-3xl">
                    {count}
                  </h1>
                  <span className="text-center text-active-link">
                    PRE-REGISTER
                  </span>
                </div>
              ))}
            </div>
            <div className="pre-progress-wrapper mob">
              <div className="progress-bar mob">
                <div className="inner w-1/2"></div>
              </div>
              <ul className="progress-milepost flex flex-col">
                <li className="flex-1 flex items-center justify-center active">
                  <span className="icon"></span>
                </li>
                <li className="flex-1 flex items-center justify-center active">
                  <span className="icon"></span>
                </li>
                <li className="flex-1 flex items-center justify-center active">
                  <span className="icon"></span>
                </li>
                <li className="flex-1 flex items-center justify-center active">
                  <span className="icon"></span>
                </li>
                <li className="flex-1 flex items-center justify-center active">
                  <span className="icon"></span>
                </li>
              </ul>
            </div>

            <div className="grid  justify-center items-center gap-4 ">
              {imgInfoRegister.map((slide) => (
                <div
                  className="grid justify-items-center items-center"
                  key={slide.key}
                >
                  <img className="w-1/2 h-auto" src={slide.url} alt="" />
                  <span className="text-center text-white text-xs">
                    {slide.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="total-user flex flex-col justify-center items-center px-12 pt-5">
          <div className="total-user-border ">
            <p className="px-8 sm:px-12 py-3">
              <span className="font-bold text-active-link text-lg sm:text-2xl">
                32.053
              </span>
              <span className="text-white pl-12 text-lg sm:text-2xl">
                USERS
              </span>
            </p>
            {/* <input value="32000 user"></input> */}
          </div>
          <div className="py-4 text-white text-center">
            Number of Player who have PRE-REGISTERED
          </div>
        </div>

        <div className="w-full pb-12">
          <div className="address-token-card flex-col md:flex-row">
            <div className="z-10">
              <img src="/assets/images/VN_Mamon 1.png" />
            </div>
            <form className="pre-register-form flex  flex-col md:flex-row m-auto md:-ml-32">
              <input
                className="p-10 md:pl-40"
                type="email"
                placeholder="Put Your E-mail Address"
                required
              />
              <button type="submit">PRE-REGISTER</button>
            </form>
            <div className="static text-center flex py-5 md:py-0 md:absolute sm:text-left bottom-20 right-0 w-7/12">
              <p className=" text-white text-center md:text-justify text-sm md:text-xs flex">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
