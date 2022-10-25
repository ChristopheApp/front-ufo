import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  children?: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  errorMessage: string;
  type: any;
}

export default function CustomizedSnackbars({open, handleClose, errorMessage, type}: Props) {

  return (
      <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
      
  );
}
