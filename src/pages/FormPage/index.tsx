import React from 'react';
import { Wrapper } from './styles';
import NavBar from 'components/NavBar';
import Form from 'components/Form';
import { IBlankState } from 'types/types';
import { setStateFromInputs, sendData } from 'store/actions/form';
import { connect } from 'react-redux';
import CircleLoader from 'react-spinners/CircleLoader';

const FormPage: React.FC<PropsType> = ({
  blankState,
  setStateFromInputs,
  loading,
  sendData,
}) => {
  const onInputChangeHandler = (event: React.ChangeEvent<any>) => {
    setStateFromInputs(event.target.id, event.target.value);
  };

  const onCheckboxesChangeHandler = (id: string) => {
    if (blankState.checkboxes.includes(id)) {
      setStateFromInputs(
        'checkboxes',
        blankState.checkboxes.filter((e) => e !== id)
      );
    } else {
      setStateFromInputs('checkboxes', [...blankState.checkboxes, id]);
    }
  };

  const onSalaryChange = (value: Array<string>) => {
    setStateFromInputs('salary', { from: value[0], to: value[1] });
  };

  const onSubmit = () => {
    sendData(blankState);
  };

  return (
    <Wrapper>
      <NavBar />
      {loading ? (
        <CircleLoader css={'margin: 200px auto;'} size={150} />
      ) : (
        <Form
          onInputChangeHandler={onInputChangeHandler}
          onCheckboxesChangeHandler={onCheckboxesChangeHandler}
          salary={blankState.salary}
          onSalaryChange={onSalaryChange}
          onSubmit={onSubmit}
        />
      )}
    </Wrapper>
  );
};

function mapStateToProps(state: any) {
  return {
    blankState: state.form.blankState,
    loading: state.form.loading,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setStateFromInputs: (key: string, value: any) =>
      dispatch(setStateFromInputs(key, value)),
    sendData: (data: IBlankState) => dispatch(sendData(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);

interface PropsType {
  blankState: IBlankState;
  setStateFromInputs: (key: string, value: any) => void;
  loading: boolean;
  sendData: (data: IBlankState) => void;
}
