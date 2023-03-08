import { React, useState } from "react";
import "./bodyRe.css";
import { format } from "date-fns";
import ClearIcon from "@mui/icons-material/Clear";
import DateRangeIcon from "@mui/icons-material/DateRange";
export default function BodyResult() {
  const start = format(new Date(), "MM/dd/yyyy");
  const [openone, setopenone] = useState(false);
  const [opentwo, setopentwo] = useState(false);
  return (
    <div className="containerBody">
      {openone && (
        <div className="stateform1">
          <div className="iconsetting">
            <ClearIcon
              className="iconclear1"
              size="large"
              onClick={(e) => {
                setopenone(false);
              }}
            />
          </div>
          <div className="boxclass1">
            <h2>Day 1</h2>
            <div className="row">
              <label htmlFor="">{`วันที่ออก ${start}`}</label>
              <DateRangeIcon></DateRangeIcon>
            </div>
          </div>
          <div className="contanerboxcalss1">
            <div className="textBox">
              <div className="rowitem">
                <div className="itemrow1">ยืดกล้ามเนื้อก่อนออก</div>
                <div className="itemrow2">จำนวนการออก</div>
                <div className="itemrow2">ยืดกล้ามเนื้อหลังออก</div>
              </div>
            </div>
          </div>

          <div className="btnsetting">
            <button
              className="btnok2"
              onClick={(e) => {
                setopenone(false);
              }}
            >
              ทำสำเร็จ
            </button>
          </div>
        </div>
      )}
      {opentwo && (
        <div className="stateform2">
          <div className="iconsetting">
            <ClearIcon
              className="iconclear1"
              size="large"
              onClick={(e) => {
                setopentwo(false);
              }}
            />
          </div>
          <div className="boxclass1">
            <h2>รายระเอียดของการเต้นแอโรบิค</h2>
          </div>
          <div className="contanerboxcalss1">
           
          </div>

          <div className="btnsetting">
            <button
              className="btnok2"
              onClick={(e) => {
                setopenone(false);
              }}
            >
              ทำสำเร็จ
            </button>
          </div>
        </div>
      )}

      <div className="bodyincon">
        <div className="left">
          <h1>ผลลัพธ์การวิเคราะห์ คือ การเต้นแอโรบิค</h1>

          <div className="desca">
            <p>
              เนื่องจากผู้ใช้ไม่มีอุปกรณ์แต่มีความถี่และความสม่ำเสมอในการออกการการเต้นแอโรบิคจึงเหมาะที่สุด
            </p>
            <p>
              เราจะจัดตารางการออกกำลังกายให้จากเริ่มต้นเพื่อให้ลดโอกาศเกิดอาการบาดเจ็บให้มากที่สุด
            </p>
          </div>

          <div className="row">
            <button
              className="btnok"
              onClick={(e) => {
                if (!opentwo) setopenone(true);
              }}
            >
              เริ่มการออกกำลังกาย
            </button>
            <button
              className="btnok"
              onClick={(e) => {
                if (!openone) setopentwo(true);
              }}
            >
              ดูรายละเอียดท่าออกกำลังกาย
            </button>
          </div>
        </div>
        <div className="right">
          <img src="./dance.png" alt="" />
        </div>
      </div>
    </div>
  );
}
