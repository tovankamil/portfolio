import { menuNavbar, menuNavbarType } from "@/app/constants/constants";
import Image from "next/image";
import { Button } from "../../atoms";

const index = () => {
  return (
    <nav className="fixed max-w-screen  flex justify-center sm:w-full h-[70px]  top-0 left-0 right-0 z-50  ">
      <div className="max-w-[1264px] w-full   mx-auto z-50 flex justify-center sm:justify-between items-center   mt-4 ">
        <div className="flex flex-row justify-center items-center w-full space-x-4">
          <div className="flex flex-row justify-start items-center bg-white sm:space-x-[48px] border-2 border-gray-200  py-1.5 sm:py-2.5 px-5 rounded-full ">
            <Image
              src={`./icons/logo.svg`}
              width={145}
              height={43}
              alt="Tofan logo"
              className="w-20 sm:w-22 "
            />
            <ul className="hidden sm:flex flex-row justify-between items-center flex-1 w-full space-x-[48px] font-medium text-[16px] primary-color ">
              {menuNavbar.map((item: menuNavbarType, index: number) => {
                return <li key={index}>{item.title}</li>;
              })}
            </ul>
          </div>
          <Button
            style="hidden sm:block p-3 h-[50px] px-10 bg-blue-900 text-white rounded-[42px]  text-[16px]"
            text="Let's Talk"
          />
        </div>
      </div>
    </nav>
  );
};

export default index;
