import { Check } from '@mui/icons-material';
import { Alert, Box } from '@mui/material';
import React from 'react';
import ApiResponseProps from './api-response.type';

const ApiResponse = ({ success }: ApiResponseProps): React.ReactElement => {
  return (
    <Box paddingTop={1}>
      {success && (
        <Alert icon={<Check fontSize="inherit" />} severity="success">
          Credit card number is valid.
        </Alert>
      )}

      {success === false && (
        <Alert severity="error">Credit card number is invalid.</Alert>
      )}
    </Box>
  );
};

export default ApiResponse;
