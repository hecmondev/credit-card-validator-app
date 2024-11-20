import { CreditCard } from '@mui/icons-material';
import { InputAdornment, Stack, TextField } from '@mui/material';
import React from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

const CreditCardForm = (): React.ReactElement => {
  const { control } = useFormContext();
  const watchedCardNumber = useWatch({ control, name: 'cardNumber' });
  const DASH_SPACE_PATTERN = /[-\s]/g;
  const CREDIT_CARD_PATTERN = /^(?:\d[\s-]*?){13,16}$/g;

  return (
    <Stack spacing={1}>
      <Stack direction="row">
        <Cards
          number={watchedCardNumber.replace(DASH_SPACE_PATTERN, '')}
          expiry="1224"
          cvc="123"
          name="HECTOR MONTOYA"
          focused=""
        />
      </Stack>
      <Controller
        control={control}
        name="cardNumber"
        rules={{
          required: 'Card number is required',
          maxLength: {
            value: 19,
            message:
              'Card number can not be greater than 19 chars including dashes or spaces',
          },
          pattern: {
            value: CREDIT_CARD_PATTERN,
            message:
              'Format must be "XXXX-XXXX-XXXX-XXXX" or "XXXX XXXX XXXX XXXX" or only numbers',
          },
        }}
        render={({ field, fieldState: { error } }) => {
          return (
            <TextField
              id={field.name}
              {...field}
              type="tel"
              margin="normal"
              variant="filled"
              fullWidth
              label="Credit card number"
              autoFocus
              error={!!error}
              helperText={error?.message}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <CreditCard />
                    </InputAdornment>
                  ),
                },
              }}
            />
          );
        }}
      />
    </Stack>
    // <Grid2 container spacing={3}>
    //   <Grid2 item>

    //   </Grid2>
    //   <Grid2 item xs={6}>
    //     <TextField
    //       {...getExpiryDateProps({
    //         refKey: 'inputRef',
    //         onChange: validation.bind(null, 'payment.expiry'),
    //       })}
    //       inputRef={getExpiryDateProps().ref}
    //       fullWidth
    //       type="tel"
    //       label="Expiry date"
    //       name="payment.expiry"
    //       variant="filled"
    //       error={
    //         (erroredInputs.expiryDate && touchedInputs.expiryDate) ||
    //         !!formErrors?.payment?.expiry?.message
    //       }
    //       helperText={
    //         (erroredInputs.expiryDate &&
    //           touchedInputs.expiryDate &&
    //           erroredInputs.expiryDate) ||
    //         formErrors?.payment?.expiry?.message
    //       }
    //     />
    //   </Grid2>
    //   <Grid2 item xs={6}>
    //     <TextField
    //       {...getCVCProps({
    //         refKey: 'inputRef',
    //         onChange: validation.bind(null, 'payment.cvv'),
    //         onBlur: handleBlur,
    //       })}
    //       inputRef={getCVCProps().ref}
    //       fullWidth
    //       type="tel"
    //       label="CVV"
    //       name="payment.cvv"
    //       variant="filled"
    //       error={
    //         (erroredInputs.cvc && touchedInputs.cvc) ||
    //         !!formErrors?.payment?.ccv?.message
    //       }
    //       helperText={
    //         (erroredInputs.cvc && touchedInputs.cvc && erroredInputs.cvc) ||
    //         formErrors?.payment?.ccv?.message
    //       }
    //     />
    //   </Grid2>
    //   <Grid2 item xs={12}>
    //     <TextField
    //       fullWidth
    //       variant="filled"
    //       type="text"
    //       label="Name on Card"
    //       placeholder="J Smith"
    //       name="payment.accountHolderName"
    //       inputRef={register}
    //       error={!!formErrors.payment?.accountHolderName?.message}
    //       helperText={formErrors.payment?.accountHolderName?.message}
    //       onChange={validation.bind(null, 'payment.accountHolderName')}
    //     />
    //   </Grid2>
    // </Grid2>
  );
};

export default CreditCardForm;
