import dayjs from "dayjs";

/**
 * @returns Number of days in the current month
 */
export const getDateOfCurrentMonth = () => {
  return dayjs(new Date().toISOString()).daysInMonth();
};

/**
 *
 * @returns The total number of days of the previous month base on the current
 */
export const getNextMonth = () => {
  return dayjs(new Date().toISOString()).add(1, "month").daysInMonth();
};

/**
 *
 * @returns The total number of days of the previous month base on the current
 */
export const getPreviousMonth = () => {
  return dayjs(new Date().toISOString()).subtract(1, "month").daysInMonth();
};
