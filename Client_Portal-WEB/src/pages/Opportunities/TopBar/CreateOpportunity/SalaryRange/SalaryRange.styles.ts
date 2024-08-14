import styled from '@emotion/styled';
import { Box, OutlinedInput, Slider, Typography } from '@mui/material';

const FeeBox = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const FeeInput = styled(OutlinedInput)(() => ({
  height: '26px',
  width: '66px',
  fontSize: '12px',
  '& input': {
    paddingLeft: '6px',
  },
  '& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
}));

const FeeSlider = styled(Slider)(({ theme }) => ({
  width: '60%',
  '& .MuiSlider-thumb': {
    color: `${theme.palette.white.main}`,
    border: `solid 1.5px ${theme.palette.primary.main}`,
  },
  '& .MuiSlider-track': {
    height: '1.5px',
  },
  '& .MuiSlider-rail': {
    height: '1.5px',
  },
}));

const StyledFormControl = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  padding: '0px 50px',
  margin: '16px 0',
  fontFamily: theme.typography.fontFamily,
  fontSize: '12px',
  fontWeight: 400,
  '.slider': {
    margin: '0 13px', // 8px + 10px / 2 = (8 + r/2)
  },
}));

const RangeText = styled(Typography)(() => ({
  fontSize: '12px',
  lineHeight: '14px',
  marginLeft: '8px',
}));

export { FeeBox, FeeInput, FeeSlider, StyledFormControl, RangeText };
