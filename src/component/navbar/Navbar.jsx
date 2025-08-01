import React from "react";
import Logo from "../../assets/logo-fo.png";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
import { PiChartLineDownBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

const Menu = [
  {
    id: 1,
    name: "Promo",
    link: "#promo",
  },
  {
    id: 2,
    name: "Tentang_Kami",
    link: "#tentang",
  },
  {
    id: 3,
    name: "Panduan",
    link: "#panduan",
  },
  {
    id: 4,
    name: "Kontak",
    link: "#kontak",
  },
];

const Kategoris = [
  {
    id: 1,
    name: " Pakaian Pria",
    link: "#pria",
  },
  {
    id: 2,
    name: "Palaian Wanita",
    link: "#wanita",
  },
  {
    id: 3,
    name: "Pakaian Anak-Anak",
    link: "#anak",
  },
  {
    id: 4,
    name: "Atasan",
    link: "#atas",
  },
  {
    id: 5,
    name: "Bawahan",
    link: "#bawah",
  },
  {
    id: 6,
    name: "Pakain Dalam",
    link: "#dalam",
  },
  {
    id: 7,
    name: "Outerwear",
    link: "#outer",
  },
  {
    id: 8,
    name: "Pakain Olahraga",
    link: "#fashion",
  },
  {
    id: 9,
    name: "Pakain Muslim",
    link: "#fashion",
  },
  {
    id: 10,
    name: "Aksesoris",
    link: "#aksesoris",
  },
];

const Navbar = ({ handleNotifOrder }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* MENU ATAS */}
      <div className="bg-primary/40 ">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className=" flex gap-4">
              <img
                src={Logo}
                alt="logo"
                width={400}
                className="w-20 uppercase "
              />
            </a>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Pencarian"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-400 px-4 py-1 focus:outline-none focus:border-1 focus:border-primar dark:border-gray-300 dark:bg-gray-800"
              />
              <IoSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => handleNotifOrder()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1.5 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Oredr
              </span>
              <span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </span>
            </button>

            <div>
              <MdAccountCircle className="w-9 h-9" />
            </div>
            {/*MODE GELAP*/}
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>

      {/* MENU BAWAH*/}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          <li className="inline-block px-4 hover:text-primary duration-200">
            <a href="#home" className="flex items-center gap=[2px] py-2">
              Beranda
            </a>
          </li>
          <li className="group relative cursor-pointer inline-block px-4 hover:text-primary duration-200">
            <a href="#kategori" className="flex items-center gap=[2px] py-2">
              Kategri
              <IoMdArrowDropdown />
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black  dark:border-gray-300 dark:bg-gray-800 dark:text-white">
              <ul>
                {Kategoris.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="inline-block px-4 hover:text-primary duration-200">
            <a href="#treding" className="flex items-center gap=[2px] py-2">
              Trending
              <PiChartLineDownBold />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
