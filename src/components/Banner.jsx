import bannerImg from "../assets/banner.png";
import search from "../assets/search.png";
const Banner = () => {
  return (
    <div
      className="w-full h-[550px]"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundPosition: "center",
        backgroundPositionY: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center h-full w-[1280px] mx-auto">
        <div className="flex flex-col w-full">
          <h3 className="text-4xl font-medium text-white ml-16">
            Welcome to{" "}
            <span className="text-[#006CE4] font-semibold">AirBook</span>
          </h3>
          <div className="w-full bg-white mt-4 px-16 py-16 rounded-2xl">
            <div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <div className="px-3 py-2 flex items-center gap-2 rounded-md bg-[#EBF0F5]">
                    <input type="radio" name="" id="" />
                    <p className="">One Way</p>
                  </div>
                  <div className="px-3 py-2 flex rounded-md items-center gap-2 bg-[#006CE4] text-white">
                    <input type="radio" name="" id="" />
                    <p>Round Trip</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <select
                    className="border px-2 py-2 bg-[#EBF0F5] rounded-md"
                    value=""
                  >
                    <option name="" id="">
                      1 Traveller
                    </option>
                    <option name="" id="">
                      2 Traveller
                    </option>
                    <option name="" id="">
                      4 Traveller
                    </option>
                  </select>
                  <select
                    className="border px-2 py-2 bg-[#EBF0F5] rounded-md"
                    value=""
                  >
                    <option name="" id="">
                      Economy
                    </option>
                    <option name="" id="">
                      Business
                    </option>
                    <option name="" id="">
                      Tour
                    </option>
                  </select>
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="mt-5 grid grid-cols-4 gap-3">
                <div className="p-1.5 flex border items-center rounded-xl">
                  <div>
                    <h3 className="text-lg font-semibold px-2">DAC</h3>
                  </div>
                  <div className="pl-2 border-l">
                    <p className="text-base font-semibold">Dhaka</p>
                    <p className="text-sm">Hazrat Shahjalal Internatio</p>
                  </div>
                </div>
                <div className="p-1.5 flex border items-center rounded-xl">
                  <div>
                    <h3 className="text-lg font-semibold px-2">Cxb</h3>
                  </div>
                  <div className="pl-2 border-l">
                    <p className="text-base font-semibold">{`Cox's Bazar`}</p>
                    <p className="text-sm">Cox’s Bazar international</p>
                  </div>
                </div>
                <div className="p-1.5 flex border items-center rounded-xl">
                  <div>
                    <h3 className="text-lg font-semibold px-2">Syt</h3>
                  </div>
                  <div className="pl-2 border-l">
                    <p className="text-base font-semibold">Sylhet</p>
                    <p className="text-sm">Sylhet International</p>
                  </div>
                </div>
                <div className="p-1.5 flex border items-center rounded-xl">
                  <div>
                    <h3 className="text-lg font-semibold px-2">Kon</h3>
                  </div>
                  <div className="pl-2 border-l">
                    <p className="text-base font-semibold">Khulna</p>
                    <p className="text-sm">Khulna International</p>
                  </div>
                </div>
              </div>
              <div className="flex h-full mt-4">
                <button className="bg-[#FFB700] h-14 w-12 rounded-xl flex justify-center items-center">
                  <img src={search} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
