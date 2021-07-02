export const formatDate = (date) => {
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};

export const formatTime = (date) => {
  // return time local to browser's timezone
  const locales = []; // [] to use browser's default locale for format
  const options = { hour: '2-digit', minute: '2-digit' };
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

export const isValidDateString = (dateString) => {
  return dateString == null 
    ? false
    : isValidDate(new Date(dateString))
};
