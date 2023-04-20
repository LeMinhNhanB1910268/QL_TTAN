import React, {useEffect, useState} from "react";

import "./Statistical.scss"

import StatisticalFee from "../../components/Views/StatisticalFee";
import StatisticalPoint from "../../components/Views/StatisticalPoint";
export default function statistical() {
  const [isOpenFee,setIsOpenFee] = useState(false)
  const [isOpenPoint,setIsOpenPoint] = useState(false)
  const handleStatisticalFee = () => {
    setIsOpenFee(true)
  }
  const handleStatisticalPoint = () => {
    setIsOpenPoint(true)
  }
  return (
    <div className="content-statistical">
      <div className="menu">
        <button onClick={()=>{handleStatisticalFee()}}>Thống kê học phí</button>
        <button onClick={()=>{handleStatisticalPoint()}}>Thống kê thành tích học viên</button>
      </div>
      {
        isOpenFee ? (<StatisticalFee />) : (<></>)
      }
      {
        isOpenPoint ? (<StatisticalPoint />) : (<></>)
      }
    </div>
  )
}
