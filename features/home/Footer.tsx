import Image from "next/image";
import { MenuItem } from "./TopMenu";
import Link from "next/link";

const companyMenu: MenuItem[] = [
  {
    id: "home",
    path: "/",
    title: "Home",
  },
  {
    id: "about",
    path: "/about",
    title: "About Us",
  },
  {
    id: "contact",
    path: "/contact",
    title: "Contact Us",
  },
  {
    id: "privacy",
    path: "/privacy",
    title: "Privacy Policy",
  },
  {
    id: "terms",
    path: "/terms",
    title: "Terms of Service",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="border-b border-gray-200 pt-12">
        {/* Menu */}
        <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto py-8 ">
          <div className="col-span-2 space-y-4">
            <img
              src="/logo/J Shop.png"
              alt="J Shop"
              className="h-10 object-cover"
            />
            <p className="text-gray-500">
              J Shop is a platform for buying and selling products online.
            </p>
          </div>
          {/* Company Menu */}
          <div>
            <h3 className="pb-4 font-bold">Company</h3>
            <div className="text-gray-500 flex flex-col text-sm gap-2">
              {companyMenu.map((m) => (
                <Link href={m.path} key={m.id}>
                  {m.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="pb-4 font-bold">Get in touch</h3>
            <div className="text-gray-500 flex flex-col text-sm gap-2">
              <p>+66886945232</p>
              <p>john.apisits@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copy Right */}
      <div className="flex items-center justify-center text-gray-400 text-sm py-4">
        <p>Copyright 2025 J Shop. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
