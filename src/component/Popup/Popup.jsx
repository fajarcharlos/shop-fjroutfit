import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ notifOrder, setNotifOrder }) => {
  return (
    <>
      {notifOrder && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* JUDUL */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Belanja Sekarang</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setNotifOrder(false)}
                  />
                </div>
              </div>
              {/* ISI POPUP */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Masukan Nama"
                  className="w-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-0 py-1 mb-4"
                />
                <input
                  type="email"
                  placeholder="Masukan Email"
                  className="w-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-0 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Masukan Alamat Anda"
                  className="w-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-0 py-1 mb-4"
                />
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-90 duration-200 text-white py-1.5 px-4 rounded-full ">
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
