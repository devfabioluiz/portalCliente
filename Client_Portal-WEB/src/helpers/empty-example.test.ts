import { formatDateToYearMonthDay } from 'src/helpers/datetime.helpers';

describe('datetime', () => {
  describe('formatDateToYearMonthDay', () => {
    it('should convert YYYY-M-DD to YYYY-MM-DD format', () => {
      expect(formatDateToYearMonthDay('1991-9-23')).toBe('1991-09-23');
    });
  });
});
