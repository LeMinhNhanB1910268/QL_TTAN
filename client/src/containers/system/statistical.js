import React, {useEffect, useState} from "react";

import "./Statistical.scss"

import StatisticalFee from "../../components/Views/TuitionFee/StatisticalFee";
import StatisticalREview from "../../components/Views/Review/StatisticalReview";
export default function statistical() {
  const [isOpenFee,setIsOpenFee] = useState(false)
  const [isOpenREview,setIsOpenREview] = useState(false)
  const handleStatisticalFee = () => {
    setIsOpenREview(false)
    setIsOpenFee(true)

  }
  const handleStatisticalREview = () => {
    setIsOpenFee(false)
    setIsOpenREview(true)

  }
  return (
    <div className="content-statistical">
      <div className="menu">
        <button onClick={()=>{handleStatisticalFee()}}>Thống kê học phí</button>
        <button onClick={()=>{handleStatisticalREview()}}>Thống kê thành tích học viên</button>
      </div>
      <div className="box">
        {
          isOpenFee ? (<StatisticalFee />) : (<></>)
        }
        {
          isOpenREview ? (<StatisticalREview />) : (<></>)
        }
      </div>
    </div>
  )
}
