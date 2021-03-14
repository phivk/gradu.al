export const formatDate = (date) => {
  const options = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};

export const hasHappened = (date) => {
  let now = new Date();
  return date < now;
};

export const hasNotHappened = (date) => {
  let now = new Date();
  return date > now;
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


