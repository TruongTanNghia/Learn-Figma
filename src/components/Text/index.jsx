import React from "react";

const sizeClasses = {
  txtCOCOGOOSEDemiBold16: "font-cocogoose font-semibold",
  txtSourceSansProSemiBold14WhiteA700: "font-semibold font-sourcesanspro",
  txtSourceSansProSemiBold14: "font-semibold font-sourcesanspro",
  txtSourceSansProSemiBold14Black900: "font-semibold font-sourcesanspro",
  txtCOCOGOOSEDemiBold36: "font-cocogoose font-semibold",
  txtSourceSansProSemiBold14Gray500: "font-semibold font-sourcesanspro",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
