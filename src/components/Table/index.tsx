import React from 'react';
import { Wrapper } from './styles';
import Th from '../Th';
import { colNameType, RowsType, TableFieldsType } from 'types/types';

const Table: React.FC<PropsType> = ({
  sortedByField,
  onClickHandler,
  data,
  fields,
}) => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            {fields.map((field) => (
              <Th
                sortedByField={sortedByField}
                value={field.value}
                onClickHandler={onClickHandler}
                key={field.value}
              >
                {field.title}
              </Th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              {fields.map((field) => (
                <td key={field.value}>{user[field.value]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;

type PropsType = {
  data: Array<RowsType>;
  onClickHandler: (
    colName: colNameType,
    sortingBy: 'asc' | 'desc' | undefined
  ) => void;
  sortedByField: string;
  fields: Array<TableFieldsType>;
};
