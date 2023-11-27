import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, FloatingInput, Img, Line, Text } from "components";
import { Link } from "react-router-dom";

const MacBookPro16OnePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 h-[1117px] mx-auto p-[159px] md:px-10 sm:px-5 relative w-full">
        <Img
          className="absolute h-[519px] left-[13%] object-cover top-[14%] w-[28%]"
          src="images/img_31612531.png"
          alt="31612531"
        />
        <div className="absolute bg-gray-100 flex flex-col h-max inset-[0] items-end justify-center m-auto outline outline-[1px] outline-black-900_42 p-3.5 md:px-5 rounded-[16px] w-2/5">
          <div className="flex flex-col justify-start mb-8 mr-4 w-[89%] md:w-full">
            <div className="flex flex-col font-cocogoose gap-[18px] items-start justify-start md:ml-[0] ml-[199px] w-[67%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Img
                  className="sm:flex-1 h-[126px] md:h-auto sm:mt-0 mt-3 object-cover w-[39%] sm:w-full"
                  src="images/img_balksz11.png"
                  alt="balkszEleven"
                />
                <div className="h-[23px] sm:ml-[0] ml-[137px] relative w-1/5 sm:w-full">
                  <a
                    href="javascript:"
                    className="absolute h-full inset-[0] justify-center m-auto text-base text-black-900 w-max"
                  >
                    <Link to="/MacBookPro16Two" size="txtCOCOGOOSEDemiBold16">
                      Register
                    </Link>
                  </a>
                  <Line className="absolute bg-blue-800 bottom-[0] h-px left-[0] w-[69%]" />
                </div>
                <Img
                  className="h-[18px] sm:ml-[0] ml-[7px] sm:mt-0 mt-0.5 w-[18px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtCOCOGOOSEDemiBold36"
              >
                bylogin
              </Text>
            </div>
            <Text
              className="leading-[108.10%] mr-[38px] mt-[15px] text-center text-gray-600 text-sm w-[94%] sm:w-full"
              size="txtSourceSansProSemiBold14"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              tortor volutpat, vulputate massa non, feugiat tellus. Proin ac
              neque et felis bibendum varius.
            </Text>
            <div className="flex flex-col font-sourcesanspro items-center justify-start md:ml-[0] ml-[47px] mt-[29px] w-[76%] md:w-full">
              <FloatingInput
                wrapClassName="placeholder:bg-gray-100 font-semibold placeholder:left-[18px] p-0 sm:pr-5 placeholder:text-black-900 text-center text-gray-500 text-sm placeholder:top-[0] w-full"
                className="font-semibold p-0 sm:pr-5 text-center text-gray-500 text-sm w-full"
                name="email" // Thêm thuộc tính name để xác định ô input
                labelClasses="bg-gray-100 left-[18px] top-[0] text-black-900"
                focusedClasses="translate-y-[22px] scale-[1]"
                wrapperClasses="w-full top-[0]"
                labelText="Email" // Thay đổi nội dung nhãn
                defaultText="Enter your email..." // Thay đổi placeholder
              />

              <FloatingInput
                wrapClassName="placeholder:bg-gray-100 font-semibold placeholder:left-[18px] p-0 sm:pr-5 placeholder:text-black-900 text-center text-gray-500 text-sm placeholder:top-[0] w-full"
                className="font-semibold p-0 sm:pr-5 text-center text-gray-500 text-sm w-full"
                name="password" // Thêm thuộc tính name để xác định ô input
                labelClasses="bg-gray-100 left-[18px] top-[0] text-black-900"
                focusedClasses="translate-y-[22px] scale-[1]"
                wrapperClasses="w-full top-[0]"
                labelText="Password" // Thay đổi nội dung nhãn
                defaultText="**********" // Thay đổi placeholder
              />

              <div className="flex flex-row items-start justify-between mt-[17px] w-[96%] md:w-full">
                <CheckBox
                  className="font-semibold text-center text-sm"
                  inputClassName="border border-gray-400 border-solid h-4 mr-[5px] w-4"
                  name="rememberme"
                  id="rememberme"
                  label="Remember me"
                ></CheckBox>
                <Text
                  className="text-black-900 text-center text-sm"
                  size="txtSourceSansProSemiBold14Black900"
                >
                  Forgot Password?
                </Text>
              </div>
              <Button className="cursor-pointer font-semibold min-w-[435px] sm:min-w-full mt-3.5 text-base text-center">
                Login
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row font-sourcesanspro gap-[15px] items-center justify-start md:ml-[0] ml-[30px] mt-[25px] w-[81%] md:w-full">
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

export default MacBookPro16OnePage;
