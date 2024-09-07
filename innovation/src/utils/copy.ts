export const getCurrentFullDate: string = 'new Date();'
export const getCurrentYear: string = 'new Date().getFullYear();'
export const getCurrentDate: string = 'new Date().getDate();'
export const getCurrentWeekDay: string = 'new Date().getDay();'
export const getCurrentHours: string = 'new Date().getHours();'
export const getCurrentMilliseconds: string = 'new Date().getMilliseconds();'
export const getCurrentMinutes: string = 'new Date().getMinutes();'
export const getCurrentMonth: string = 'new Date().getMonth() + 1;'
export const getCurrentSeconds: string = 'new Date().getSeconds();'
export const getCurrentTime: string = 'new Date().getTime();'
export const getCurrentTimezoneOffset: string = 'new Date().getTimezoneOffset();'
export const getCurrentUTCDate: string = 'new Date().getUTCDate();'
export const getCurrentUTCDay: string = 'new Date().getUTCDate();'
export const getCurrentUTCFullYear: string = 'new Date().getUTCFullYear();'
export const getCurrentUTCHours: string = 'new Date().getUTCHours();'
export const getCurrentUTCMilliseconds: string = 'new Date().getUTCMilliseconds();'
export const getCurrentUTCMinutes: string = 'new Date().getUTCMinutes();'
export const getCurrentUTCMonth: string = 'new Date().getUTCMonth();'
export const getCurrentUTCSeconds: string = 'new Date().getUTCSeconds();'
export const getCurrentMonthName: string = `const getCurrentMonthName = () => {
  const name = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const month = new Date().getMonth();
  return name[month]
}`
export const getCurrentWeekName: string = `const getCurrentWeekName = () => {
  const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const getDay = new Date().getDay();
  return week[getDay]
}`
export const getCurrentDateString: string = 'new Date().toDateString();'
export const getCurrentISOString: string = 'new Date().toISOString();'
export const getCurrentJSON: string = 'new Date().toJSON();'
export const getCurrentLocaleDateString: string = 'new Date().toLocaleDateString();'
export const getCurrentLocaleTimeString: string = 'new Date().toLocaleTimeString();'
export const getCurrentLocaleString: string = 'new Date().toLocaleString();'
export const getCurrentTimeString: string = 'new Date().toTimeString();'
export const getCurrentValueOf: string = 'new Date().valueOf();'
export const getISODateTime: string = `new Date().toISOString().slice(0, 19).replace('T', ' ')`
export const getUSDate: string = `new Date().toLocaleDateString("en-US")`
export const getHindiDate: string = `const getHindiDate = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString("hi-IN", options);
}`
export const getUSDateWithOption: string = `const getUSDateWithOption = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString("en-US", options)
} `
export const getDateToYMD: string = `const getDateToYMD = (date) => {
  const strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const d = date.getDate();
    const m = strArray[date.getMonth()];
    const y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
} 
    console.log(getDateToYMD(new Date(2017,10,5)));`
export const getWeekMonthDayYear: string = `new Date().toDateString();`
export const YearMonthDay_Formate: string = `new Date().toISOString().slice(0,10);`
export const getFormateAnyDateAndTime: string = `var monthNames = [
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
  console.log(formatDate(new Date(), 'DD-MMM-YYYY')); //OP's request
  console.log(formatDate(new Date(), 'DDDD, MMMM D, YYYY HH:mm:ss.S aaa'));
  console.log(formatDate(new Date(), 'DDD, MMM D, YYYY HH:mm'));
  console.log(formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss.S'));
  console.log(formatDate(new Date(), 'M/DD/YYYY h:mmaaa'));`

export const getDaysInMonth: string = `
const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(9,2024));
console.log(daysInMonth(2,2025));`