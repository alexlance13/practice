import {
  GET_DATA,
  FILTER_DATA,
  SORT_DATA,
  START_FETCHING,
  STOP_FETCHING,
} from '../actions/types';
import { RowsType, colNameType } from '../../types/types';
import MockData from '../../MOCK_DATA.json';

let data: Array<RowsType>;

function getDataAction(data: Array<RowsType>) {
  return {
    type: GET_DATA,
    data,
  };
}

function startFetching() {
  return {
    type: START_FETCHING,
  };
}
function stopFetching() {
  return {
    type: STOP_FETCHING,
  };
}

export function getData() {
  return async (dispatch: any) => {
    try {
      dispatch(startFetching());
      const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
      await delay(2000);
      // fake fetching from server
      const res: any = { data: MockData };
      data = res.data;
      dispatch(stopFetching());
      dispatch(getDataAction(data));
    } catch (e) {
      console.log('Getting data error, ', e);
    }
  };
}

export function filterData(str: string) {
  const filteredData = data.filter((row) => {
    let cel: colNameType;
    for (cel in row) {
      if (row[cel].toString().toLowerCase().includes(str.toLowerCase()))
        return true;
    }
    return false;
  });
  return {
    type: FILTER_DATA,
    filteredData,
  };
}

export function sortData(
  colName: colNameType,
  sortingBy: 'asc' | 'desc' | undefined
) {
  const sortData = () => {
    const dataCopy = data.concat();
    if (colName === 'id')
      return dataCopy.sort((a: RowsType, b: RowsType) =>
        sortingBy === 'asc' ? b[colName] - a[colName] : a[colName] - b[colName]
      );
    if (colName === 'ip_address')
      return dataCopy.sort((a: RowsType, b: RowsType) => {
        const num1 = Number(
          a.ip_address
            .split('.')
            .map((num) => `000${num}`.slice(-3))
            .join('')
        );
        const num2 = Number(
          b.ip_address
            .split('.')
            .map((num) => `000${num}`.slice(-3))
            .join('')
        );
        return sortingBy === 'asc' ? num2 - num1 : num1 - num2;
      });
    return dataCopy.sort((a: RowsType, b: RowsType) => {
      const stringA = a[colName].toLowerCase();
      const stringB = b[colName].toLowerCase();
      if (sortingBy === 'asc')
        return stringA > stringB ? -1 : stringA < stringB ? 1 : 0;
      return stringA < stringB ? -1 : stringA > stringB ? 1 : 0;
    });
  };
  const sortedData = sortData();
  return {
    type: SORT_DATA,
    sortedData,
  };
}
