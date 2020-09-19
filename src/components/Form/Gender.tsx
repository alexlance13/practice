import React from 'react';
import styled from 'styled-components';

const Email: React.FC<PropsType> = ({
  onInputChangeHandler,
  errors,
  register,
}) => {
  return (
    <div className="input-field">
      <Select
        onChange={onInputChangeHandler}
        ref={register({ required: true })}
        name="gender"
      >
        <option value="" disabled selected>
          Choose your gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>
      {errors.gender && <Error>This field is required</Error>}
    </div>
  );
};

export default Email;

interface PropsType {
  onInputChangeHandler: (event: React.ChangeEvent<any>) => void;
  register: any;
  errors: any;
}

const Error = styled.span`
  font-weight: 400;
  color: red;
`;

const Select = styled.select`
  background-color: inherit;
  display: block;
  border-bottom: 1px solid #26a69a;
  margin-bottom: 20px;
`;
