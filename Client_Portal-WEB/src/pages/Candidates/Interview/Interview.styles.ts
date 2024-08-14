import styled from '@emotion/styled';
import { Button } from '@mui/material';

const StyledInterviewButton = styled(Button)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '16px auto',
  gap: '4px',
  height: '28px',
  padding: '0 5px',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  fontWeight: 'bold',
  border: `${theme.palette.primary.main} 2px solid`,
  letterSpacing: '0.2px',

  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: 'white',
    transition: 'all 0.1s',
    border: `${theme.palette.primary.main} 2px solid`,

    img: {
      filter: 'brightness(300%) saturate(0%)',
      transition: 'filter 0.1s',
    },
  },
}));

export { StyledInterviewButton };
