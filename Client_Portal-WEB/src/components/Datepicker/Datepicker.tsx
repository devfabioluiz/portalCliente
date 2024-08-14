import { useEffect, useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import dayjs from 'dayjs';

import { StyledStaticDatePicker } from 'src/components/Datepicker/Datepicker.styles';
import { formatDateToYearMonthDay } from 'src/helpers/datetime.helpers';

interface Props {
  onDateChange: (date: Date | unknown) => void;
}

const Datepicker = ({ onDateChange }: Props): React.ReactElement => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    onDateChange(formatDateToYearMonthDay(date));
  }, [date]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledStaticDatePicker
        dayOfWeekFormatter={(day) => day.toUpperCase()}
        value={dayjs(date)}
        onChange={(newValue) => {
          setDate(newValue as Date);
        }}
        disablePast
      />
    </LocalizationProvider>
  );
};

export default Datepicker;
