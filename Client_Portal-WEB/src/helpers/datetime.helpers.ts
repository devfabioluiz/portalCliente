import dayjs, { type Dayjs } from 'dayjs';

const formatDateToYearMonthDay = (date: string | Date | Dayjs): string =>
  dayjs(date).format('YYYY-MM-DD');

const formatDateToDayMonthDate = (date: string | Date | Dayjs): string =>
  dayjs(date).format('dddd, MMMM DD');

const formatDateToTime = (date: string | Date | Dayjs): string =>
  dayjs(date).format('HH:mm');

const formatDateToISOFormat = (date: string | Date | Dayjs): string =>
  dayjs(date).format();

const addMinutes = (date: string | Date, minutes: number): Dayjs =>
  dayjs(date).add(minutes, 'm');

export {
  formatDateToYearMonthDay,
  formatDateToDayMonthDate,
  formatDateToTime,
  formatDateToISOFormat,
  addMinutes,
};
