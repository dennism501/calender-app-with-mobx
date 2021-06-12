import dayjs from "dayjs";

/**
 * @returns Number of days in the current month
 */
export const getDateOfCurrentMonth = () => {
  return dayjs(new Date().toISOString()).daysInMonth();
};
