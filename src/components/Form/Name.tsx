import React from 'react';
import styled from 'styled-components';

const Name: React.FC<PropsType> = ({
  onInputChangeHandler,
  errors,
  register,
}) => {
  return (
    <div className="row">
      <div className="input-field col s6">
        <input
          name="firstName"
          id="firstName"
          type="text"
          className="validate"
          onChange={onInputChangeHandler}
          ref={register({ required: true, minLength: 2, maxLength: 50 })}
        />
        {errors.firstName && errors.firstName.type === 'required' && (
          <Error>This field is required</Error>
        )}
        {errors.firstName && errors.firstName.type === 'minLength' && (
          <Error>This field is too short</Error>
        )}
        {errors.firstName && errors.firstName.type === 'maxLength' && (
          <Error>This field is too long</Error>
        )}
        <label className="active" htmlFor="firstName">
          First Name
        </label>
      </div>
      <div className="input-field col s6">
        <input
          name="lastName"
          id="lastName"
          type="text"
          className="validate"
          onChange={onInputChangeHandler}
          ref={register({ required: true, minLength: 2, maxLength: 50 })}
        />
        {errors.lastName && errors.lastName.type === 'required' && (
          <Error>This field is required</Error>
        )}
        {errors.lastName && errors.lastName.type === 'minLength' && (
          <Error>This field is too short</Error>
        )}
        {errors.lastName && errors.lastName.type === 'maxLength' && (
          <Error>This field is too long</Error>
        )}
        <label className="active" htmlFor="lastName">
          Last Name
        </label>
      </div>
    </div>
  );
};

export default Name;

interface PropsType {
  onInputChangeHandler: (event: React.ChangeEvent<any>) => void;
  register: any;
  errors: any;
}

const Error = styled.span`
  font-weight: 400;
  color: red;
`;
