import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export const formatDate = (date) => {
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};

export const formatTime = (date) => {
  // return time local to browser's timezone
  const locales = []; // [] to use browser's default locale for format
  const options = { hour: "2-digit", minute: "2-digit" };
  return date.toLocaleTimeString(locales, options);
};

export const getTimezone = () => {
  // return browser's timezone
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

/* expects valid date object */
export const hasHappened = (date) => {
  let now = new Date();
  return date < now;
};

export const isValidDate = (date) => {
  if (Object.prototype.toString.call(date) === "[object Date]") {
    // it is a date
    if (isNaN(date.getTime())) {
      // date is not valid
      return false;
    } else {
      // date is valid
      return true;
    }
  } else {
    // not a date
    return false;
  }
};

export const calculateICSDuration = (timeInMinutes) => {
  const minutes = timeInMinutes % 60;
  const hours = (timeInMinutes - minutes) / 60;

  return `PT${hours}H${minutes}M`;
};

export const formatICSDate = (date) => {
  const pre =
    date.getFullYear().toString() +
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1).toString()
      : (date.getMonth() + 1).toString()) +
    (date.getDate() + 1 < 10
      ? "0" + date.getDate().toString()
      : date.getDate().toString());
  const post =
    (date.getHours() - 1).toString() +
    date.getMinutes().toString().padStart(2, "0") +
    "00" +
    "Z";

  return `${pre}T${post}`;
};

export const getICSString = (date, title, durationInMinutes) => {
  return `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nCALSCALE:GREGORIAN\r\nPRODID:gradual/ics\r\nMETHOD:PUBLISH\r\nX-PUBLISHED-TTL:PT1H\r\nBEGIN:VEVENT\r\nUID:${uuidv4()}\r\nSUMMARY:${title}\r\nDTSTAMP:${formatICSDate(
    new Date()
  )}\r\nDTSTART:${formatICSDate(
    new Date(date)
  )}\r\nDESCRIPTION:${title}\r\nLOCATION:See community space or registration\r\nDURATION:${calculateICSDuration(
    durationInMinutes
  )}\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n`;
};

export const getGoogleCalendarURL = (
  title,
  description,
  dateTime,
  durationInMinutes
) => {
  const formatString = (string) =>
    encodeURIComponent(string).replace(/%20/g, "+");
  let url = "http://www.google.com/calendar/render?action=TEMPLATE";
  const start = dayjs(dateTime).format("YYYYMMDDTHHmmssZ");
  const end = dayjs(dateTime)
    .add(durationInMinutes, "minutes")
    .format("YYYYMMDDTHHmmssZ");
  const parameters = {
    text: formatString(title),
    location: formatString(
      "Zoom - check #skillsharing channel on Slack for details."
    ),
    details: formatString(description || ""),
    dates: formatString(`${start}/${end}`),
  };

  for (const key in parameters) {
    if (parameters.hasOwnProperty(key) && parameters[key]) {
      url += `&${key}=${parameters[key]}`;
    }
  }
  return url;
};

export const isValidDateString = (dateString) => {
  return dateString == null ? false : isValidDate(new Date(dateString));
};
