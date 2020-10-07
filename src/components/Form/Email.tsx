import React from 'react';
import { Error } from './styles';

const Email: React.FC<PropsType> = ({
  onInputChangeHandler,
  errors,
  register,
}) => {
  return (
    <div className="input-field col s6">
      <input
        name="email"
        id="email"
        type="email"
        className="validate"
        onChange={onInputChangeHandler}
        ref={register({
          required: true,
          maxLength: 50,
          pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        })}
      />
      {errors.email && errors.email.type === 'required' && (
        <Error>This field is required</Error>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <Error>This field should be a valid email</Error>
      )}
      {errors.email && errors.email.type === 'maxLength' && (
        <Error>This field is too long</Error>
      )}
      <label className="active" htmlFor="email">
        Email
      </label>
    </div>
  );
};

export default Email;

interface PropsType {
  onInputChangeHandler: (event: React.ChangeEvent<any>) => void;
  register: any;
  errors: any;
}
