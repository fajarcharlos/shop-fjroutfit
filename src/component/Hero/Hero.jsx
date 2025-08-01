import React from "react";
import Foto1 from "../../assets/shop.png";
import Foto2 from "../../assets/jaket.png";
import Foto3 from "../../assets/panel.png";
import Foto4 from "../../assets/jasujan.png";
import Slider from "react-slick";

const FotoList = [
  {
    img: Foto1,
    title: "Flesh Sale! 10% D'July all Pakaian",
    desk: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quas, suscipit consequatur debitis veniam quibusdam!",
  },
  {
    img: Foto2,
    title: "Upto 50% off on all Jaket Coach",
    desk: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quas, suscipit consequatur debitis veniam quibusdam!",
  },
  {
    img: Foto3,
    title: "Upto 30% off on all Kemeja Panel Pria",
    desk: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quas, suscipit consequatur debitis veniam quibusdam!",
  },
  {
    img: Foto4,
    title: "Upto 25% off on all Jas Hujan",
    desk: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quas, suscipit consequatur debitis veniam quibusdam!",
  },
];
const Hero = ({ handleNotifOrder }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpreed: 4000,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className=" relative overflow-hidden min-h-[500px] sm:min-h-[500px] bg-gray-100 flex justify-center items-center dark:bg-gray-900 dark:text-white duration-200">
      {/* MOTIF PADA BACKGROUNYA */}
      <div className="h-[550px] w-[550px] bg-primary/40 absolute -top-1/4 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* ISI SEBUAH HERO */}
      <div className="container pb-8 sm:pb-0 ">
        <Slider {...settings}>
          {FotoList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* HERO KONTEN */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold "
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm "
                  >
                    {data.desk}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleNotifOrder}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-90 duration-300 text-white py-2 px-4 rounded-full"
                    >
                      Belanja Sekarang
                    </button>
                  </div>
                </div>
                {/* HERO GAMBAR */}
                <div
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="order-1 sm:order-2"
                >
                  <div className="relative  z-10 ">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[200px] h-[200px] sm:h-[350px] sm:w-[350px] sm:scale-100 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
