import {
  GET_DATA,
  FILTER_DATA,
  SORT_DATA,
  START_FETCHING,
  STOP_FETCHING,
} from '../actions/types';
import { RowsType, colNameType } from 'types/types';
import axios from 'axios';
import { notify } from 'containers/NotificationContainer';
import { delay } from 'helpers';

let usersForTable: Array<RowsType>;

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
      await delay(1000);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
      usersForTable = res.data;
      dispatch(stopFetching());
      dispatch(getDataAction(usersForTable));
    } catch (e) {
      dispatch(stopFetching());
      console.error('Getting data error: ', e);
      notify('Server is down.', 'error');
    }
  };
}

export function filterData(str: string) {
  const filteredData = usersForTable.filter((row) => {
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
    const dataCopy = usersForTable.concat();
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
