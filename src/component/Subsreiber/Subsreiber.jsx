import React from "react";
import BgSub from "../../assets/bgsaub.jpg";

const BannerImg = {
  backgroundImage: `url(${BgSub})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Subsreiber = () => {
  return (
    <div
      data-aos="zomm-in"
      className="bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="countainer backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Dapatkan Pemberitahuan Tentang Produk Baru
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Masukan Email Anda"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Subsreiber;
