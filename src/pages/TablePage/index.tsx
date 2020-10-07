import React, { useState, useEffect } from 'react';
import NavBar from 'components/NavBar';
import { Wrapper, SearchDiv } from './styles';
import Table from 'components/Table';
import Pagination from 'components/Pagination';
import { colNameType, RowsType, TableFieldsType } from 'types/types';
import { connect } from 'react-redux';
import { getData, filterData, sortData } from 'store/actions/table';
import CircleLoader from 'react-spinners/CircleLoader';

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

const TablePage: React.FC<PropsType> = ({
  data,
  getData,
  sortData,
  filterData,
  isLoading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortedByField, setSortedByField] = useState('');

  useEffect(() => {
    getData();
  }, [getData]);

  const onClickHandler = (
    colName: colNameType,
    sortingBy: 'asc' | 'desc' | undefined
  ) => {
    setSortedByField(colName);
    sortData(colName, sortingBy);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    paginate(1);
    filterData(event.target.value);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (number: number) => setCurrentPage(number);
  const arrowClickHandler = (arrow: number) => {
    if (
      currentPage + arrow < 1 ||
      currentPage + arrow > Math.ceil(data.length / rowsPerPage)
    )
      return;
    setCurrentPage(currentPage + arrow);
  };

  return (
    <Wrapper>
      <NavBar />
      <SearchDiv>
        <label htmlFor="search" className="active">
          Type for search
        </label>
        <input type="text" id="search" onChange={onChangeHandler} />
      </SearchDiv>
      {(data.length && (
        <>
          <Table
            fields={fields}
            sortedByField={sortedByField}
            data={currentRows}
            onClickHandler={onClickHandler}
          />
          <Pagination
            rowsPerPage={rowsPerPage}
            totalRowsCount={data.length}
            paginate={paginate}
            arrowClickHandler={arrowClickHandler}
            setRowsPerPage={setRowsPerPage}
            currentPage={currentPage}
          />
        </>
      )) ||
        (isLoading && (
          <CircleLoader css={'margin: 200px auto;'} size={150} />
        )) || <h4>There is no users here</h4>}
    </Wrapper>
  );
};

function mapStateToProps(state: any) {
  return {
    data: state.table.data,
    isLoading: state.table.isLoading,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getData: () => dispatch(getData()),
    filterData: (str: string) => dispatch(filterData(str)),
    sortData: (colName: colNameType, sortingBy: 'asc' | 'desc' | undefined) =>
      dispatch(sortData(colName, sortingBy)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);

type PropsType = {
  data: Array<RowsType>;
  isLoading: boolean;
  getData: () => Array<RowsType>;
  filterData: (str: string) => void;
  sortData: (
    colName: colNameType,
    sortingBy: 'asc' | 'desc' | undefined
  ) => void;
};
