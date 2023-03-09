import React from "react";
import "./de.css";
export default function Deresu() {
  return (
    <div className="deresucontainer">
      <div className="content-deta">
        <h1>ผลลัพธ์จากการออก : 1 วัน</h1>
        <div className="row-gap">
        <div className="row-z">
          <h2>
            น้ำหนักเดิม
          </h2>
          <h1 className="box"> 80</h1>
          </div>

          <div className="row-z">
          <h2>
          น้ำหนักปัจจุบัน
          </h2>
          <h1 className="box"> 80</h1>
          </div>

        </div>


          <div className="restuasd">
          <h1>ผลสรุปการออกกำลังกาย</h1>
          <h2 className="boxzz">เต้นแอโรบิค : 1 ครั้ง</h2>
          <h2 className="boxzz">ยืดร่างกาย : 1 ครั้ง</h2>
          </div>

          <h3 className="testh3">คุณไม่พอใจกับผลลัพธ์ ?</h3>

      </div>
    </div>
  );
}
