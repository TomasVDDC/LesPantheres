import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t-[1px] text-white mt-[120px] py-10 bg-black">
      <div className="flex container justify-between mx-auto align-middle">
        <div className={`text-[18px] ms-2 text-white`}>
          Data Visualization EPFL 2024
        </div>
        <div className={`text-[18px] me-2 text-white`}>
          Made with ❤️ by LesPantheres
        </div>
      </div>
    </footer>
  );
};

export default Footer;
