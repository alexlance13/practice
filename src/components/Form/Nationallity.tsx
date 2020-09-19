import React from 'react';
import styled from 'styled-components';

const Nationallity: React.FC<PropsType> = ({
  onInputChangeHandler,
  errors,
  register,
}) => {
  return (
    <div className="input-field col s6">
      <input
        name="nationality"
        id="nationality"
        type="text"
        className="validate"
        onChange={onInputChangeHandler}
        ref={register({ required: true, minLength: 2, maxLength: 25 })}
      />
      {errors.nationality && errors.nationality.type === 'required' && (
        <Error>This field is required</Error>
      )}
      {errors.nationality && errors.nationality.type === 'minLength' && (
        <Error>This field is too short</Error>
      )}
      {errors.nationality && errors.nationality.type === 'maxLength' && (
        <Error>This field is too long</Error>
      )}
      <label className="active" htmlFor="nationality">
        Nationality
      </label>
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
