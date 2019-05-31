import { default as format } from "date-fns/format";

export const yearFormat = date => {
  return format(new Date(date), "YYYY-MM-DD");
};
export const hourFormat = date => {
  return format(new Date(date), "YYYY-MM-DD, HH:mm");
};

function nth(d) {
  if (d > 3 && d < 21) return 'th'; 
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}



export const prettyDate = date => {
  date = new Date(date)
  let monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  // return day+nth(day) + ' ' + monthNames[monthIndex] + ' ' + year;
  return monthNames[monthIndex]+' '+day+nth(day)+' '+year;
}
