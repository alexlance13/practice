import React from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import { salaryType } from 'types/types';

const Slider: React.FC<PropsType> = ({ salary, onSalaryChange }) => {
  return (
    <div>
      <label>Choose your expected salary range</label>
      <br />
      <br />
      <Nouislider
        range={{ min: 0, max: 1000 }}
        start={[200, 500]}
        step={50}
        connect
        tooltips={true}
        onChange={(value: Array<string>) => onSalaryChange(value)}
      />
      <br />
      <label className="active">From: ${salary.from}</label>
      <br />
      <label className="active">To: ${salary.to}</label>
    </div>
  );
};

export default Slider;

interface PropsType {
  salary: salaryType;
  onSalaryChange: (value: Array<string>) => void;
}
