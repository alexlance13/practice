import React, { useState } from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { colNameType } from '../types/types';
import styled from 'styled-components';

const Th: React.FC<PropsType> = ({
  onClickHandler,
  value,
  children,
  sortedByField,
}) => {
  const [sortingBy, setSortingBy] = useState<'asc' | 'desc'>();

  return (
    <TableHeader
      onClick={() => {
        setSortingBy(sortingBy === 'asc' ? 'desc' : 'asc');
        onClickHandler(value, sortingBy);
      }}
    >
      {children}
      {sortedByField === value ? (
        sortingBy === 'asc' ? (
          <TiArrowSortedDown />
        ) : sortingBy === 'desc' ? (
          <TiArrowSortedUp />
        ) : null
      ) : null}
    </TableHeader>
  );
};

export default Th;

type PropsType = {
  value: colNameType;
  onClickHandler: (
    colName: colNameType,
    sortingBy: 'asc' | 'desc' | undefined
  ) => void;
  sortedByField: string;
};

const TableHeader = styled.th`
  cursor: pointer;
  user-select: none;
`;
