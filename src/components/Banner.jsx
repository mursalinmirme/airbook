import bannerImg from "../assets/banner.png";
const Banner = () => {
    return (
        <div className="w-full h-[600px]" style={{backgroundImage: `url(${bannerImg})`, backgroundPosition: 'center', backgroundPositionY: 'bottom', backgroundSize: 'cover'}}>
            <div className="flex items-center h-full w-[1280px] mx-auto">
                <div className="flex flex-col w-full">
                <h3 className="text-4xl font-medium text-white">Welcome to <span className="text-[#006CE4] font-semibold">AirBook</span></h3>
                <div className="w-full h-40 bg-white mt-4 px-20 py-10">
                    <div>
                        <div>
                            <div className="flex gap-3">
                            <div className="p-3 flex items-center gap-2 rounded-xl bg-[#EBF0F5]">
                                <input type="radio" name="" id="" />
                                <p>One Way</p>
                                </div>
                            <div className="p-3 flex rounded-xl items-center gap-2 bg-[#EBF0F5]">
                                <input type="radio" name="" id="" />
                                <p>One Way</p>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;