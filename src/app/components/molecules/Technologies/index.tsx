import Image from "next/image";
import { IconTech, Label } from "../../atoms";

const Technologies = () => {
  return (
    <div className="w-4/12">
      {/* Tecnologies  */}

      <Label
        text=" Technologies  "
        bg
        styleBgStyle="bg-[#FFB508] text-gray-900"
      />
      <div className="experience mt-6 flex flex-col justify-start space-y-4 items-center rounded-full px-2 ">
        {/* Front End */}
        <div className="w-full icon hover:cursor-pointer flex  flex-row items-center justify-start space-x-2">
          <IconTech image="html-2.svg" title="Html" width={24} height={24} />
          <IconTech image="css-2.svg" title="Css" width={24} height={24} />
          <IconTech
            image="js-2.svg"
            title="Javascript"
            width={22}
            height={22}
            style="w-28 space-x-2 "
            iconstyle="w-4 h-4"
          />
          <IconTech
            image="react-2.svg"
            title="React"
            width={16}
            height={43}
            style="pl-2 pr-2  w-18 space-x-1"
            iconstyle="w-5 h-5"
          />
          <IconTech
            image="tailwind-2.svg"
            title="Tailwinds"
            width={24}
            height={24}
            style="pl-2 pr-2 w-22  "
          />
        </div>

        {/* Back End */}
        <div className="w-full icon hover:cursor-pointer flex  flex-row items-center justify-start space-x-2">
          <IconTech
            image="nodejs-2.svg"
            title="Node js"
            width={24}
            height={24}
            iconstyle="w-5 h-5"
            style="pl-2 pr-2 w-22 space-x-1"
          />

          <IconTech
            image="golang-2.svg"
            title="Golang"
            width={24}
            height={24}
            iconstyle="w-7 h-7"
            style="pl-2 pr-2 w-24 space-x-1"
          />
        </div>
        {/* Database */}
        <div className="w-full icon hover:cursor-pointer flex  flex-row items-center justify-start space-x-2">
          <IconTech
            image="mysql-2.svg"
            title="Mysql"
            width={24}
            height={24}
            iconstyle="w-7 h-7"
            style="pl-2 pr-2 w-22 space-x-1"
          />
        </div>
        {/* Tools */}
        <div className="w-full icon hover:cursor-pointer flex  flex-row items-center justify-start space-x-2">
          <IconTech
            image="vscode-2.svg"
            title="Vscode"
            width={24}
            height={24}
            iconstyle="w-5 h-5"
            style="pl-2 pr-2 w-22 space-x-1"
          />
          <IconTech
            image="postman-2.svg"
            title="Postman"
            width={24}
            height={24}
            iconstyle="w-5 h-5"
            style="pl-2 pr-2 w-22 space-x-1"
          />
          <IconTech
            image="git-2.svg"
            title="Git"
            width={24}
            height={24}
            iconstyle="w-5 h-5"
            style="pl-2 pr-2 w-22 space-x-1"
          />
          <IconTech
            image="github-2.svg"
            title="Github"
            width={24}
            height={24}
            iconstyle="w-5 h-5"
            style="pl-2 pr-2 w-22 space-x-1"
          />
        </div>
        {/* Services */}
        <div className="w-full icon hover:cursor-pointer flex  flex-row items-center justify-start space-x-2">
          <IconTech
            image="cloudflare-2.svg"
            title="CloudFlare"
            width={24}
            height={24}
            iconstyle="w-5 h-5"
            style="pl-2 pr-2 w-26 space-x-1"
          />
        </div>
      </div>

      {/* end Tecnologies  */}
    </div>
  );
};

export default Technologies;
