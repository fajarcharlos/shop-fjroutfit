import React from "react";
import Slider from "react-slick";

const TestimoniData = [
  {
    id: 1,
    name: "Rahmat Ramdan",
    komen:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus debitis nam vel, libero nulla sed reiciendis alias atque cumque dicta aliquid",
    img: "https://picsum.photos/101/101",
    aosDelay: "0",
  },
  {
    id: 2,
    name: "Erin Elis Elmahera",
    komen:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus debitis nam vel, libero nulla sed reiciendis alias atque cumque dicta aliquid",
    img: "https://picsum.photos/102/102",
    aosDelay: "200",
  },
  {
    id: 3,
    name: "Dian Radit Hasan",
    komen:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus debitis nam vel, libero nulla sed reiciendis alias atque cumque dicta aliquid",
    img: "https://picsum.photos/103/103",
    aosDelay: "400",
  },
  {
    id: 4,
    name: "Iwan Alamsyah",
    komen:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus debitis nam vel, libero nulla sed reiciendis alias atque cumque dicta aliquid ",
    img: "https://picsum.photos/104/104",
    aosDelay: "600",
  },
  {
    id: 5,
    name: "Idah Isamayanti",
    komen:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus debitis nam vel, libero nulla sed reiciendis alias atque cumque dicta aliquid",
    img: "https://picsum.photos/106/106",
    aosDelay: "800",
  },
];
const Testimoni = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpreed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infiniteSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="countainer">
        {/* JUDUL */}
        <div className="text-center mb-10 max-w-[500px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Para Pendapat dari Custemer FjrOutfit
          </p>
          <h1 data-aos="fade-up" className="text-5xl font-bold ">
            TESTIMONI
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ullam earum voluptates numquam? Accusantium molestias
            beatae provident consequatur cum perspiciatis!
          </p>
        </div>
        {/* ISI TESTIMONI */}
        <div>
          <Slider {...settings}>
            {TestimoniData.map((data) => (
              <div className="py-6 ">
                <div
                  data-aos="fade-up"
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-900 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 ">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 dark:text-white ">
                        {data.komen}
                      </p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light dark:text-white ">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-mono absolute top-0 right-0">
                    ..
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
