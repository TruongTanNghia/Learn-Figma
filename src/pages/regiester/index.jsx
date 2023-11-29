import Logo from "../../../public/images/Logo.png";
import LogoFacebook from "../../../public/images/facebook-2-logo-png-transparent-1.png";
import Line from "../../../public/images/line-14.svg";
import LogoGoogle from "../../../public/images/google-g-logo-1.png";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <>
      <div className="w-[1728] h-[1117] flex justify-center items-center">
        <div className="w-[689px] h-[792px] max-md:w-[298px] max-md:h-[698px] bg-neutral-100 rounded-2xl border border-black border-opacity-25">
          <div className=" ml-[10px] mt-[15px] w-[18px] h-[18px] absolute">
            <div className="w-[18px] h-[18px] mt-[3px] left-0 top-0 absolute">
              <img src={Line} alt="Error" className="rotate-180" />
            </div>
          </div>
          <div className="max-md:absolute absolute ml-[35px] mt-[11px] flex flex-row text-black text-base font-semibold font-COCOGOOSE">
            <Link
              to="/login"
              className="max-md:absolute max-md:text-[16px] w-[36px] inline-block border-b-2 border-sky-600 font-semibold text-[16px]"
            >
              Login
            </Link>
          </div>

          <div className="pt-[27px] max-md:pt-[60px]">
            <div className="flex flex-col items-center">
              <img
                className="w-[151px] h-[126px] max-md:w-[110px] max-md:h-[92px] max-sm:mb-[11px] mb-[29px]"
                src={Logo}
              />
              <div className="text-black max-md:w-[135px] max-md:h[32px] max-md:ml-[115px] max-md:mr-[81px] max-md:h-[32px] max-md:text-[32px] text-4xl font-semibold font-['COCOGOOSE']">
                bylogin
              </div>

              <div className="h-[42px] max-md:h-[113px] max-md:mr-[26px] max-md:ml-[32px] max-md:pt-[5px] pl-[70px] pr-[69px] pt-[22px]">
                <p className="w-[550px] max-md:w-[240px] top-0 left-0 [font-family:'Source_Sans_Pro-SemiBold',Helvetica] font-semibold text-[#707070] max-sm:text-[#717171] text-[14px] text-center leading-[15.1px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac tortor volutpat, vulputate massa non, feugiat tellus. Proin
                  ac neque et felis bibendum varius.
                </p>
              </div>
              <div className="pt-[37px] pl-[117px] pr-[129px] relative max-md:relative">
                <div className="max-sm:w-[264.57px] max-sm:h-[38.22px] max-sm:mt-[-40px] max-sm:ml-5 w-[443px] h-[64px] top-0 left-0 bg-neutral-100 rounded-[4px]  relative max-md:relative">
                  <input
                    className="w-full h-full rounded-[4px] border border-solid border-[#b6b6b6] pl-4"
                    placeholder="Username or Email..."
                  />
                  <div className="absolute bg-white h-[7px] left-[12%] top-[0] w-[112px] max-md:absolute"></div>
                  <label
                    className="max-md:absolute max-md:text-[10px] absolute top-[-15%] left-[12%] text-center text-black font-semibold font-['Source Sans Pro' text-sm px-2 leading-none"
                    htmlFor="username"
                  >
                    Username
                  </label>
                </div>
              </div>

              <div className="pt-[37px] pl-[117px] max-md:pt-[19.78px] pr-[129px] relative max-md:relative">
                <div className="max-sm:w-[264.57px] max-sm:h-[38.22px] max-sm:ml-5 w-[443px] h-[64px] top-0 left-0 bg-neutral-100 rounded-[4px]  relative max-md:relative">
                  <input
                    type="password"
                    className="w-full h-full rounded-[4px] border border-solid border-[#b6b6b6] pl-4"
                    placeholder="********************************"
                  />
                  <div className="absolute bg-white h-[7px] left-[12%] top-[0] w-[112px] max-md:absolute"></div>
                  <label
                    className="max-md:absolute max-md:text-[10px] absolute top-[-15%] left-[12%] text-center text-black font-semibold font-['Source Sans Pro' text-sm px-2 leading-none"
                    htmlFor="username"
                  >
                    Password
                  </label>
                </div>
              </div>

              <div className="pt-[37px] pl-[117px] max-md:pt-[19.78px] pr-[129px] relative max-md:relative">
                <div className="max-sm:w-[264.57px] max-sm:h-[38.22px] max-sm:ml-5 w-[443px] h-[64px] top-0 left-0 bg-neutral-100 rounded-[4px]  relative max-md:relative">
                  <input
                    type="password"
                    className="w-full h-full rounded-[4px] border border-solid border-[#b6b6b6] pl-4"
                    placeholder="********************************"
                  />
                  <div className="absolute bg-white h-[7px] left-[12%] top-[0] w-[112px] max-md:absolute"></div>
                  <label
                    className="max-md:absolute max-md:text-[10px] absolute top-[-15%] left-[12%] text-center text-black font-semibold font-['Source Sans Pro' text-sm px-2 leading-none"
                    htmlFor="username"
                  >
                    Re-Password
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-row max-md:pl-[30px] max-md:pt-[34px] pt-[19px] pl-[130px] w-[96%]">
              <input
                className="w-[16px] h-[16px] bg-neutral-100 border border-zinc-400"
                type="checkbox"
              />
              <div className="ml-[5px] [font-family:'Source_Sans_Pro-SemiBold',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[15.1px] whitespace-nowrap">
                Terms Of Use
              </div>
            </div>
            <div className="pt-[17px] pr-[129px] pl-[129px] max-md:pl-[22px] max-md:pt-[20px] ">
              <button className="w-[435px] h-[46px] max-md:h-[27px] max-md:w-[254px] top-0 left-0 bg-[#1979bb] rounded-[50px] text-white">
                Register
              </button>
            </div>
            <div className="flex flex-row max-md:flex-col">
              <div className="pl-[100px] pt-[25px] pb-[47px] max-md:pl-[38px] max-md:pt-[28px] max-md:pr-[30px] max-md:pb-[0px] pr-4 flex">
                <div className="w-[230px] h-[44px] top-0 left-0 bg-[#4285f4] ">
                  <div className="absolute pt-[14px] pr-[43px] pl-[71px] font-semibold text-white text-[14px] text-center tracking-[0] leading-[15.1px] whitespace-nowrap">
                    Sign in with Google
                  </div>
                  <div className="pt-[2px] pl-[2px]">
                    <div className="w-[43px] h-[39px] bg-white flex justify-center items-center">
                      <div className="w-[26px] h-[26px]">
                        <img
                          className="w-[26px] h-[26px] object-cover"
                          alt="Google g logo"
                          src={LogoGoogle}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" pt-[25px] pl-[14px] pr-[144px] max-md:pt-[17px] pb-[47px] max-md:pl-[38px] max-md:pr-[30px]">
                <div className="w-[230px] h-[44px] top-0 left-0 bg-[#4285f4] ">
                  <div className="absolute pt-[14px] pr-[43px] pl-[71px] font-semibold text-white text-[14px] text-center tracking-[0] leading-[15.1px] whitespace-nowrap">
                    Sign in with Facebook
                  </div>
                  <div className="pt-[2px] pl-[2px]">
                    <div className="w-[43px] h-[39px] bg-white flex justify-center items-center">
                      <div className="w-[15px] h-[30px]">
                        <img
                          className="w-[15px] h-[30px] object-cover"
                          alt="Google g logo"
                          src={LogoFacebook}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
