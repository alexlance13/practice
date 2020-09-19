import {
  GET_DATA,
  FILTER_DATA,
  SORT_DATA,
  START_FETCHING,
  STOP_FETCHING,
} from '../actions/types';

const initialState = {
  data: [],
  isLoading: false,
};

export default function tableReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case FILTER_DATA:
      return {
        ...state,
        data: action.filteredData,
      };
    case SORT_DATA:
      return {
        ...state,
        data: action.sortedData,
      };
    case START_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_FETCHING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
