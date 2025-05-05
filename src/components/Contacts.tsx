import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import classes from "./styles/uniforms.module.css";

export const Contacts = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.square_grid_bg}>
        <div className={classes.logo_text}>
          <img src="/assets/contact_text.png" />
        </div>

        <div className="flex w-full mt-[17rem] h-[4rem] justify-around items-start">
          <div className="flex items-center">
            <IoMdMail className="inline mt-2 mr-3 text-[30px]" />
            <span className="text-[18px] ">jhonryancuadra61@gmail.com</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-end">
              <FaPhoneAlt className="inline mt-2 mr-3 text-[30px]" />
              <span className="text-[18px]"> (+63) 9506794599</span>
            </div>
            <div className="flex items-center mt-[9rem]">
              <CiLinkedin className="inline mt-2 mr-4 text-[36px]" />
              <FaFacebook className="inline mt-2 mr-4 text-[36px]" />
              <BiLogoGmail className="inline mt-2 mr-4 text-[36px]" />
            </div>
          </div>
          <div className="flex items-center">
            <FaLocationDot className="inline mt-2 mr-3 text-[30px]" />
            <span className="text-[18px] ">Basak, Lapu-lapu City, Cebu</span>
          </div>
        </div>
      </div>
    </div>
  );
};
