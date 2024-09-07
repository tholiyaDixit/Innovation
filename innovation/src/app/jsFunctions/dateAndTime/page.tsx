"use client";
import PreNextReload from "@/components/preRextReload_header/PreNextReload";
import React, { useEffect } from "react";
import jsDateAndTime from "@/images/JavaScriptDateTime.webp";
import DateTimeCard from "@/components/card/dateTimeCard/DateTimeCard";
import { getCurrentFullDate, getCurrentYear, getCurrentDate, getCurrentWeekDay, getCurrentHours, getCurrentMilliseconds, getCurrentMinutes, getCurrentMonth, getCurrentSeconds, getCurrentTime, getCurrentTimezoneOffset, getCurrentUTCDate, getCurrentUTCDay, getCurrentUTCFullYear, getCurrentUTCHours, getCurrentUTCMilliseconds, getCurrentUTCMinutes, getCurrentUTCMonth, getCurrentUTCSeconds, getCurrentMonthName, getCurrentWeekName, getCurrentDateString, getCurrentISOString, getCurrentJSON, getCurrentLocaleDateString, getCurrentLocaleTimeString, getCurrentLocaleString, getCurrentTimeString, getCurrentValueOf, getISODateTime, getUSDate, getUSDateWithOption, getHindiDate, getDateToYMD, getWeekMonthDayYear, YearMonthDay_Formate, getFormateAnyDateAndTime, getDaysInMonth } from "@/utils/copy";

const newDateAndTimeArray: dateTime.newDateAndTimeArray[] = [
  { id: 1, title: "getCurrentFullDate", result: "Tue Sep 03 2024 20:28:03 GMT+0530 (India Standard Time)", copyText: getCurrentFullDate},
  { id: 1, title: "getCurrentYear", result: "2024", copyText: getCurrentYear},
  { id: 1, title: "getCurrentDate", result: "31", copyText: getCurrentDate},
  { id: 1, title: "getCurrentWeekDay", result: "6", copyText: getCurrentWeekDay},
  { id: 1, title: "getCurrentHours", result: "17", copyText: getCurrentHours},
  { id: 1, title: "getCurrentMilliseconds", result: "839", copyText: getCurrentMilliseconds},
  { id: 1, title: "getCurrentMinutes", result: "50", copyText: getCurrentMinutes},
  { id: 1, title: "getCurrentMonth", result: "9", copyText: getCurrentMonth},
  { id: 1, title: "getCurrentSeconds", result: "14", copyText: getCurrentSeconds},
  { id: 1, title: "getCurrentTime", result: "1725083017382", copyText: getCurrentTime},
  { id: 1, title: "getCurrentTimezoneOffset", result: "-330", copyText: getCurrentTimezoneOffset},
  { id: 1, title: "getCurrentUTCDate", result: "31", copyText: getCurrentUTCDate},
  { id: 1, title: "getCurrentUTCHours", result: "5", copyText: getCurrentUTCHours},
  { id: 1, title: "getCurrentUTCMilliseconds", result: "684", copyText: getCurrentUTCMilliseconds},
  { id: 1, title: "getCurrentUTCMinutes", result: "51", copyText: getCurrentUTCMinutes},
  { id: 1, title: "getCurrentUTCMonth", result: "7", copyText: getCurrentUTCMonth},
  { id: 1, title: "getCurrentUTCSeconds", result: "31", copyText: getCurrentUTCSeconds},
  { id: 1, title: "getCurrentMonthName", result: "October", copyText: getCurrentMonthName},
  { id: 1, title: "getCurrentWeekName", result: "Tuesday", copyText: getCurrentWeekName},
  { id: 1, title: "getCurrentDateString", result: "Sat Aug 31 2024", copyText: getCurrentDateString},
  { id: 1, title: "getCurrentISOString", result: "2024-08-31T06:03:53.464Z", copyText: getCurrentISOString},
  { id: 1, title: "getCurrentJSON", result: "2024-08-31T06:04:31.443Z", copyText: getCurrentJSON},
  { id: 1, title: "getCurrentLocaleDateString", result: "8/31/2024", copyText: getCurrentLocaleDateString},
  { id: 1, title: "getCurrentLocaleTimeString", result: "11:36:29 AM", copyText: getCurrentLocaleTimeString},
  { id: 1, title: "getCurrentLocaleString", result: "8/31/2024, 11:37:13 AM", copyText: getCurrentLocaleString},
  { id: 1, title: "getCurrentTimeString", result: "11:39:02 GMT+0530 (India Standard Time)", copyText: getCurrentTimeString},
  { id: 1, title: "getCurrentValueOf", result: "1725084664502", copyText: getCurrentValueOf},
  { id: 1, title: "getISODateTime", result: "2024-09-03 15:42:12", copyText: getISODateTime},
  { id: 1, title: "getUSDate", result: "9/25/2024", copyText: getUSDate},
  { id: 1, title: "getUSDateWithOption", result: "Saturday, September 17, 2016", copyText: getUSDateWithOption},
  { id: 1, title: "getDateToYMD", result: "05-Nov-2017", copyText: getDateToYMD},
  { id: 1, title: "YearMonthDay_Formate", result: "2024-09-03", copyText: YearMonthDay_Formate},
  { id: 1, title: "getFormateAnyDateAndTime", result: "allFormate function", copyText: getFormateAnyDateAndTime},
  { id: 1, title: "getDaysInMonth", result: "get day count in a any month", copyText: getDaysInMonth},
];

const page = () => {

  return (
    <div>
      <PreNextReload />
      All date and time function in javascript
      <div className="flex justify-start flex-wrap m-6 ">
        {newDateAndTimeArray.map(
          (item: dateTime.newDateAndTimeArray, index: any) => {
            return (
              <>
                <DateTimeCard
                  key={index}
                  title={item.title}
                  result={item.result}
                  copyText={item.copyText}
                />
              </>
            );
          }
        )}
      </div>
    </div>
  );
};

export default page;
