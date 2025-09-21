import Link from "next/link";

export type MenuItem = {
  id: string;
  path: string;
  title: string;
};

const menuList: MenuItem[] = [
  {
    id: "1",
    path: "/",
    title: "Home",
  },
  {
    id: "2",
    path: "/shop",
    title: "Shop",
  },
  {
    id: "3",
    path: "/about",
    title: "About Us",
  },
  {
    id: "4",
    path: "/contact",
    title: "Contact",
  },
];

const TopMenu = () => {
  return (
    <div className="flex gap-8 justify-center items-center font-medium text-gray-600">
      {menuList.map((m) => (
        <Link href={m.path} key={m.id} className="hover:text-orange-500 transition-all duration-100 hover:border-b">
          {m.title}
        </Link>
      ))}
    </div>
  );
};

export default TopMenu;
