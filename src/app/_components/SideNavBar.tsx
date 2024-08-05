import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface SideNaveBarMenuType {
  title: string;
  href: string;
}

function SideNavBarMenu({ title, href }: SideNaveBarMenuType) {
  return (
    <Link
      className="font-semibold text-zinc-500 hover:text-zinc-800"
      href={href}
    >
      {title}
    </Link>
  );
}

export default function SideNavBar() {
  const menuList: SideNaveBarMenuType[] = [
    {
      title: "Home",
      href: "home",
    },
    {
      title: "Category",
      href: "category",
    },
    {
      title: "Tag",
      href: "tag",
    },
    {
      title: "About",
      href: "about",
    },
  ];

  return (
    <div
      className={`${poppins.className} hidden md:flex flex-col pt-10 items-center w-60 bg-zinc-100`}
    >
      <div className="flex justify-center items-center w-20 h-20 mb-16 rounded-full bg-slate-200">
        profile
      </div>
      <div className="flex flex-col gap-2 w-full pl-10">
        {menuList.map((menu) => (
          <SideNavBarMenu {...menu} />
        ))}
      </div>
    </div>
  );
}
