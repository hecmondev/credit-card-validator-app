import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios, { HttpStatusCode } from 'axios';
import React, { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import ApiResponse from './components/api-response/api-response';
import CreditCardForm from './components/credit-card-form/credit-card-form';
import Form from './components/form/form';
import TitleForm from './components/title-form/title-form';
import CreditCard from './types/credit-card';

const App = (): React.ReactElement => {
  const [response, setResponse] = useState(null);
  const defaultValues: CreditCard = {
    cardNumber: '',
  };

  const submit = async (model: CreditCard) => {
    setResponse(null);

    try {
      const { status, data } = await axios({
        method: 'post',
        url: 'http://localhost:3000',
        data: model,
      });

      if (status === HttpStatusCode.Ok) {
        setResponse(data);
      }
    } catch (error) {
      console.error('Something was wrong...', error);
    } finally {
      // cleaning response
      setTimeout(() => {
        setResponse(null);
      }, 1000);
    }
  };

  return (
    <>
      <TitleForm />
      <div className="card">
        <Form
          buttonLabel="Validate"
          defaultValues={defaultValues}
          loading={response !== null}
          onSubmit={submit}
        >
          <CreditCardForm />
        </Form>
        {response !== null && <ApiResponse success={response} />}
      </div>
      <p className="read-the-docs">Héctor Montoya Developer</p>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
};

export default App;
