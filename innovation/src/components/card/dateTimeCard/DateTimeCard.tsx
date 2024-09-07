"use client";
import React, { useEffect, useState } from "react";
import "./DateTimeCard.css";
import { copyText } from "@/utils/utils";
import {
  getCurrentDate,
  getCurrentHours,
  getCurrentWeekDay,
  getCurrentYear,
} from "@/utils/DateAndTime";

interface DateTimeCardProps {
  title: string;
  copyText: string;
  result: string;
}

const DateTimeCard = (props: DateTimeCardProps) => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setDate(String(new Date()));
  }, []);

  // const showDescriptions = () => {
  //   let showDis =
  //     props.title == "getCurrentFullDate"
  //       ? date
  //       : props.title == "getCurrentYear"
  //       ? new Date().getFullYear()
  //       : props.title == 'getCurrentDate'
  //       ? getCurrentDate()
  //       : ''

  //   return (
  //     <>
  //       <p className="mt-5 text-center">{showDis}</p>
  //     </>
  //   );
  // };

  // const showDescriptions = () => {
  //   let showDis =
  //     props.title == "getCurrentFullDate"
  //       ? date
  //       : props.title == "getCurrentYear"
  //       ? getCurrentYear()
  //       : props.title == "getCurrentDate"
  //       ? getCurrentDate()
  //       : props.title == "getCurrentWeekDay"
  //       ? getCurrentWeekDay()

  //       : props.title == "getCurrentHours"
  //       ? getCurrentHours()
  //       : "";

  //   return (
  //     <>
  //       <p
  //         onClick={() => {
  //           copyText(props.copyText);
  //         }}
  //       >
  //         {props.copyText} &nbsp; &nbsp; ## &nbsp; &nbsp; {showDis}
  //       </p>
  //     </>
  //   );
  // };

  return (
    <div style={{ width: "100%" }}>
      {/* <div
        className="dateTimeCard"
        onClick={() => {
          copyText(props.copyText);
        }}
      >
        <p className="dateTimeCardText">{props.title}</p>
        <p className="mt-5 text-center">{props.discretion}</p>
      </div> */}

      {/* <div className="dateTime">{showDescriptions()}</div> */}
      <div className="dateTime">
        <p
          onClick={() => {
            copyText(props.copyText);
          }}
        >
          {/* {props.copyText} &nbsp; &nbsp; ## &nbsp; &nbsp; {props.result} */}
          &nbsp; &nbsp; ## &nbsp; &nbsp; {props.result}
        </p>
      </div>
      {/* <div className="dateTime">get current date and time ## Sat Aug 31 2024 18:49:56 GMT+0530 (India Standard Time)</div> */}
    </div>
  );
};

export default DateTimeCard;
