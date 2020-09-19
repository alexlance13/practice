import {
  SET_STATE_FROM_INPUTS,
  START_FETCHING,
  STOP_FETCHING,
} from '../actions/types';
import { IBlankState } from '../../types/types';

const initialState: { blankState: IBlankState; loading: boolean } = {
  blankState: {
    firstName: '',
    lastName: '',
    email: '',
    nationality: '',
    in5years: '',
    gender: 'male',
    checkboxes: [],
    workExp: '0-1',
    salary: {
      from: '200.00',
      to: '500.00',
    },
  },
  loading: false,
};

export default function formReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_STATE_FROM_INPUTS:
      return {
        ...state,
        blankState: {
          ...state.blankState,
          [action.payload.key]: action.payload.value,
        },
      };
    case START_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case STOP_FETCHING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
