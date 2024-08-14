import styled from '@emotion/styled';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const StyledStaticDatePicker = styled(StaticDatePicker)(({ theme }) => ({
  '.MuiPickersToolbar-root, .MuiDialogActions-root': {
    display: 'none',
  },

  '.MuiPickersCalendarHeader-root': {
    padding: '0 12px',
  },

  '.MuiDayCalendar-header': {
    justifyContent: 'space-between',

    '.MuiTypography-caption': {
      color: theme.palette.mediumGrey.contrastText,
    },
  },

  '.MuiPickersCalendarHeader-labelContainer': {
    pointerEvents: 'none',
    color: theme.palette.darkText.dark,
    fontSize: '24px',

    button: {
      display: 'none',
    },
  },

  '.MuiPickersArrowSwitcher-root button svg': {
    height: '28px',
    width: '28px',
  },

  '.MuiDayCalendar-monthContainer ': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '15px',
  },

  '.MuiDayCalendar-weekContainer': {
    justifyContent: 'space-between',

    '.MuiButtonBase-root.MuiPickersDay-root': {
      width: '24px',
      height: '24px',
      fontWeight: 400,

      '&.Mui-selected': {
        background: 'linear-gradient(180deg, #8E65F8 0%, #A27FFD 100%)',
      },
    },

    'MuiButtonBase-root MuiPickersDay-root MuiPickersDay-dayWithMargin': {
      color: theme.palette.darkText.dark,
    },

    '.Mui-disabled': {
      color: theme.palette.lightGrey.light,
    },
  },
}));

export { StyledStaticDatePicker };
