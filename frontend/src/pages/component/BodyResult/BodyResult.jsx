import { React, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import "./bodyRe.css";
import { format } from "date-fns";
import ClearIcon from "@mui/icons-material/Clear";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Tabs from "../tab/Tabs";
import Detail from "../detail/Detail";
import { useNavigate } from "react-router-dom";
import Deresu from "../detailresult/Deresu";
import toast, { Toaster } from 'react-hot-toast';
export default function BodyResult() {
  const start = format(new Date(), "MM/dd/yyyy");
  const [openone, setopenone] = useState(false);
  const [opentwo, setopentwo] = useState(false);
  const navigate = useNavigate();
    const [res, setres] = useState(true)
  const [check, setcheck] = useState(false)
  return (
    <div className="containerBody">
      {openone && (
        <div className="stateform1">
          <div className="top">
            <div className="iconsetting">
              <ClearIcon
                className="iconclear1"
                size="large"
                onClick={(e) => {
                  setopenone(false);
                  setres(true);
                }}
              />
            </div>
          </div>
        {res&&<>
          <div className="boxclass1">
              <div className="row"> {check&&<CheckIcon className="iconcheck"></CheckIcon>}<h2>Day 1</h2></div>
              <div className="row">
                <label htmlFor="">{`วันที่ออก ${start}`}</label>
                <DateRangeIcon></DateRangeIcon>
              </div>
            </div>

            <Tabs />

          <div className="btnsetting">
            <button
              className="btnok2"
              onClick={(e) => {
                if(!check) toast.success('วันนี้คุณทำมันสำเร็จแล้ว!')
                setcheck(true);
              }}
            >
              ทำสำเร็จ
            </button>
            <button
              className="btnok2"
              onClick={(e) => {
                if(!check){
                  toast.error("คุณยังไม่เคยออกกำลังกาย")
                }else{
                  setres(false);
                }
               
              }}
            >
              ผลลัพธ์
            </button>
          
          </div>
          </>}

          {!res&&<>
          <div className="boxclass1">
          <Deresu/>

          <button
              className="btnok2"
              onClick={(e) => {
                navigate("/Home");
              }}
            >
              เริ่มวิเคราะห์การออกกำลังกายใหม่
            </button>
            </div>
          </>}
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
              <Detail/>
          </div>

         
        </div>
      )}

      <div className="bodyincon">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
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
          <img src="./dance.png"  alt="" />
        </div>
      </div>
    </div>
  );
}
