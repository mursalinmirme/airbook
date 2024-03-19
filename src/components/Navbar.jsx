import logo from "../assets/logo.png";
import logoTxt from "../assets/logoTxt.png";
const Navbar = () => {
  return (
    <div className="px-5 w-full fixed">
      <div className=" bg-white">
      <div className="flex justify-between items-center py-5 w-[1280px] mx-auto">
        <div className="flex items-center gap-2">
          <img className="w-6" src={logo} alt="" />
          <img className="w-24" src={logoTxt} alt="" />
        </div>
        <div>
          <ul className="flex space-x-8 items-center text-lg font-medium text-textPrimary">
            <li>Blog</li>
            <li>Offer</li>
            <li>Airlines</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <button className="bg-[#006CE4] text-white px-8 text-base font-medium py-2 rounded-[10px]">Sign in</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
