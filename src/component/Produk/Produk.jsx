import React from "react";
import gambar1 from "../../assets/jaket2.jpg";
import gambar2 from "../../assets/kotak2.jpg";
import gambar3 from "../../assets/polos.jpg";
import gambar4 from "../../assets/celanabahan.jpg";
import gambar5 from "../../assets/setpria.jpg";
import { FaStar } from "react-icons/fa";

const ProdukData = [
  {
    id: 1,
    img: gambar1,
    title: "Jaket Coach",
    reting: "50%",
    harga: "Rp. 298.000",
    diskon: "Rp. 198.000",
    aosDelay: "0",
  },
  {
    id: 2,
    img: gambar2,
    title: "Kemeja Panel Pria",
    reting: "30%",
    harga: "Rp. 118.000",
    diskon: "Rp. 82.900",
    aosDelay: "200",
  },
  {
    id: 3,
    img: gambar3,
    title: "Kaos Polos 3pcs",
    reting: "25%",
    harga: "Rp. 133.900",
    diskon: "Rp. 100.425",
    aosDelay: "400",
  },
  {
    id: 4,
    img: gambar4,
    title: "Celana Bahan Hitam ",
    reting: "20%",
    harga: "Rp. 108.000",
    diskon: "Rp. 86.400",
    aosDelay: "600",
  },
  {
    id: 5,
    img: gambar5,
    title: "Set Pakaian Cesual ",
    reting: "40%",
    harga: "Rp. 368.090",
    diskon: "Rp. 220.854",
    aosDelay: "800",
  },
];

const Produk = () => {
  return (
    <div className="mt-14 mb-12 font-mono  ">
      <div className="container ">
        {/* JUDUL */}
        <div className="text-center mb-10 max-w-[500px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Produk Rekomendasi
          </p>
          <h1 data-aos="fade-up" className="text-5xl font-bold ">
            PRODUK
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-800 dark:text-white"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
            consequuntur minima quia fuga dolore quo doloremque, harum numquam.
            Saepe asperiores necessitatibus autem corrupti quibusdam maiores sit
            esse..
          </p>
        </div>

        {/* ISI PRODUK */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProdukData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-1 justify-center"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[100] w-[100] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-800 dark:text-white">
                    <span className="line-through">{data.harga}</span>

                    <span className="ml-3">{data.diskon}</span>
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.reting}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-secondary cursor-pointer text-center bg-gradient-to-r from-primary to-secondary hover:scale-90 duration-200 text-white py-1.5 px-4 rounded-full">
              Lebih Banyak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produk;
