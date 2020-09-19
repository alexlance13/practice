import React from 'react';
import styled from 'styled-components';
import Th from './Th';
import { colNameType, RowsType } from '../types/types';

const Table: React.FC<PropsType> = ({
  sortedByField,
  onClickHandler,
  data,
}) => {
  const fields: Array<TableFieldsType> = [
    {
      title: 'Id',
      value: 'id',
    },
    {
      title: 'First name',
      value: 'first_name',
    },
    {
      title: 'Last name',
      value: 'last_name',
    },
    {
      title: 'Email',
      value: 'email',
    },
    {
      title: 'Gender',
      value: 'gender',
    },
    {
      title: 'Ip address',
      value: 'ip_address',
    },
  ];

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
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.first_name}</td>
              <td>{e.last_name}</td>
              <td>{e.email}</td>
              <td>{e.gender}</td>
              <td>{e.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.div`
  padding: 40px;
`;
type TableFieldsType = {
  title: string;
  value: colNameType;
};
type PropsType = {
  data: Array<RowsType>;
  onClickHandler: (
    colName: colNameType,
    sortingBy: 'asc' | 'desc' | undefined
  ) => void;
  sortedByField: string;
};
