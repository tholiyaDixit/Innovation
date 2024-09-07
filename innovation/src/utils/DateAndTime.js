// get current time and date. time and date is related to PC.
export const getCurrentFullDate = () => {
  return new Date(); // Sat Aug 31 2024 11:09:11 GMT+0530 (India Standard Time)
};
// get current year. year is related to PC.
export const getCurrentYear = () => {
  return new Date().getFullYear(); // 2024
};

export const getCurrentDate = () => {
  return new Date().getDate(); // 31
};

export const getCurrentWeekDay = () => {
  return new Date().getDay(); // 6
};

export const getCurrentHours = () => {
  return new Date().getHours(); // 17
};

export const getCurrentMilliseconds = () => {
  return new Date().getMilliseconds(); // 839
};

export const getCurrentMinutes = () => {
  return new Date().getMinutes(); // 50
};

export const getCurrentMonth = () => {
  return new Date().getMonth() + 1; // 8
};

export const getCurrentSeconds = () => {
  return new Date().getSeconds(); // 14
};

export const getCurrentTime = () => {
  return new Date().getTime(); // 1725083017382
};

// getTimezoneOffset() returns the time difference between UTC time and local time, in minutes.
export const getCurrentTimezoneOffset = () => {
  return new Date().getTimezoneOffset(); // -330
};

// getUTCDate() returns the day of the month of a date, according to UTC:
export const getCurrentUTCDate = () => {
  return new Date().getUTCDate(); // 31
};

// getUTCDay() returns the day of the week (from 0 to 6), according to universal time: --> 0=Sunday, 1=Monday, etc.
export const getCurrentUTCDay = () => {
  return new Date().getUTCDay(); // 6
};

// getUTCFullYear() returns the year of a date, according to UTC:
export const getCurrentUTCFullYear = () => {
  return new Date().getUTCFullYear(); // 2024
};

// getUTCHours() returns the hour of a date, according to UTC:
export const getCurrentUTCHours = () => {
  return new Date().getUTCHours(); // 5
};

// getUTCMilliseconds() returns the milliseconds of a date:
export const getCurrentUTCMilliseconds = () => {
  return new Date().getUTCMilliseconds(); // 684
};

// getUTCMinutes() returns the minutes of a date, according to UTC:
export const getCurrentUTCMinutes = () => {
  return new Date().getUTCMinutes(); // 51
};

// getUTCMonth() returns the month (from 0 to 11) of a date, according to UTC.
export const getCurrentUTCMonth = () => {
  return new Date().getUTCMonth(); // 7
};

// getUTCSeconds() returns the seconds of a Date, according to universal time:
export const getCurrentUTCSeconds = () => {
  return new Date().getUTCSeconds(); // 31
};

//  The prototype constructor allows you to add new properties and methods to the Date() object.
//  Create a myMonth() method, returning the the month's name:
// export const getCurrentMonthName = () => {
//   Date.prototype.myMonth = function () {
//     if (this.getMonth() == 0) {
//       return "January";
//     }
//     if (this.getMonth() == 1) {
//       return "February";
//     }
//     if (this.getMonth() == 2) {
//       return "March";
//     }
//     if (this.getMonth() == 3) {
//       return "April";
//     }
//     if (this.getMonth() == 4) {
//       return "May";
//     }
//     if (this.getMonth() == 5) {
//       return "June";
//     }
//     if (this.getMonth() == 6) {
//       return "July";
//     }
//     if (this.getMonth() == 7) {
//       return "August";
//     }
//     if (this.getMonth() == 8) {
//       return "September";
//     }
//     if (this.getMonth() == 9) {
//       return "October";
//     }
//     if (this.getMonth() == 10) {
//       return "November";
//     }
//     if (this.getMonth() == 11) {
//       return "December";
//     }
//   };

//   return new Date().myMonth(); // 'August'
// };

export const getCurrentMonthName = () => {
  const name = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = new Date().getMonth();
  return name[month];
};

// get week name
// export const getCurrentWeekName = () => {
//   Date.prototype.myWeek = function () {
//     if (this.getDay() == 0) {
//       return "Sunday";
//     }
//     if (this.getDay() == 1) {
//       return "Monday";
//     }
//     if (this.getDay() == 2) {
//       return "Tuesday";
//     }
//     if (this.getDay() == 3) {
//       return "Wednesday";
//     }
//     if (this.getDay() == 4) {
//       return "Thursday";
//     }
//     if (this.getDay() == 5) {
//       return "Friday";
//     }
//     if (this.getDay() == 6) {
//       return "Saturday";
//     }
//   };

//   return new Date().myWeek(); // 'Saturday'
// };

export const getCurrentWeekName = () => {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getDay = new Date().getDay();
  return week[getDay];
};

// toDateString() returns the date of a date object as a readable string:
export const getCurrentDateString = () => {
  return new Date().toDateString(); // 'Sat Aug 31 2024'
};

// toISOString() returns a date as string, using the ISO standard:
export const getCurrentISOString = () => {
  return new Date().toISOString(); // '2024-08-31T06:03:53.464Z'
};

// toJSON() returns a date as a string, using JSON date formatting:
export const getCurrentJSON = () => {
  return new Date().toJSON(); // '2024-08-31T06:04:31.443Z'
};

// toLocaleDateString() returns the date (not the time) of a date, as a string, using locale conventions:
export const getCurrentLocaleDateString = () => {
  return new Date().toLocaleDateString(); // 8/31/2024
};

// toLocaleTimeString() returns the time portion of a date, as a string, using locale conventions:
export const getCurrentLocaleTimeString = () => {
  return new Date().toLocaleTimeString(); // '11:36:29 AM'
};

// toLocaleString() returns a date as a string, using locale settings:
export const getCurrentLocaleString = () => {
  return new Date().toLocaleString(); // '8/31/2024, 11:37:13 AM'
};

// toString() returns a date object as a string:
export const getCurrentString = () => {
  return new Date().toString(); // 'Sat Aug 31 2024 11:38:20 GMT+0530 (India Standard Time)'
};

// toTimeString() returns the time portion of a date object as a string:
export const getCurrentTimeString = () => {
  return new Date().toTimeString(); // '11:39:02 GMT+0530 (India Standard Time)'
};

// toUTCString() returns a date object as a string, according to UTC:
export const getCurrentUTCString = () => {
  return new Date().toUTCString(); // 'Sat, 31 Aug 2024 06:09:49 GMT'
};

// valueOf() returns the primitive value of a date object:
export const getCurrentValueOf = () => {
  return new Date().valueOf(); // 1725084664502
};

export const getISODateTime = () => {
  return new Date().toISOString().slice(0, 19).replace("T", " ");
};

export const getUSDate = () => {
  return new Date().toLocaleDateString("en-US"); // 9/17/2016
};

export const getUSDateWithOption = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString("en-US", options); // Saturday, September 17, 2016
};

export const getHindiDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString("hi-IN", options); // शनिवार, 17 सितंबर 2016
};

export const getDateToYMD = (date) => {
  const strArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = date.getDate();
  const m = strArray[date.getMonth()];
  const y = date.getFullYear();
  return "" + (d <= 9 ? "0" + d : d) + "-" + m + "-" + y;
};

export const getWeekMonthDayYear = () => {
  return new Date().toDateString();
};

export const YearMonthDay_Formate = () => {
  return new Date().toISOString().slice(0, 10);
};

// copy only inside function
export const getFormateAnyDateAndTime = () => {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dayOfWeekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function formatDate(date, patternStr) {
    if (!patternStr) {
      patternStr = "M/D/YYYY";
    }
    var day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds(),
      miliseconds = date.getMilliseconds(),
      h = hour % 12,
      hh = twoDigitPad(h),
      HH = twoDigitPad(hour),
      mm = twoDigitPad(minute),
      ss = twoDigitPad(second),
      aaa = hour < 12 ? "AM" : "PM",
      DDDD = dayOfWeekNames[date.getDay()],
      DDD = DDDD.substr(0, 3),
      DD = twoDigitPad(day),
      M = month + 1,
      MM = twoDigitPad(M),
      MMMM = monthNames[month],
      MMM = MMMM.substr(0, 3),
      YYYY = year + "",
      YY = YYYY.substr(2, 2);
    // checks to see if month name will be used
    patternStr = patternStr
      .replace("hh", hh)
      .replace("h", h)
      .replace("HH", HH)
      .replace("H", hour)
      .replace("mm", mm)
      .replace("m", minute)
      .replace("ss", ss)
      .replace("s", second)
      .replace("S", miliseconds)
      .replace("DDDD", DDDD)
      .replace("DDD", DDD)
      .replace("DD", DD)
      .replace("D", day)
      .replace("YYYY", YYYY)
      .replace("YY", YY)
      // patternStr = patternStr
      .replace("MMMM", MMMM)
      .replace("MMM", MMM)
      .replace("MM", MM)
      .replace("M", M)
      .replace("aaa", aaa);

    return patternStr;
  }
  function twoDigitPad(num) {
    return num < 10 ? "0" + num : num;
  }
  console.log(formatDate(new Date(), "YYYY-YY"));
  console.log(formatDate(new Date(), "MMMM-MMM-MM-M"));
  console.log(formatDate(new Date(), "DDDD-DDD-DD-D"));
  console.log(formatDate(new Date(), "h-hh-HH-mm-ss-S-aaa"));
  console.log(formatDate(new Date(), "HH-mm-ss-S-aaa"));
  console.log(formatDate(new Date(), "DD-MM-YY"));
  console.log(formatDate(new Date(), "DD-YY-MM"));
  console.log(formatDate(new Date(), "MM-DD-YYYY"));
  console.log(formatDate(new Date()));
  console.log(formatDate(new Date(), "DD-MMM-YYYY")); //OP's request
  console.log(formatDate(new Date(), "DDDD, MMMM D, YYYY HH:mm:ss.S aaa"));
  console.log(formatDate(new Date(), "DDD, MMM D, YYYY HH:mm"));
  console.log(formatDate(new Date(), "YYYY-MM-DD HH:mm:ss.S"));
  console.log(formatDate(new Date(), "M/DD/YYYY h:mmaaa"));
};

export const getDaysInMonth = () => {
  return new Date(year, month, 0).getDate();
};
