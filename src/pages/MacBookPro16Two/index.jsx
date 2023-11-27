import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, FloatingInput, Img, Text } from "components";
import { Link } from "react-router-dom";

const MacBookPro16TwoPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 h-[1117px] mx-auto p-[116px] md:px-10 sm:px-5 relative w-full">
        <Img
          className="absolute h-[471px] object-cover right-[14%] top-[18%] w-[27%]"
          src="images/img_11.png"
          alt="Eleven"
        />
        <div className="absolute bg-gray-100 bottom-[10%] flex flex-col inset-x-[0] items-start justify-start mx-auto outline outline-[1px] outline-black-900_42 p-1.5 md:px-5 rounded-[16px] w-2/5">
          <div className="flex flex-col justify-start mb-[30px] md:ml-[0] ml-[3px] w-[91%] md:w-full">
            <div className="flex sm:flex-col flex-row font-cocogoose sm:gap-5 items-start justify-start w-[68%] md:w-full">
              <Img
                className="h-[18px] sm:mt-0 mt-0.5 w-[18px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
              <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[7px] w-[13%] sm:w-full">
                <span href="javascript:" className="text-base text-black-900">
                  <Link to="/MacBookPro16one" size="txtCOCOGOOSEDemiBold16">
                    Login
                  </Link>
                </span>
                <div className="bg-blue-800 h-px w-[72%]"></div>
              </div>
              <Img
                className="h-[126px] md:h-auto sm:ml-[0] ml-[184px] sm:mt-0 mt-5 object-cover w-[37%] sm:w-full"
                src="images/img_balksz11.png"
                alt="balkszEleven"
              />
            </div>
            <Text
              className="md:ml-[0] ml-[259px] mt-[18px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtCOCOGOOSEDemiBold36"
            >
              bylogin
            </Text>
            <Text
              className="leading-[108.10%] md:ml-[0] ml-[60px] mt-[15px] text-center text-gray-600 text-sm w-[91%] sm:w-full"
              size="txtSourceSansProSemiBold14"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              tortor volutpat, vulputate massa non, feugiat tellus. Proin ac
              neque et felis bibendum varius.
            </Text>
            <div className="flex flex-col font-sourcesanspro items-start justify-start md:ml-[0] ml-[107px] mt-[29px] w-[73%] md:w-full">
              <div className="h-[73px] md:h-[90px] mt-7 relative w-full">
                <div className="absolute bottom-[0] md:h-[62px] h-[66px] inset-x-[0] mx-auto w-full">
                  <div className="absolute bg-gray-100 border border-gray-400 border-solid flex flex-col h-max inset-[0] items-start justify-center m-auto p-[17px] rounded w-full">
                  <input
                      className="absolute bg-gray-100 border border-gray-400 border-solid flex flex-col h-max inset-[0] items-start justify-center m-auto p-[17px] rounded w-full"
                      size="txtSourceSansProSemiBold14Gray500"
                      placeholder=" Username or Email..."
                    />
                  </div>
                    
                  <div className="absolute bg-gray-100 h-[7px] left-[4%] top-[0] w-[28%]"></div>
                </div>
                <Text
                  className="absolute left-[12%] text-black-900 text-center text-sm top-[0]"
                  size="txtSourceSansProSemiBold14Black900"
                >
                  Email
                </Text>
              </div>
              <div className="h-[73px] md:h-[90px] mt-7 relative w-full">
                <div className="absolute bottom-[0] md:h-[62px] h-[66px] inset-x-[0] mx-auto w-full">
                  <div className="absolute bg-gray-100 border border-gray-400 border-solid flex flex-col h-max inset-[0] items-start justify-center m-auto p-[17px] rounded w-full">
                  <input
                      className="absolute bg-gray-100 border border-gray-400 border-solid flex flex-col h-max inset-[0] items-start justify-center m-auto p-[17px] rounded w-full"
                      size="txtSourceSansProSemiBold14Gray500"
                      placeholder="*************"
                    />
                  </div>
                  <div className="absolute bg-gray-100 h-[7px] left-[4%] top-[0] w-[28%]"></div>
                </div>
                <Text
                  className="absolute left-[12%] text-black-900 text-center text-sm top-[0]"
                  size="txtSourceSansProSemiBold14Black900"
                >
                  Password
                </Text>
              </div>
              <div className="h-[73px] md:h-[85px] mt-[23px] relative w-full">
                <div className="absolute bottom-[0] md:h-[62px] h-[66px] inset-x-[0] mx-auto w-full">
                  <div className="absolute bg-gray-100 border border-gray-400 border-solid flex flex-col h-max inset-[0] items-start justify-center m-auto p-[17px] rounded w-full">
                  <input
                      className="absolute bg-gray-100 border border-gray-400 border-solid flex flex-col h-max inset-[0] items-start justify-center m-auto p-[17px] rounded w-full"
                      size="txtSourceSansProSemiBold14Gray500"
                      placeholder="*************"
                    />
                  </div>
                  <div className="absolute bg-gray-100 h-[7px] left-[4%] top-[0] w-[28%]"></div>
                </div>
                <Text
                  className="absolute left-[9%] text-black-900 text-center text-sm top-[0]"
                  size="txtSourceSansProSemiBold14Black900"
                >
                  Re-Password
                </Text>
              </div>
              <CheckBox
                className="font-semibold md:ml-[0] ml-[13px] mt-2.5 text-center text-sm"
                inputClassName="border border-gray-400 border-solid h-4 mr-[5px] w-4"
                name="termsofuse"
                id="termsofuse"
                label="Terms Of Use"
              ></CheckBox>
              <Button className="cursor-pointer font-semibold min-w-[435px] sm:min-w-full ml-2 md:ml-[0] mt-3.5 text-base text-center">
                Register
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row font-sourcesanspro gap-[15px] items-center justify-end md:ml-[0] ml-[91px] mt-[38px] w-[78%] md:w-full">
              <div
                className="common-pointer bg-blue-A200 flex flex-row gap-[25px] items-center justify-start p-0.5 w-[49%] sm:w-full"
                onClick={() => googleSignIn()}
              >
                <div className="bg-white-A700 flex flex-col items-start justify-end p-1.5 w-1/5">
                  <Img
                    className="h-[26px] md:h-auto object-cover w-[26px]"
                    src="images/img_googleglogo.png"
                    alt="googleglogo"
                  />
                </div>
                <Text
                  className="text-center text-sm text-white-A700"
                  size="txtSourceSansProSemiBold14WhiteA700"
                >
                  Sign in with Google
                </Text>
              </div>
              <div className="bg-indigo-600 flex flex-row gap-[25px] items-center justify-center p-0.5 w-[49%] sm:w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-end p-1 w-1/5">
                  <Img
                    className="h-[30px] md:h-auto object-cover w-[43%]"
                    src="images/img_facebook2logo.png"
                    alt="facebook2logo"
                  />
                </div>
                <Text
                  className="mr-[26px] text-center text-sm text-white-A700"
                  size="txtSourceSansProSemiBold14WhiteA700"
                >
                  Sign in with Facebook
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacBookPro16TwoPage;
