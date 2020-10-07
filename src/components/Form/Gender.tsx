import React from 'react';
import { Error, Select } from './styles';

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
