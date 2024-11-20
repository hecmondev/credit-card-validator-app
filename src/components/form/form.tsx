import { Box, Button, CircularProgress } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormProps from './form.type';

const Form = ({
  buttonLabel,
  defaultValues,
  loading = false,
  children,
  onSubmit,
}: FormProps): React.ReactElement => {
  const form = useForm({
    mode: 'onSubmit',
    shouldFocusError: true,
    reValidateMode: 'onChange',
    defaultValues,
  });
  const { handleSubmit } = form;

  return (
    <FormProvider {...form}>
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        {children}
        <Box display="flex" justifyContent="center" mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            startIcon={
              loading && <CircularProgress size={20} color="inherit" />
            }
          >
            {buttonLabel}
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default Form;
