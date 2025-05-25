import Image from "next/image";
import { Label } from "../../atoms";
import { Technologies } from "../../molecules";

const index = () => {
  return (
    <div className="relative">
      <div className="max-w-[1264px] px-4 sm:mx-auto mt-[150px] z-10 bg">
        <Label text="Experience" />

        {/* Detail Experience */}
        <div className="w-full flex flex-row  justify-between items-start mt-2">
          <div className="w-3/12 ">
            <div className="primary-color text-sm">2018 - Present</div>
            <h3 className="text-lg font-semibold">Working</h3>
          </div>
          <div className="w-9/12 sm:w-6/12">
            <h3
              className="font-bold text-[35px] text-right "
              style={{ lineHeight: "120%" }}
            >
              PT Beonet International Network
            </h3>
            <p className="primary-color text-[16px] text-right">
              Beonet is a company engaged in multi-level marketing. Selling
              health, beauty, and fertiliser products using natural herbal
              ingredients. Currently, there are more than 5,000 users joined and
              10 stockist spread across Indonesia.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-start p-2 my-16">
          <Image src={`/dashboard.png`} width={800} height={800} alt="html" />
          {/* Key features  */}
          <div className="w-full sm:w-4/12 p-2">
            <Label text=" Key features " bg styleBgStyle="bg-[#1B1B1B]" />
            <ul className=" text-sm pl-2 py-4 space-y-2">
              <li className="w-full  flex flex-row items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Multilevel marketing realtime system</span>
              </li>
              <li className="w-full  flex flex-row items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span> E-ecommerce</span>
              </li>
              <li className="w-full  flex flex-row items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span> E-learning</span>
              </li>
              <li className="w-full  flex flex-row items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span> Chat</span>
              </li>
              <li className="w-full  flex flex-row items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span> User, Stokist, Admin Dashboard</span>
              </li>
              <li className="w-full  flex flex-row items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span> Integrate to whatsapp for notification</span>
              </li>
              <li className="w-full  flex flex-row items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span> Payment gateway </span>
              </li>
              <li className="w-full  flex flex-row items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Cooperative Application </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-start items-start mt-14 z-30 space-x-20">
          {/* end Key features */}
          {/* Key Responbilities  */}
          <div className="w-full sm:w-6/12 p-2">
            <Label
              text=" Goals  "
              bg
              styleBgStyle="bg-[#A9FF08] text-gray-900"
            />
            <ul className=" text-sm pl-2 py-4 space-y-2">
              <li className="w-full  flex flex-row items-center space-x-2">
                <span>
                  Ensuring that registered members receive bonuses for uplines
                  or sponsoring members according to the marketing plan
                  accurately and in real-time, and directly receive
                  notifications via WhatsApp.{" "}
                </span>
              </li>
              <li className="w-full  flex flex-row items-center space-x-2">
                <span>
                  {" "}
                  The bonus available in the cooperative application can be
                  withdrawn and sent in real-time to the e-wallet in the
                  multilevel marketing application.
                </span>
              </li>
              <li className="w-full  flex flex-row items-center space-x-2">
                <span>
                  {" "}
                  Ensuring that the application remains stable and secure from
                  system disruptions.
                </span>
              </li>
            </ul>
          </div>
          {/* end Key features  */}
          {/* Key features Responbilities  Tecnologies */}
          <Technologies />

          {/* End Key features Responbilities  Tecnologies */}
        </div>
      </div>
    </div>
  );
};

export default index;
