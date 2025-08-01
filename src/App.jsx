import React from "react";
import Aos from "aos";
import "../aos.css";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Produk from "./component/Produk/Produk";
import TopProduk from "./component/TopProduk/TopProduk";
import Benner from "./component/Benner/Benner";
import Subsreiber from "./component/Subsreiber/Subsreiber";
import Testimoni from "./component/Testimoni/Testimoni";
import Footer from "./component/Footer/Footer";
import Popup from "./component/Popup/Popup";

const App = () => {
  const [notifOrder, setNotifOrder] = React.useState(false);

  const handleNotifOrder = () => {
    setNotifOrder(!notifOrder);
  };

  React.useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200">
      <Navbar handleNotifOrder={handleNotifOrder} />
      <Hero handleNotifOrder={handleNotifOrder} />
      <Produk />
      <TopProduk handleNotifOrder={handleNotifOrder} />
      <Benner handleNotifOrder={handleNotifOrder} />
      <Subsreiber />
      <Produk />
      <Testimoni />
      <Footer />
      <Popup notifOrder={notifOrder} setNotifOrder={setNotifOrder} />
    </div>
  );
};

export default App;
