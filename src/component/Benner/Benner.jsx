import React from "react";
import Banner from "../../assets/banner.png";
import { MdOutlinePayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdWorkspacePremium } from "react-icons/md";

const Benner = ({ handleNotifOrder }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* GAMBAR BANNER */}
          <div data-aos="zoom-in">
            <img
              src={Banner}
              alt=""
              className="max-w-[700px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* DESKRIPSI BANNER */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center gap-6 sm:pt-0"
          >
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-mono"
            >
              Clasik Style Outfit Sale Diskon...
              <span className="text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                50%
              </span>
            </h1>
            <p
              data-aos="fade-up"
              className="text-xs  text-gray-800 dark:text-white tracking-wide leading-5"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              reprehenderit nobis quam officiis magnam. Dolorum quibusdam, esse
              veritatis consequuntur dolorem molestias voluptatibus,
              perspiciatis ea harum in sit nihil id voluptatem.
            </p>
            <p data-aos="fade-up" className="font-semibold">
              20 Juli - 31 Agustus, th 2025
            </p>
            <div className="font-semibold">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdWorkspacePremium className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-200 dark:bg-yellow-500 mb-1" />
                <p className="font-semibold">Kualitas Premium</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <TbTruckDelivery className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-violet-200 dark:bg-violet-500 mb-1" />
                <p className="font-semibold">Kecepatan dalam Pengiriman</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdOutlinePayments className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-200 dark:bg-green-500 " />
                <p className="font-semibold">Pembayaran DI Semua Metode</p>
              </div>
              <div>
                <button
                  onClick={handleNotifOrder}
                  className="bg-secondary hover:scale-125 duration-300 text-white py-2 px-4 rounded-full mt-4  group-hover:bg-white group-hover:text-secondary"
                >
                  Belanja Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benner;
