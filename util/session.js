import { hasHappened, isValidDate, isValidDateString } from "~/util/date";

export const filterSessionsUpcoming = (sessions) => {
  return sessions.filter((s) => {
    return isValidDateString(s.dateTime)
      ? !hasHappened(new Date(s.dateTime))
      : true
  });
};

export const filterSessionsPast = (sessions) => {
  return sessions.filter((s) => {
    return isValidDateString(s.dateTime)
      ? hasHappened(new Date(s.dateTime))
      : false
  });
};
