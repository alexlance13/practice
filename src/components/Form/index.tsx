import React from 'react';
import styled from 'styled-components';
import Slider from '../Slider';
import { salaryType } from '../../types/types';
import { useForm } from 'react-hook-form';
import Technologies from './Technologies';
import Name from './Name';
import Email from './Email';
import Nationallity from './Nationallity';
import Gender from './Gender';
import Work from './Work';
import In5years from './In5years';

const Form: React.FC<PropsType> = ({
  onCheckboxesChangeHandler,
  salary,
  onSalaryChange,
  onInputChangeHandler,
  onSubmit,
}) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <Wrapper>
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)} className="col s12">
          <Name
            onInputChangeHandler={onInputChangeHandler}
            errors={errors}
            register={register}
          />
          <div className="row">
            <Email
              onInputChangeHandler={onInputChangeHandler}
              errors={errors}
              register={register}
            />
            <Nationallity
              onInputChangeHandler={onInputChangeHandler}
              errors={errors}
              register={register}
            />
          </div>
          <Gender
            onInputChangeHandler={onInputChangeHandler}
            errors={errors}
            register={register}
          />
          <Technologies
            onCheckboxesChangeHandler={onCheckboxesChangeHandler}
            register={register}
          />
          <Work
            onInputChangeHandler={onInputChangeHandler}
            errors={errors}
            register={register}
          />

          <In5years
            onInputChangeHandler={onInputChangeHandler}
            errors={errors}
            register={register}
          />
          <Slider salary={salary} onSalaryChange={onSalaryChange} />
          <br />
          <SubmitDiv>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </SubmitDiv>
        </form>
      </div>
    </Wrapper>
  );
};

export default Form;

interface PropsType {
  onCheckboxesChangeHandler: (id: string) => void;
  salary: salaryType;
  onSubmit: () => void;
  onSalaryChange: (value: Array<string>) => void;
  onInputChangeHandler: (event: React.ChangeEvent<any>) => void;
}

const Wrapper = styled.div`
  padding: 50px;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
const SubmitDiv = styled.div`
  float: right;
`;
