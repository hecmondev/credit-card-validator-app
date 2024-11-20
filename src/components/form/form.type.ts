import { PropsWithChildren } from 'react';

export default interface FormProps extends PropsWithChildren {
  buttonLabel: string;
  defaultValues: { [x: string]: any };
  loading: boolean;
  onSubmit: (model: any) => void;
}
