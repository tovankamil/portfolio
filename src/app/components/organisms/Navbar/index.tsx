import { menuNavbar, menuNavbarType } from "@/app/constants/constants";
import Image from "next/image";
import { Button } from "../../atoms";

const index = () => {
  return (
    <nav className="fixed w-full h-[70px] bg-white top-0 left-0 right-0 z-50">
      <div className="max-w-[1264px]  mx-auto py-5 px-2 flex justify-between items-center">
        <div className="flex flex-row justify-start items-center space-x-[48px]">
          <Image
            src={`./icons/logo.svg`}
            width={145}
            height={43}
            alt="Tofan logo"
            className="w-22 "
          />
          <ul className="hidden sm:flex flex-row justify-between items-center flex-1 w-full space-x-[48px] font-medium text-[16px] primary-color ">
            {menuNavbar.map((item: menuNavbarType, index: number) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
        <Button
          style="hidden sm:block p-3 px-10 bg-blue-900 text-white rounded-[42px]  text-[16px]"
          text="Let's Talk"
        />
      </div>
    </nav>
  );
};

export default index;
