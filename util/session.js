import { hasHappened, isValidDate, isValidDateString } from "~/util/date";

export const getSessionsUpcoming = (sessions) => {
  return sessions.filter((s) => {
    return isValidDateString(s.dateTime)
      ? !hasHappened(new Date(s.dateTime))
      : true
  });
};

/* expects sessions sorted ASC by date
   returns past sessions in reverse order, to start with most recent
*/
export const getSessionsPast = (sessions) => {
  return sessions.filter((s) => {
    return isValidDateString(s.dateTime)
      ? hasHappened(new Date(s.dateTime))
      : false
  }.reverse());
};
