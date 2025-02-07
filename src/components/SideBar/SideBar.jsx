import { ChevronLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import logo from "./../../assets/images/logo.png";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SideBar() {
  const menuItems = [
    { title: "الصفحة الرئيسية", href: "/الرئيسية" },
    { title: "المتخصصين", href: "/المتخصصين" },
    { title: "المستفيدين", href: "/المستفيدين" },
    { title: "المواعيد", href: "/المواعيد" },
    { title: "الجلسات", href: "/الجلسات" },
    { title: "الاعلانات", href: "/الاعلانات" },
    { title: "الدفع", href: "/الدفع" },
    { title: "الإعدادات", href: "/الإعدادات" },
  ];

  const location = useLocation(); // Get current path

  return (
    <div
      dir="rtl"
      className="flex h-screen w-[240px] flex-col bg-[#1F77BC] text-white rounded-l-[20px] overflow-hidden"
    >
      <div className="flex h-14 items-center border-b  border-[#1F77BC] py-10 mb-2">
        <img src={logo} alt="logo" />
      </div>
      <nav className="flex-1">
        {menuItems.map((item, index) => {
          const isActive = decodeURIComponent(location.pathname) === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center justify-between py-2 px-4",
                isActive ? "bg-[#B2CEF2] text-[#1F77BC]" : "text-white",
                index !== menuItems.length - 1 && "border-b border-white/10"
              )}
            >
              {item.title}
              <ChevronLeft className="h-4 w-4" />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default SideBar;
