import Image from "next/image";
import { Button } from "../../atoms";

const Footer = () => {
  return (
    <div className="bg-gray-950 w-full mt-36 z-10 relative">
      <div className="absolute inset-0 h-full w-full z-0 bg-gray-950 opacity-10">
        <Image
          src={`./icons/box2.svg`}
          width={96}
          height={43}
          alt="html"
          className="w-screen h-screen z-0"
        />
      </div>
      <div className="max-w-[1264px] bg-gray-950   mx-auto mt-[150px] bg pt-[105px]  pb-8 z-10 text-white px-4">
        <div className="flex flex-col sm:flex-row justify-start items-start">
          {/* Left */}
          <div className="s-full  sm:w-6/12 flex flex-col space-y-24">
            <div className="flex flex-col justify-start space-y-10">
              <h3 className="text-[49px]/12 font-extrabold z-10">
                I’m available for your project. Let’s align on goals and tech."
              </h3>
              <p className="text-xl text-gray-300">
                “Exceptional full-stack development by Tofan. 100% recommend for
                complex projects bug-free delivery and responsive teamwork.”
              </p>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <Image
                src={`/picture.png`}
                width={94}
                height={94}
                alt="html"
                className="z-30 border-2 rounded-full border-gray-400"
              />
              <div className="flex flex-col justify-center space-y-1">
                <h3 className="text-2xl font-bold">Tofan</h3>
                <h3 className="text-gray-600">Full Stack Engineer</h3>
              </div>
            </div>
          </div>

          {/* Right  */}
          <div className="w-full sm:w-6/12 sm:pl-4 pt-4 mt-8 sm:mt-0">
            <div className="flex flex-col sm:pl-4 space-y-7">
              <input
                type="text"
                placeholder="Email"
                className="bg-gray-800 rounded-md p-2 ring-0 outline-indigo-50 text-gray-400 w-full h-[50px] z-10  text-sm px-3"
              />
              <textarea
                className="bg-gray-800 rounded-md p-2 ring-0 outline-indigo-50 text-gray-400 w-full h-[200px] z-10 text-sm px-3"
                placeholder="Message"
              ></textarea>
              <Button
                text="Send"
                style="bg-white text-gray-900 py-2 h-15 rounded-full font-bold"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row mt-48">
          <div className="flex flex-col w-full sm:w-6/12 space-y-16">
            <h3 className="text-4xl">
              Ready to start? Let’s discuss your project in a free call.
            </h3>
            <Button
              text="Free strategy call inside"
              style="bg-[#FFB200] text-gray-900 py-2 h-15 rounded-full font-bold"
            />
          </div>
          <div className="flex justify-center sm:justify-end items-center sm:items-end w-full sm:w-6/12 mt-4 sm:mt-0">
            <p className="text-gray-400 text-xs">I'm Base in Indonesia</p>
          </div>
        </div>

        <p className="text-center w-full mt-32 text-xs text-gray-400">
          @tofankamil.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
