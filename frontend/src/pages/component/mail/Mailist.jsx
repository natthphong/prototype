import { React, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./mail.css";

export default function Mailist() {
  const [email, setemail] = useState("");

  const clear = (e) => {
    e.preventDefault();
    toast(`ยินดีด้วยเราจะส่งข้อมูลไปทางเมล \n${email} ของคุณ`, {
      icon: "👏",
    });
      setemail("");
  
  };

  return (
    <div className="mail" id="contract">
      <Toaster position="top-center" reverseOrder={false} />

      <h1 className="mail-title">ข่าวสารเกี่ยวกับการออกกำลังกาย</h1>
      <p>สมัครเมลของคุณเข้ามาได้เลย</p>
      <div className="mail-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <button className="mailButton" onClick={clear}>
          Subscribe
        </button>
      </div>
    </div>
  );
}
