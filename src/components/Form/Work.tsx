import React from 'react';
import styled from 'styled-components';

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
