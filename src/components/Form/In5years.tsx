import React from 'react';
import styled from 'styled-components';

const Nationallity: React.FC<PropsType> = ({
  onInputChangeHandler,
  errors,
  register,
}) => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <textarea
              ref={register({
                required: true,
                minLength: 100,
                maxLength: 1000,
              })}
              name="in5years"
              id="in5years"
              className="materialize-textarea"
              onChange={onInputChangeHandler}
            ></textarea>
            {errors.in5years && errors.in5years.type === 'required' && (
              <Error>This field is required</Error>
            )}
            {errors.in5years && errors.in5years.type === 'minLength' && (
              <Error>This field should be at least 100 symbols</Error>
            )}
            {errors.in5years && errors.in5years.type === 'maxLength' && (
              <Error>This field should be less then 1000 symbols</Error>
            )}
            <label className="active" htmlFor="in5years">
              Tell us who you see yourself in 5 years
            </label>
          </div>
        </div>
      </form>
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
