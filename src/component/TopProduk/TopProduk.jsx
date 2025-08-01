import React from "react";
import top1 from "../../assets/top1.png";
import top2 from "../../assets/top2.png";
import top3 from "../../assets/top3.png";
import { FaStar } from "react-icons/fa";

const ProdukTop = [
  {
    id: 1,
    img: top1,
    title: "Kemeja Panel Kotak-Kotak",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, nostrum similique quasi dolorum, tempora assumenda minus molestiae aspernatur excepturi maiores laudantium. Ipsa odit id quo dolorum aliquid hic et fuga?",
  },
  {
    id: 2,
    img: top2,
    title: "Kaos Polos Putih Premium ",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, nostrum similique quasi dolorum, tempora assumenda minus molestiae aspernatur excepturi maiores laudantium. Ipsa odit id quo dolorum aliquid hic et fuga?",
  },
  {
    id: 3,
    img: top3,
    title: "Celana Chinos Abu-abu ",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, nostrum similique quasi dolorum, tempora assumenda minus molestiae aspernatur excepturi maiores laudantium. Ipsa odit id quo dolorum aliquid hic et fuga?",
  },
];
const TopProduk = ({ handleNotifOrder }) => {
  return (
    <div>
      <div className="container">
        {/* JUDUL */}
        <div className="text-left mb-20 font-mono">
          <p
            data-aos="fade-up"
            className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            TOP Produk Terpopuler
          </p>
          <h1 data-aos="fade-up" className="text-5xl font-bold ">
            BAST PRODUK
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs  text-gray-800 dark:text-white"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a
            culpa, ex nobis in odit laudantium animi totam, at corporis
            perferendis expedita minus molestiae consectetur accusamus
            distinctio, vel nostrum fugiat. Repellat sit, sint exercitationem
            quasi corrupti sapiente explicabo reiciendis nostrum.
          </p>
        </div>

        {/* ISI TOP PRODUK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 gap-20 place-items-center ">
          {ProdukTop.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-900  dark:text-white hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* FOTO PRODUK */}
              <div className="h-[210px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[300px]  block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* DESKRIPSI PRODUK */}
              <div className=" p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className=" text-yellow-500" />
                  <FaStar className=" text-yellow-500" />
                  <FaStar className=" text-yellow-500" />
                  <FaStar className=" text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="  text-gray-800 dark:text-white group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.desk}
                </p>
                <button
                  onClick={handleNotifOrder}
                  className="bg-secondary hover:scale-125 duration-300 text-white py-1 px-4 rounded-full mt-4  group-hover:bg-white group-hover:text-secondary"
                >
                  Belanja
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduk;
