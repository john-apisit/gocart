import Image from "next/image";
import TopMenu from "./TopMenu";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <div className="border-b-2 border-gray-200">
      <div className="flex justify-between items-center max-w-5xl mx-auto py-4">
        <div>
          <Image src="/logo/GoCart.png" alt="GoCart" width={100} height={100} />
        </div>
        <TopMenu />
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
