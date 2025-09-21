import Image from "next/image";
import TopMenu from "./TopMenu";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <div className="border-b-2 border-gray-200 fixed top-0 left-0 right-0 bg-white/90 z-50 ">
      <div className="flex justify-between items-center max-w-5xl mx-auto py-4">
        <div>
          <Image src="/logo/J Shop.png" alt="J Shop" width={100} height={33} />
        </div>
        <TopMenu />
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
