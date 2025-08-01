import React from "react";
import FooterLogo from "../../assets/logo-fo.png";
import FooterBanner from "../../assets/bgsaub.jpg";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineWhatsapp } from "react-icons/md";

const BgFooter = {
  backgroundImage: `url(${FooterBanner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Tentang",
    link: "/#tentang",
  },
  {
    title: "Kontak",
    link: "/#kontak",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div style={BgFooter} className="text-white ">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-2 pb-35 pt-5">
          {/* ISI FOOTER */}
          <div className="py-8 px-3">
            <img src={FooterLogo} alt="" className="max-w-[200px]" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              nesciunt fugiat culpa obcaecati enim, sunt veniam animi, expedita
              neque impedit odit suscipit earum totam, vero consectetur
              consequatur molestiae libero quod.
            </p>
          </div>
          {/* LINK FOOTER */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-9 px-2">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Importat_Link
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((links) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={links.title}
                      >
                        <span>{links.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-9 px-8">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((links) => (
                      <li
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                        key={links.title}
                      >
                        <span>{links.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* SOSMED */}
              <div>
                <div className="flex items-center gap-8 mt-8">
                  <a href="#">
                    <FaInstagram className="text-3xl  hover:text-primary hover:translate-x-1 duration-300 " />
                  </a>
                  <a href="#">
                    <MdOutlineEmail className="text-3xl  hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                  <a href="#">
                    <FaYoutube className="text-3xl  hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl  hover:text-primary hover:translate-x-1 duration-300" />
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-5">
                    <FaLocationArrow />
                    <p>Cicaheum, Kota Bandung</p>
                  </div>
                  <div className="flex items-center gap-5 mt-4">
                    <MdOutlineWhatsapp />
                    <p>+62 895-9731-2291</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
