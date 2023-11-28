import Logo from "../../../public/images/Logo.png";
import LogoFacebook from "../../../public/images/facebook-2-logo-png-transparent-1.png";

import LogoGoogle from "../../../public/images/google-g-logo-1.png";
const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[689px] h-[699px] bg-neutral-100 rounded-2xl border border-black border-opacity-25">
          <div className="absolute text-black text-base font-semibold font-['COCOGOOSE']">
            Register
          </div>
          <div className="pt-[27px] ">
            <div className="flex flex-col items-center">
              <img className="w-[151px] h-[126px] mb-[29px]" src={Logo} />
              <div className="text-black text-4xl font-semibold font-['COCOGOOSE']">
                bylogin
              </div>

              <div className="h-[42px] pl-[70px] pr-[69px] pt-[22px]">
                <p className="w-[550px] top-0 left-0 [font-family:'Source_Sans_Pro-SemiBold',Helvetica] font-semibold text-[#707070] text-[14px] text-center leading-[15.1px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac tortor volutpat, vulputate massa non, feugiat tellus. Proin
                  ac neque et felis bibendum varius.
                </p>
              </div>
              <div className="pt-[37px] pl-[117px] pr-[129px]">
                <div className=" w-[443px] h-[64px] top-0 left-0 bg-neutral-100 rounded-[4px] border border-solid border-[#b6b6b6]" />
              </div>

              <div className="pt-[37px] pl-[117px] pr-[129px]">
                <div className="w-[443px] h-[64px] top-0 left-0 bg-neutral-100 rounded-[4px] border border-solid border-[#b6b6b6]" />
              </div>
            </div>

            <div className="flex flex-row pt-[19px] pl-[130px] w-[96%]">
              <input
                className="w-[16px] h-[16px] bg-neutral-100 border border-zinc-400"
                type="checkbox"
              />
              <div className="ml-[5px] [font-family:'Source_Sans_Pro-SemiBold',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[15.1px] whitespace-nowrap">
                Remember me
              </div>
              <div className="w-[109px] h-[15px] pl-[180px] pr-[138pxs] ">
                <div className=" [font-family:'Source_Sans_Pro-SemiBold',Helvetica] font-semibold text-black text-[14px] text-center tracking-[0] leading-[15.1px] whitespace-nowrap">
                  Forgot&nbsp;&nbsp;Password?
                </div>
              </div>
            </div>
            <div className="pt-[17px] pr-[129px] pl-[129px]">
              <button className="w-[435px] h-[46px] top-0 left-0 bg-[#1979bb] rounded-[50px] text-white">
                Login{" "}
              </button>
            </div>
            <div className="flex flex-row">
              <div className="pl-[100px] pt-[25px] pb-[47px] pr-4 flex">
                {" "}
                {/* Thêm lớp 'pr-4' để giảm padding bên phải */}
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

              <div className=" pt-[25px] pl-[14px] pr-[144px] pb-[47px]">
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

export default Login;
