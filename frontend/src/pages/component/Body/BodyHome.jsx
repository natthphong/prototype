import { React, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./bdhome.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
export default function BodyHome() {
  const [openform, setOpenform] = useState(false);
  const [confirm, setconfirm] = useState(false);
 

  const navigator = useNavigate();

  const next = (e) => {
    e.preventDefault();
    
    if (confirm) {
      toast("รอผลวิเคราะห์รอสักครู่!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setTimeout(function () {
        navigator("/result");
      }, 1200);
    } else {
      alert("ยังไม่ยินยอมเปิดเผยข้อมูล");
    }
  };

  return (
    <div className="containerBody">
      <Toaster position="top-center" reverseOrder={false} />
      {openform && (
        <div className="stateform">
          <div className="iconsetting">
            <ClearIcon
              className="iconclear1"
              size="large"
              onClick={(e) => {
                setOpenform(false);
              }}
            />
          </div>
          <div className="boxClass">
            <form action="" method="post" onSubmit={next}>
              <div className="center">
                <label htmlFor="">กรอกข้อมูลเพื่อนำไปวิเคราะห์</label>
              </div>
              <div className="row">
                <input
                  required
                  type="text"
                  id=""
                  name=""
                  placeholder="ชื่อจริง"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="นามสกุล"
                  required
                />
                <label htmlFor="">วันเกิด</label>
                <input
                  type="date"
                  name=""
                  id=""
                  required
                  placeholder="วัน/เดือน/ปีเกิด"
                />
              </div>
              <div className="row">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="น้ำหนัก"
                  required
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="ส่วนสูง"
                  required
                />
                <label htmlFor="">ความถี่ต่อสัปดาห์</label>
                <select id="" name="">
                  <option value="volvo">น้อยกว่า2ครั้ง</option>
                  <option value="saab">2-4ครั้ง</option>
                  <option value="fiat">5-6ครั้ง</option>
                  <option value="audi">7ครั้ง</option>
                </select>
              </div>
              <div className="row">
                <label htmlFor="">โรคประจำตัว</label>
                <select id="" name="">
                  <option value="volvo">หอบหื่น</option>
                  <option value="saab">โรคอ้วน</option>
                  <option value="fiat">โรคเก๊าท์</option>
                  <option value="audi">อื่นๆ</option>
                </select>
                <label htmlFor="">เวลาในการออกต่อวัน</label>
                <select id="" name="">
                  <option value="volvo">น้อยกว่า15นาที</option>
                  <option value="saab">30-45นาที</option>
                  <option value="fiat">1-2ชั่วโมง</option>
                  <option value="audi">มากกกว่า2ชั่วโมง</option>
                </select>
                <label htmlFor="">อุปกรณ์</label>
                <select id="" name="">
                  <option value="audi">ไม่มีอุปกรณ์</option>
                  <option value="volvo">จักรยาน</option>
                  <option value="saab">เชือก</option>
                  <option value="fiat">ที่ยกน้ำหนัก</option>
                  <option value="audi">อื่นๆ</option>
                </select>
              </div>
              <div className="row">
                <input
                  required
                  type="text"
                  name=""
                  id=""
                  placeholder="น้ำหนักที่ต้องการลด"
                />
                <label htmlFor="">วันที่เริ่มออก</label>
                <input required type="date" name="" id="" />
                <label htmlFor="">วันที่จะหยุด</label>
                <input required type="date" name="" id="" />
              </div>
              <div className="sport">
                <label htmlFor="">ประเภทการออกกำลังกายที่ไม่ชอบ</label>

                <div className="row">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">วิ่ง</label>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">เดิน-เดินชัน</label>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">ว่ายน้ำ</label>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">กระโดด</label>
                </div>
                <div className="row">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">ยกน้ำหนัก</label>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">เต้นแอโรบิค</label>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">ปั่นจักรยาน</label>
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">อื่นๆ</label>
                </div>
              </div>

              <div className="setbtn">
                <div className="row">
                  <input
                    type="checkbox"
                    name=""
                    onChange={(e) => {
                      setconfirm(!confirm);
                    }}
                  />
                  <label htmlFor="">ข้าพเจ้ายินยอมเปิดเผยข้อมูล</label>
                </div>
                <input
                  type="submit"
                  className="btnok2"
                  value="เริ่มวิเคราะห์"
                />
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="bodyincon">
        <div className="left">
          <h1>ออกกำลังกายแล้วน้ำหนักไม่ลดใช่ไหม ?</h1>

          <div className="desc">
            <p>
              เราจะแนะนำการออกกำลังกายที่เหมาะสมกับคุณขึ้นมาจากสรีระร่างกายของคุณ
            </p>
            <p>เราจะทำตารางความถี่ที่เหมาะสมกับการออกกำลังกายของคุณขึ้นมา</p>
            <p>คอยตามติดเพื่อเพิ่มประสิทธิ์ภาพในการลดความอ้วนของคุณ</p>
          </div>

          <button
            className="btnok"
            onClick={(e) => {
              setOpenform(true);
            }}
          >
            ลองเลย
          </button>
        </div>
        <div className="right">
          <img src="./yim.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
