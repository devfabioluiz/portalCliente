import { forwardRef, useState } from 'react';

import { Alert, Slide, type SlideProps, Snackbar } from '@mui/material';

import { useNotification } from 'src/hooks';
import { type INotification } from 'src/recoil/notifications';

const TransitionLeft = forwardRef(function TransitionLeft(
  props: SlideProps,
  ref,
): React.ReactElement {
  return <Slide ref={ref} {...props} direction="left" />;
});

const AUTO_HIDE_DURATION = 6000;

export default function Notification({
  id,
  type,
  message,
  autoHideDuration = AUTO_HIDE_DURATION,
}: INotification): React.ReactElement {
  const { dismissNotification } = useNotification();
  const [open, setOpen] = useState(true);
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ): void => {
    setOpen(false);
    dismissNotification(id);
  };

  return (
    <Snackbar
      key={id}
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      TransitionComponent={TransitionLeft}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}>
      <Alert severity={type} color={type} icon={false}>
        {message}
      </Alert>
    </Snackbar>
  );
}
