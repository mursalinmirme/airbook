import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
const Featured = () => {
  return (
    <div className="w-[1280px] mx-auto mt-20">
      <h3 className="text-3xl font-semibold">Featured Destinations</h3>
      <div className="grid grid-cols-3 gap-8 mt-5 mb-10">
        <div className="shadow-lg px-4 py-5">
          <img className="w-full" src={card1} alt="" />
          <h3 className="text-xl font-semibold mt-3">
            Stopover opportunity in İstanbul with Turkish Airlines
          </h3>
          <div className="text-center">
            <button className="bg-[#FFB700] px-16 mt-3 h-12 rounded-lg font-medium">
              View More
            </button>
          </div>
        </div>
        <div className="shadow-lg px-4 py-5">
          <img className="w-full" src={card2} alt="" />
          <h3 className="text-xl font-semibold mt-3">
            Discover the timeless city with Touristanbul of Turkish Airlines
          </h3>
          <div className="text-center">
            <button className="bg-[#FFB700] px-16 mt-3 h-12 rounded-lg font-medium">
              View More
            </button>
          </div>
        </div>
        <div className="shadow-lg px-4 py-5">
          <img className="w-full" src={card3} alt="" />
          <h3 className="text-xl font-semibold mt-3">
            the best of Abu Dhabi with exclusive Etihad Airways!
          </h3>
          <div className="text-center">
            <button className="bg-[#FFB700] px-16 mt-3 h-12 rounded-lg font-medium">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
