import { useState } from "react";
import { InputField } from "../../../global/fields/InputField";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const OfferPrice = ({ active, setActive }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [offer, setOffer] = useState(0);

  const handleClick = (e) => {
    if (setActive) {
      setActive(false);
    }
  };

  return (
    <div
      className={`${
        active ? "fixed top-0 left-0 z-40 w-full h-screen" : "hidden"
      }`}
    >
      <div className="fixed bg-slate-800 opacity-70 w-full h-screen"></div>
      <div className="absolute top-0 left-0 w-full flex justify-center items-center h-full px-5">
        <div className="bg-white w-full max-w-2xl p-10 rounded-3xl">
          <div className="flex justify-between items-center mb-8">
            <p className="text-xl font-600">Offer Price</p>
            <div
              className="bg-cape-light text-white p-2 rounded-full hover:bg-red-700 cursor-pointer"
              onClick={handleClick}
            >
              <GlobalIcon type="exit" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <InputField
              type="text"
              label="Enter Username.."
              name="username"
              placeholder="iamalexninov"
              setValues={setUsername}
            />
            <InputField
              type="email"
              label="Enter Email.."
              name="email"
              placeholder="alex@gmail.com"
              setValues={setEmail}
            />
            <InputField
              type="tel"
              label="Enter Phone.."
              name="phone"
              placeholder="+359 896 35 9415"
              setValues={setPhone}
            />
            <InputField
              type="number"
              label="Enter Offer.."
              name="offer"
              placeholder="$15,000"
              setValues={setOffer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
