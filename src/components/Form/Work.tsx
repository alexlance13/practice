import React from 'react';
import { Select, Error } from './styles';

const Nationallity: React.FC<PropsType> = ({
  onInputChangeHandler,
  errors,
  register,
}) => {
  return (
    <div className="input-field">
      <Select
        onChange={onInputChangeHandler}
        ref={register({ required: true })}
        name="workExp"
      >
        <option value="" disabled selected>
          Work experience
        </option>
        <option value="0-1">0-1</option>
        <option value="1-3">1-3</option>
        <option value="3-5">3-5</option>
        <option value="5+">5+</option>
      </Select>
      {errors.workExp && <Error>This field is required</Error>}
    </div>
  );
};

export default Nationallity;

interface PropsType {
  onInputChangeHandler: (event: React.ChangeEvent<any>) => void;
  register: any;
  errors: any;
}
